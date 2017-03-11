import { TestBed, inject } from '@angular/core/testing';

import { MovieSearchService } from './movie-service.service';

describe('MovieServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieSearchService]
    });
  });

  it('should ...', inject([MovieSearchService], (service: MovieSearchService) => {
    expect(service).toBeTruthy();
  }));
});
