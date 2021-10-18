describe('IMDb', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Goto Profile', async () => {
    await waitFor(element(by.id('USER_PROFILE_ICON_HOME'))).toBeVisible();
    await element(by.id('USER_PROFILE_ICON_HOME')).tap();
    await element(by.id('header-back')).tap();
  });

  it('Navigate Between Tabs', async () => {
    await element(by.id('MOVIES_TAB')).tap();
    await element(by.id('TV_TAB')).tap();
    await element(by.id('HOME_TAB')).tap();
  });

  it('Open Trending movie', async () => {
    await element(by.id('TRENDING_MOVIES_LIST')).scrollToIndex(10);
    // await element(by.id('TRENDING_MOVIES_LIST_10')).tap();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
