import { HarvestingPage } from './app.po';

describe('harvesting App', () => {
  let page: HarvestingPage;

  beforeEach(() => {
    page = new HarvestingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
