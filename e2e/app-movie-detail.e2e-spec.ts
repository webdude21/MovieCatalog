import { MovieDetailPage } from './app.movie-detail-page';

describe('movie-detail screen', () => {
  let page: MovieDetailPage;
  const dieHardImdbLink = 'tt0095016';

  beforeEach(() => {
    page = new MovieDetailPage();
  });

  it('should contain title', () => {
    page.navigateTo(dieHardImdbLink);
    expect(page.getTitleText()).toEqual('Title: Die Hard');
  });

  it('should contain plot', () => {
    page.navigateTo(dieHardImdbLink);
    expect(page.getPlotText()).toContain('Plot: John McClane, officer of the NYPD');
  });
});
