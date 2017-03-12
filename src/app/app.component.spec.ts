import { MovieSearchModule } from './movie-search/movie-search.module';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture;
  let app: AppComponent;
  let nativeElement: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MovieSearchModule
      ],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    app = fixture.debugElement.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Movie Catalog'`, () => {
    expect(app.title).toEqual('Movie Catalog');
  });

  it('should render title in a h1 tag', () => {
    expect(nativeElement.querySelector('h1').textContent).toContain('Movie Catalog');
  });
});
