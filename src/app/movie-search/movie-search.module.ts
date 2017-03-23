import { GlobalErrorHandler } from './error-handler/global-error-handler';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule, DataListModule } from 'primeng/primeng';

import { MovieDetailResolver } from './movie-detail/movie-detail.resolver';
import { MovieService } from './service/movie.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const movieRoutes: Routes = [
  { path: 'search', component: MovieSearchComponent, data: { title: 'Movie search' } },
  { path: 'movie/:id', component: MovieDetailComponent, resolve: { movieDetail: MovieDetailResolver } },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(movieRoutes),
    CommonModule,
    InputTextModule,
    DataListModule,
    HttpModule
  ],
  providers: [MovieService, MovieDetailResolver, { provide: ErrorHandler, useClass: GlobalErrorHandler }],
  declarations: [MovieListComponent, MovieListItemComponent, MovieSearchComponent, MovieDetailComponent],
  exports: [MovieListComponent, MovieListItemComponent, MovieSearchComponent, RouterModule]
})
export class MovieSearchModule { }
