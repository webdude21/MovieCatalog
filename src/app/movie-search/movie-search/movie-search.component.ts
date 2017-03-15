import { Page } from '../model/page';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { Movie } from '../model/movie';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html'
})
export class MovieSearchComponent implements OnInit, OnDestroy {
  moviesSubscriptions: Subscription;
  public movies: Movie[];
  public rows = 10;
  public totalRecords = 0;
  public searchTerm = '';

  constructor(private movieSearchService: MovieService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.search(params['for']));
  }

  onLazyLoad(event: Page): void {
    this.search(this.searchTerm, this.getPage(event), true);
  }

  ngOnDestroy(): void {
    this.moviesSubscriptions.unsubscribe();
  }

  getPage(page: Page): number {
    return page.first + page.rows / page.rows;
  }

  search(searchValue = '', page = 1, skipRedirect = false): void {
    if (!searchValue) {
      return;
    }

    this.searchTerm = searchValue;
    this.moviesSubscriptions = this.movieSearchService
      .search(searchValue, page)
      .subscribe(pageableMovies => {
        if (!pageableMovies || pageableMovies.totalRecords <= 0) {
          return;
        }

        this.totalRecords = pageableMovies.totalRecords;
        this.movies = pageableMovies.entities;
        this.rows = pageableMovies.page.rows;
      });

    if (!skipRedirect) {
      this.router.navigate(['/search'], { queryParams: { for: searchValue } });
    }
  }
}
