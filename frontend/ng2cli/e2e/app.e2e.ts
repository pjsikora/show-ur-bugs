import { Ng2cliPage } from './app.po';

describe('ng2cli App', function() {
  let page: Ng2cliPage;

  beforeEach(() => {
    page = new Ng2cliPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2cli works!');
  });
});
