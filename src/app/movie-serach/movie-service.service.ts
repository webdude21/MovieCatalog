import { Movie } from './model/movie';
import { environment } from '../../environments/environment';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import '../utils/extensions/string.extensions';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieSearchService {
  private static lowerCaseObjectKeys(obj: any) {
    for (const key of Object.keys(obj)) {
      if (!key.charAtIsLowerCase(0)) {
        obj[key.lowerFirstLetter()] = obj[key];
        delete obj[key];
      }
    }
    return obj;
  }

  private static addImdbLink(movie: Movie) {
    movie.imdbLink = `http://www.imdb.com/title/${movie.imdbID}`;
  }

  constructor(private http: Http) { }

  search(movieTitle: string) {
    const params = new URLSearchParams();
    params.set('s', movieTitle);

    return this.http
      .get(`${environment.BASE_URL}`, new RequestOptions({ search: params }))
      .map(res => res.json())
      .map(({ Search }) => <Movie[]>Search
        .map((movie: Movie) => {
          MovieSearchService.lowerCaseObjectKeys(movie);
          MovieSearchService.addImdbLink(movie);
          return movie;
        }));
  }
}
