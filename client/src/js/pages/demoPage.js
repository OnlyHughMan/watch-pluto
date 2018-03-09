const BasePage = require('./BasePage');

class DemoPage extends BasePage {
  template() {
    return   `
      <h1>DemoPage!</h1>
      <p>Hello, i am the demoPage</p>
    `;
  }
}

module.exports = DemoPage;
