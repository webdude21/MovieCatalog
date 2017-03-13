import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { Movie } from '../model/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  public movies: Observable<Movie[]>;
  public searchTerm = '';

  constructor(private movieSearchService: MovieService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.search(params['for']));
  }

  search(searchValue: string = ''): void {
    if (!searchValue) {
      return;
    }

    this.searchTerm = searchValue;
    this.movies = this.movieSearchService.search(searchValue);
    this.router.navigate(['/search'], { queryParams: { for: searchValue } });
  }
}
