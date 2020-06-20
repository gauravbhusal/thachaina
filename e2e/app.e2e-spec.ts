import { ShaniTemplatePage } from './app.po';

describe('Shani App', function() {
  let page: ShaniTemplatePage;

  beforeEach(() => {
    page = new ShaniTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
