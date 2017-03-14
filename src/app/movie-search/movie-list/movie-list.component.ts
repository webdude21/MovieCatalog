import { Movie } from '../model/movie';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent {
  @Input()
  movies: Movie[];
}
