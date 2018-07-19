const addContext = require('mochawesome/addContext');

describe('API page', function () {
  it('should load', function () {
    browser.url('./api.html');
    let title = browser.getTitle();

    addContext(this, `Page title is ${title}`);
  })
})