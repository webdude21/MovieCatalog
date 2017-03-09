import { MovieCatalogPage } from './app.po';

describe('movie-catalog App', () => {
  let page: MovieCatalogPage;

  beforeEach(() => page = new MovieCatalogPage());

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
