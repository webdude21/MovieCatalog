import { HttpModule } from '@angular/http';
import { MovieSearchService } from './movie-search/movie-search.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [MovieSearchService],
  declarations: [MovieListComponent, MovieListItemComponent, MovieSearchComponent],
  exports: [MovieListComponent, MovieListItemComponent, MovieSearchComponent]
})
export class MovieSearchModule { }
