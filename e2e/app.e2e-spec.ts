import { Ng2CliRc2TmpPage } from './app.po';

describe('ng2-cli-rc2-tmp App', () => {
  let page: Ng2CliRc2TmpPage;

  beforeEach(() => {
    page = new Ng2CliRc2TmpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
