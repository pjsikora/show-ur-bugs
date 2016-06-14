export class Ng2cliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2cli-app h1')).getText();
  }
}
