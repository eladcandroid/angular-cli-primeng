import { CheckPage } from './app.po';

describe('check App', function() {
  let page: CheckPage;

  beforeEach(() => {
    page = new CheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
