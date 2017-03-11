import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListItemComponent } from './movie-list-item.component';

describe('MovieListItemComponent', () => {
  let component: MovieListItemComponent;
  let fixture: ComponentFixture<MovieListItemComponent>;
  let nativeElement: any;
  const testMovie = {
    'title': 'Romeo Must Die',
    'year': '2000',
    'imdbID': 'tt0165929',
    'imdbLink': "testLink",
    'type': 'movie',
    'poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5Nzg1MjA5M15BMl5BanBnXkFtZTYwNzAxNzg2._V1_SX300.jpg'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListItemComponent);
    component = fixture.componentInstance;
    component.movie = testMovie;
    fixture.detectChanges();
    nativeElement = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a movie instance`, async(() => {
    expect(component.movie).toEqual(testMovie);
  }));

  it('should render title in a anchor tag', async(() => {
    const anchorTag = nativeElement.querySelector('a');
    expect(anchorTag.textContent).toContain(testMovie.title);
    expect(anchorTag.href).toContain(testMovie.imdbLink);
  }));
});
