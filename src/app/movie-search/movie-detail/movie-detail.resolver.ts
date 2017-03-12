import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { Resolve } from '@angular/router/src/interfaces';
import { MovieDetail } from '../model/movie';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieDetailResolver implements Resolve<MovieDetail> {
  constructor(private movieService: MovieService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetail> {
    return this.movieService.getMovieDetail(route.params.id);
  }
}
