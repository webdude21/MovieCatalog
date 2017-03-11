import { MovieSearchModule } from './movie-serach/movie-serach.module';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture;
  let app: AppComponent;
  let nativeElement: any;

  beforeEach(async(() => {
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
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Movie Catalog'`, async(() => {
    expect(app.title).toEqual('Movie Catalog');
  }));

  it('should render title in a h1 tag', async(() => {
    expect(nativeElement.querySelector('h1').textContent).toContain('Movie Catalog');
  }));
});
