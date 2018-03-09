const DemoPage = require('../../src/js/pages/demoPage');

let page;

describe('The Demo Page', () => {
  beforeEach(() => {
    page = new DemoPage();
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      expect(page.template()).toContain('Hello, i am the demoPage');
    });
  });
});
