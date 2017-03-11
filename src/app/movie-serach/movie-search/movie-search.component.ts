import { Movie } from '../model/movie';
import { Observable } from 'rxjs/Rx';
import { MovieSearchService } from '../movie-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  private movies: Observable<Movie[]>;

  constructor(private movieSearchService: MovieSearchService) {
  }

  search(searchValue: string) {
    this.movies = this.movieSearchService.search(searchValue);
  }
}
