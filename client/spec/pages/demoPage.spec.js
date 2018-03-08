const DemoPage = require('../../src/js/pages/demoPage');

let page;

describe('The Demo Page', () => {
  beforeEach(() => {
    page = new DemoPage();
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      console.log(page);
      console.log(page.watchFace);

      let element = document.getElementById('watch-face');
      console.log(page.template());
      expect(page.template()).toContain('hello demoPage');
    });
  });
});
//    expect(element.innerText).toBe('hello demoPage');
