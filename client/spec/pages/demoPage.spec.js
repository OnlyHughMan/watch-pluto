const DemoPage = require('../../src/js/pages/demoPage');

let page;

describe('The Demo Page', () => {
  beforeEach(() => {
    page = new DemoPage();
  });

  describe('template', () => {
    it('should contain the correct text', () => {
      expect(page.template()).toContain('This is a demo');
    });
  });
});
