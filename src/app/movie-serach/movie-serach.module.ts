import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MovieListComponent, MovieListItemComponent]
})
export class MovieSearchModule { }
