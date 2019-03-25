import { AppPage } from './app.po';

describe('angular-dot-net-core App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('AngularDotNetCore');
  });
});
