import { browser, element, by } from 'protractor';

export class MovieDetailPage {

  navigateTo(ibdbId: string) {
    return browser.get(`/movie/${ibdbId}`);
  }

  getTitleText() {
    return element(by.css('app-root app-movie-detail h3')).getText();
  }

  getPlotText() {
    return element(by.css('app-root app-movie-detail p')).getText();
  }
}
