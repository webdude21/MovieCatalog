import { browser } from 'protractor/built';
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

  it('using the search should yield a page with 10 results', () => {
    page.doSearch('Die hard');
    expect(page.getMoviesResultCount()).toEqual(10);
    expect(page.getResultMovieTitle(1)).toEqual('Die Hard');
  });

  it('clicking on a movie navigates to the movie detail page', () => {
    page.doSearch('Die hard');
    page.goToDetailPageForMovie(1);
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('movie/tt0095016');
  });

  it('clicking on a page number in the paginator navigates to another page in the search results', () => {
    page.doSearch('Die hard');
    page.goToPage(2);
    browser.waitForAngular();
    expect(page.getMoviesResultCount()).toEqual(10);
    expect(page.getResultMovieTitle(1)).toEqual('Angels Die Hard');
  });
});
