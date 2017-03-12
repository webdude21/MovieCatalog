import { MovieService } from '../service/movie.service';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  public movies: Observable<Movie[]>;

  constructor(private movieSearchService: MovieService) {
  }

  search(searchValue: string) {
    this.movies = this.movieSearchService.search(searchValue);
  }
}
