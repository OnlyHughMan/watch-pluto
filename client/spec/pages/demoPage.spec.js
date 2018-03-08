const DemoPage = require('../../src/js/pages/demoPage');

let page;

describe('The Demo Page', () => {
  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page = new DemoPage();
      expect(page.template()).toContain('hello demoPage');
    });
  });
});
