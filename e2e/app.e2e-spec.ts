import { ModularLoginPage } from './app.po';

describe('modular-login App', () => {
  let page: ModularLoginPage;

  beforeEach(() => {
    page = new ModularLoginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
