import { MovieCatalogPage } from './app.po';

describe('movie-catalog App', () => {
  let page: MovieCatalogPage;

  beforeEach(() => {
    page = new MovieCatalogPage();
    page.navigateTo();
  });

  it('should display message saying Movie Catalog', () => {
    expect(page.getParagraphText()).toEqual('Movie Catalog');
  });

  it('using the search should yield results', () => {
    page.doSearch('Die hard');
    expect(page.getResultMovieTitle(1)).toEqual('Die Hard');
  });
});
