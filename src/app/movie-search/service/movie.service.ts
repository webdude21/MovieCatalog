import { PageableEntity } from '../model/pagable-entity';
import { isMovieDetail } from '../../utils/type-guards';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { Movie } from '../model/movie';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import '../../utils/extensions/string.extensions';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  constructor(private http: Http) { }

  private lowerCaseObjectKeys(obj: any) {
    for (const key of Object.keys(obj)) {

      // in case it's a nested object, do it's keys as well
      if (typeof obj[key] === 'object') {
        this.lowerCaseObjectKeys(obj[key]);
      }

      if (!key.charAtIsLowerCase(0)) {
        obj[key.lowerFirstLetter()] = obj[key];
        delete obj[key];
      }
    }
    return obj;
  }

  private addImdbLink(movie: Movie) {
    movie.imdbLink = `http://www.imdb.com/title/${movie.imdbID}`;
  }

  private getEmptyMoviePage(): PageableEntity<Movie> {
    return new PageableEntity({ first: 1, rows: 0 }, 0, []);
  }

  private prepareMovieDetailRequestParams(imdbID: string) {
    const params = new URLSearchParams();
    params.set('i', imdbID);
    params.set('plot', 'full');
    return params;
  }

  private verifyPageNumber(page: number): void {
    if (page < 1) {
      throw Error(`Page shouldn't be less than 1`);
    }
  }

  private removeNonExistingPosters<T extends { poster?: string }>(movie: T): T {
    if (movie.poster === 'N/A') {
      movie.poster = undefined;
    }

    return movie;
  }

  private retryStrategy(errors: Observable<any>): Observable<any> {
    const timesToRetry = 3;
    const timeBetweenRetries = 1000;
    const inc = (x: number) => x + 1;

    return errors
      .scan(inc, 0)
      .takeWhile(acc => acc < timesToRetry)
      .delay(timeBetweenRetries);
  }

  getMovieDetail(imdbID: string) {
    return this.http
      .get(`${environment.BASE_URL}`, new RequestOptions({ search: this.prepareMovieDetailRequestParams(imdbID) }))
      .map(res => res.json())
      .map(res => this.lowerCaseObjectKeys(res))
      .map(res => this.removeNonExistingPosters(res))
      .map(res => isMovieDetail(res) ? res : null);
  }

  search(movieTitle: string, page: number = 1): Observable<PageableEntity<Movie>> {
    if (!movieTitle || !movieTitle.trim()) {
      return Observable.of(this.getEmptyMoviePage());
    }

    this.verifyPageNumber(page);

    const params = new URLSearchParams();
    params.set('s', movieTitle);
    params.set('page', page.toString(10));

    return this.http
      .get(`${environment.BASE_URL}`, new RequestOptions({ search: params }))
      .map(res => res.json())
      .map(({ Search, totalResults }: { Search?: Movie[], totalResults: string }) => {
        if (!Search) {
          return this.getEmptyMoviePage();
        }

        const result = Search.map((movie: Movie) => {
          this.lowerCaseObjectKeys(movie);
          this.addImdbLink(movie);
          this.removeNonExistingPosters(movie);
          return movie;
        });

        return new PageableEntity({ first: 1, rows: result.length }, +totalResults, result);
      })
      .retryWhen(this.retryStrategy);
  }
}
