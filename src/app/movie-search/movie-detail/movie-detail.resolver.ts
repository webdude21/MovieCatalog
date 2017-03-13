import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { Resolve } from '@angular/router/src/interfaces';
import { MovieDetail } from '../model/movie';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieDetailResolver implements Resolve<MovieDetail> {
  constructor(private movieService: MovieService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetail> {
    return this.movieService.getMovieDetail(route.params['id']).map(res => res ? res : this.router.navigate(['/search']));
  }
}
