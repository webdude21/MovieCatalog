import { Movie } from '../model/movie';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Response, ResponseOptions } from '@angular/http';
import { MovieSearchService } from './movie-search.service';
import { async, inject, TestBed } from '@angular/core/testing';

describe('MovieServiceService.search()', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [MovieSearchService, MockBackend]
    });
  });

  it('should ...', inject([MovieSearchService], (service: MovieSearchService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable<Array<Movie>>', async(inject([MovieSearchService, MockBackend], (service: MovieSearchService, mockBackend: MockBackend) => {
    const mockRes = {
      'Search': [
        { Title: 'Die Hard', Year: '1988', imdbID: 'tt0095016', Type: 'movie', Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzNmY2IwYzAtNDQ1NC00MmI4LThkOTgtZmVhYmExOTVhMWRkXkEyXkFqcGdeQXVyMTk5NDA3Nw@@._V1_SX300.jpg' },
        { Title: 'Live Free or Die Hard', Year: '2007', imdbID: 'tt0337978', Type: 'movie', Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDQxMDE1OTg4NV5BMl5BanBnXkFtZTcwMTMzOTQzMw@@._V1_SX300.jpg' },
        { Title: 'Die Hard with a Vengeance', Year: '1995', imdbID: 'tt0112864', Type: 'movie', Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZjI0ZWFiMmQtMjRlZi00ZmFhLWI4NmYtMjQ5YmY0MzIyMzRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg' },
        { Title: 'Die Hard 2', Year: '1990', imdbID: 'tt0099423', Type: 'movie', Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzMzYzk3ZTEtZDg0My00MTY5LWE3ZmQtYzNhYjhjN2RhZGRjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg' },
        { Title: 'A Good Day to Die Hard', Year: '2013', imdbID: 'tt1606378', Type: 'movie', Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwNzgyNzUzOV5BMl5BanBnXkFtZTcwMzAwOTA5OA@@._V1_SX300.jpg' },
        { Title: 'Don\'t Die Too Hard!', Year: '2001', imdbID: 'tt0259060', Type: 'movie', Poster: 'http://ia.media-imdb.com/images/M/MV5BNjUwNDY5Nzc4N15BMl5BanBnXkFtZTcwNTE2OTc3MQ@@._V1_SX300.jpg' },
        { Title: 'Die Hard Dracula', Year: '1998', imdbID: 'tt0162930', Type: 'movie', Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwNTQwNDQ4MF5BMl5BanBnXkFtZTcwMDY2NjUyMQ@@._V1_SX300.jpg' },
        { Title: 'Hard to Die', Year: '1990', imdbID: 'tt0103111', Type: 'movie', Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4NTU1NjcxN15BMl5BanBnXkFtZTcwOTA4NjQyMQ@@._V1_SX300.jpg' },
        { Title: 'Die Hard', Year: '1997', imdbID: 'tt0254278', Type: 'movie', Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMWU2NTNkYjMtMDQ0MC00YThiLWI1M2QtNTU3YThiMWNmMzZjXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg' },
        { Title: 'Die Hard Trilogy', Year: '1996', imdbID: 'tt0257548', Type: 'game', Poster: 'http://ia.media-imdb.com/images/M/MV5BYWU1Njk3NGEtMjk2OS00NmFkLTgxOGUtNjM0NGU1NzI0M2VhXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg' }], totalResults: '63', Response: 'True'
    };

    mockBackend.connections.subscribe((connection: MockConnection) =>
      connection.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockRes) }))));

    service.search('Die Hard').subscribe((movies: Movie[]) => {
      expect(movies.length).toBe(10);
      expect(movies[0].title).toBe('Die Hard');
      expect(movies[5].title).toBe('Don\'t Die Too Hard!');
      expect(movies[9].title).toBe('Die Hard Trilogy');
    });
  })));
});
