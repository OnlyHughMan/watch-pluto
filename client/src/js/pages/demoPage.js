const BasePage = require('./BasePage');

class DemoPage extends BasePage {
  template() {
    return `hello demoPage`;
  }
}

module.exports = DemoPage;
