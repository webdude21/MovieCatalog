import { browser, element, by } from 'protractor';

export class MovieCatalogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  doSearch(searchTerm: string) {
    const searchField = element(by.css('app-root app-movie-search input'));
    const searchBtn = element(by.css('app-root app-movie-search button'));
    searchField.sendKeys(searchTerm);
    searchBtn.click();
  }

  getResultMovieTitle(index: number) {
    return element(by.css(`app-root app-movie-search app-movie-list ul li:nth-child(${index}) app-movie-list-item a`)).getText();
  }
}
