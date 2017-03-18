import { protractor } from 'protractor/built/ptor';
import { browser, element, by } from 'protractor';

export class MovieCatalogPage {
  private static movieList = 'app-root app-movie-search app-movie-list';
  private static movieListItems = `${MovieCatalogPage.movieList} ul li`;

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  doSearch(searchTerm: string) {
    const searchField = element(by.css('app-root app-movie-search input'));
    searchField.sendKeys(searchTerm, protractor.Key.ENTER);
  }

  getResultMovieTitle(index: number) {
    return element
      .all(by.css(MovieCatalogPage.movieListItems))
      .get(index - 1)
      .all(by.css('app-movie-list-item a'))
      .get(0)
      .getText();
  }

  getMoviesResultCount() {
    return element.all(by.css(MovieCatalogPage.movieListItems)).count();
  }

  goToPage(index: number): void {
    element
      .all(by.css(`${MovieCatalogPage.movieList} p-datalist p-paginator .ui-paginator-pages a`))
      .get(index - 1)
      .click();
  }
}
