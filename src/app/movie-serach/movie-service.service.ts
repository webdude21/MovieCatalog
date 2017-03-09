import { environment } from '../../environments/environment';
import { Movie } from './model/movie';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieServiceService {

  constructor(private http: Http) { }

  search(movie: Movie) {
    const searchParams = new URLSearchParams();
    searchParams.set('t', movie.name);
    return this.http.get(`${environment.BASE_URL}`, searchParams).map(res => res.json());
  }
}
