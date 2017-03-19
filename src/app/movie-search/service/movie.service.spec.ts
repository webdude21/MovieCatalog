import { HttpModule } from '@angular/http';
import { Movie } from '../model/movie';
import { async, inject, TestBed } from '@angular/core/testing';
import { MovieService } from './movie.service';
import { PageableEntity } from '../model/pagable-entity';

describe('MovieServiceService.search()', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [MovieService]
    });
  });

  it('should ...', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable<Array<Movie>>', async(inject([MovieService], (service: MovieService) => {
    service.search('Die Hard').subscribe((pageableMovies: PageableEntity<Movie>) => {
      const movies = pageableMovies.entities;
      expect(movies.length).toBe(10);
      expect(movies[0].title).toBe('Die Hard');
      expect(movies[5].title).toBe('Don\'t Die Too Hard!');
      expect(movies[9].title).toBe('Die Hard Trilogy');
    });
  })));

  it('should return an empty Observable<Array<Movie>> when the movie can\'t be found',
    async(inject([MovieService], (service: MovieService) => {
      service.search('').subscribe((pageableMovies: PageableEntity<Movie>) => {
        expect(pageableMovies.entities.length).toBe(0);
      });
    })));
});
