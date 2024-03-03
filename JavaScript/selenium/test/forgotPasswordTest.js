const { By, Builder, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { describe, it, before, beforeEach, after } = require("mocha");
const assert = require("assert");

describe("Login Test", () => {
  let driver;

  before(async () => {
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(
        new chrome.Options().addArguments(
          // "--headless",
          "--window-size=1920,1080",
          "--window-position=0,0"
        )
      )
      .build();
  });

  beforeEach(async () => {
    await driver.get("https://automagic-test-app.netlify.app/");

    let signinTab = await driver.findElement(
      By.xpath("//button[contains(text(), 'Forgot Password') and @role='tab']")
    );

    await signinTab.click();
  });

  after(async () => {
    await driver.quit();
  });

  it("should load the page successfully", async () => {
    let pageTitle = await driver.getTitle();

    assert.ok(pageTitle.includes("Automagic Test App"));

    let formTitle = await driver
      .findElement(By.xpath("//*[@id='simple-tabpanel-2']/div/p/main/div/h1"))
      .getText();

    assert.ok(formTitle.includes("Forgot Password"));
  });

  it("should be able to forgot password with valid email", async () => {
    let emailInput = await driver.findElement(
      By.xpath("//input[@data-testid='forgot-email']")
    );
    let submitButton = await driver.findElement(
      By.xpath("//button[@data-testid='forgot-submit']")
    );

    await emailInput.sendKeys("test@test.com");

    await submitButton.click();

    let dialogTitle = await driver
      .wait(until.elementLocated(By.id("alert-dialog-description")), 10000)
      .getText();

    //  let message = await dialogTitle.getText();

    assert.equal("Password reset link was sent to your email", dialogTitle);
  });

  it("should not be able to forgot password with invalid email", async () => {
    let emailInput = await driver.findElement(
      By.xpath("//input[@data-testid='forgot-email']")
    );
    let submitButton = await driver.findElement(
      By.xpath("//button[@data-testid='forgot-submit']")
    );

    await emailInput.sendKeys("invalid@test.com");

    await submitButton.click();

    let dialogTitle = await driver
      .wait(until.elementLocated(By.id("alert-dialog-description")), 10000)
      .getText();

    //  let message = await dialogTitle.getText();

    assert.equal(
      "The email address provided does not exist in our system",
      dialogTitle
    );
  });
});
