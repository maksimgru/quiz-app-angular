import { VimboxPage } from './app.po';

describe('vimbox App', () => {
  let page: VimboxPage;

  beforeEach(() => {
    page = new VimboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
