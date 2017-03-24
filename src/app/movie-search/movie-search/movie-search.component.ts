import { MessageService } from '../../message.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { Page } from '../model/page';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { Movie } from '../model/movie';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Message } from '../../model/message';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html'
})
export class MovieSearchComponent implements OnInit, OnDestroy {
  public movies: Movie[];
  public rows = 10;
  public totalRecords = 0;
  public searchTerm = '';
  public currentPage = 1;
  private searchFieldRef: HTMLInputElement;
  private searchTermSub: Subscription;
  private movieSearchSub: Subscription;

  constructor(
    private movieSearchService: MovieService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private domRef: ElementRef) { }

  ngOnInit(): void {
    this.searchFieldRef = this.domRef.nativeElement.firstElementChild;
    this.searchTermSub = Observable
      .fromEvent(this.domRef.nativeElement, 'keyup')
      .debounce(() => Observable.interval(1000))
      .map(x => this.searchFieldRef.value)
      .subscribe(searchTerm => this.search(searchTerm));

    this.route.queryParams.subscribe(params => this.search(params['for']));
  }

  onLazyLoad(event: Page): void {
    this.search(this.searchTerm, this.getPage(event), true);
  }

  search(searchValue = '', page = 1, skipRedirect = false): void {
    if (!searchValue || this.isTheSameQuery(searchValue, page)) {
      return;
    }

    this.searchTerm = searchValue;
    this.movieSearchSub = this.movieSearchService
      .search(searchValue, page)
      .subscribe(pageableMovies => {
        if (!pageableMovies || pageableMovies.totalRecords <= 0) {
          this.warnAboutNoResult(searchValue);
          return;
        }

        this.totalRecords = pageableMovies.totalRecords;
        this.movies = pageableMovies.entities;
        this.rows = pageableMovies.page.rows;
        this.currentPage = page;
      });

    if (!skipRedirect) {
      this.router.navigate(['/search'], { queryParams: { for: searchValue } });
    }
  }

  ngOnDestroy(): void {
    this.unSubscribe(this.movieSearchSub, this.searchTermSub);
  }

  private warnAboutNoResult(searchTerm: string): void {
    this.messageService.addMessage(new Message('No such movie', `No movie named ${searchTerm} was found.`, 'warn'));
  }

  private getPage(page: Page): number {
    return (page.first / page.rows) + 1;
  }

  private isTheSameQuery(searchValue: string, page: number): boolean {
    return this.searchTerm === searchValue && page === this.currentPage;
  }

  private unSubscribe(...subs: Subscription[]): void {
    subs.filter(x => !!x).forEach(sub => sub.unsubscribe());
  }
}
