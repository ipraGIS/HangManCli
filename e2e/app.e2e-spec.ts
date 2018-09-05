import { HangManCliPage } from './app.po';

describe('hang-man-cli App', function() {
  let page: HangManCliPage;

  beforeEach(() => {
    page = new HangManCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
