const { reloadApp } = require("detox-expo-helpers");
//curl https://expo.io/--/api/v2/versions |  python -c 'import sys, json; print json.load(sys.stdin)["iosUrl"]'

describe("Example", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("should show hello screen after tap", async () => {
    await element(by.id("hello_button")).tap();
    await expect(element(by.text("Hello!!!"))).toBeVisible();
  });

  it("should show world screen after tap", async () => {
    await element(by.id("world_button")).tap();
    await expect(element(by.text("World!!!"))).toBeVisible();
  });
});
