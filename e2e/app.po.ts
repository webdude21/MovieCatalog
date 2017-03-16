import { protractor } from 'protractor/built/ptor';
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
    searchField.sendKeys(searchTerm, protractor.Key.ENTER);
  }

  getResultMovieTitle(index: number) {
    return element(by.css(`app-root app-movie-search app-movie-list ul li:nth-child(${index}) app-movie-list-item a`)).getText();
  }
}
