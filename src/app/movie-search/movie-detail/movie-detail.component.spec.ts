import { Observable } from 'rxjs/Rx';
import { MovieDetailResolver } from './movie-detail.resolver';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieDetail } from '../model/movie';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let movieDetail: MovieDetail = {
    imdbRating: '8.2',
    imdbVotes: '619,580',
    imdbID: 'tt0095016',
    title: 'Die Hard',
    year: '1988',
    rated: 'R',
    released: '20 Jul 1988',
    runtime: '131 min',
    genre: 'Action, Thriller',
    director: 'John McTiernan',
    writer: 'Roderick Thorp (novel), Jeb Stuart (screenplay), Steven E. de Souza (screenplay)',
    actors: 'Bruce Willis, Bonnie Bedelia, Reginald VelJohnson, Paul Gleason',
    plot: 'John McClane, officer of the NYPD, tries to save his wife Holly Gennaro and several others that were taken hostage by German terrorist Hans Gruber during a Christmas party at the Nakatomi Plaza in Los Angeles.',
    language: 'English, German, Italian',
    country: 'USA', 'awards': 'Nominated for 4 Oscars. Another 6 wins & 2 nominations.',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzNmY2IwYzAtNDQ1NC00MmI4LThkOTgtZmVhYmExOTVhMWRkXkEyXkFqcGdeQXVyMTk5NDA3Nw@@._V1_SX300.jpg',
    metascore: '70',
    type: 'movie',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule.withRoutes([
        {
          path: 'movie/:id',
          component: MovieDetailComponent,
          resolve: { movieDetail: MovieDetailResolver }
        }])],
      declarations: [MovieDetailComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, {
        provide: ActivatedRoute,
        useValue: {
          params: Observable.of({ id: movieDetail.imdbID })
        }
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    component.movie = movieDetail;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
