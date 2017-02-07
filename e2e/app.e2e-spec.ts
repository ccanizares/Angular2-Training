import { AngularscssPage } from './app.po';

describe('angularscss App', function() {
  let page: AngularscssPage;

  beforeEach(() => {
    page = new AngularscssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
