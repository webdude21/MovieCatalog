import { Page } from '../model/page';
import { Movie } from '../model/movie';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent {
  @Input()
  movies: Movie[];

  @Input()
  rows = 9;

  @Input()
  totalRecords = 0;

  @Output()
  lazyLoad = new EventEmitter();

  onLoadData(event: Page) {
    this.lazyLoad.emit(event);
  }
}
