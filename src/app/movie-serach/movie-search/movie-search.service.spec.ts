import { HttpModule } from '@angular/http';
import { MovieSearchService } from './movie-search.service';
import { TestBed, inject } from '@angular/core/testing';
//import * as TypeMoq from 'typemoq';

describe('MovieServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [MovieSearchService]
    });
  });

  it('should ...', inject([MovieSearchService], (service: MovieSearchService) => {
    expect(service).toBeTruthy();
  }));

  // it('should dispatch an http request when calling search', inject([MovieSearchService], (service: MovieSearchService) => {
  // }));
});
