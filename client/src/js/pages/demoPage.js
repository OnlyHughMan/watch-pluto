const BasePage = require('./BasePage');

class DemoPage extends BasePage {
  template() {
    return `
      <h1>This is a demo.</h1>
      <p>What a great page!</p>
    `;
  }
}

module.exports = DemoPage;
