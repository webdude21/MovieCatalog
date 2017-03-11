import { HttpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchService } from './movie-search.service';
import { MovieListItemComponent } from '../movie-list-item/movie-list-item.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieSearchComponent } from './movie-search.component';

describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [MovieSearchService],
      declarations: [MovieSearchComponent, MovieListComponent, MovieListItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
