import { AngularTopMoviesPage } from './app.po';

describe('angular-top-movies App', function() {
  let page: AngularTopMoviesPage;

  beforeEach(() => {
    page = new AngularTopMoviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
