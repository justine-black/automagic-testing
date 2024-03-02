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
      By.xpath("//button[contains(text(), 'Sign In') and @role='tab']")
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
      .findElement(By.xpath("//*[@id='simple-tabpanel-0']/div/p/main/div/h1"))
      .getText();

    assert.ok(formTitle.includes("Sign in"));
  });

  it("should be able to login with valid credentials", async () => {
    let emailInput = await driver.findElement(
      By.xpath("//input[@data-testid='signin-email']")
    );
    let passwordInput = await driver.findElement(
      By.xpath("//input[@data-testid='signin-password']")
    );
    let submitButton = await driver.findElement(
      By.xpath("//button[@data-testid='signin-submit']")
    );

    await emailInput.sendKeys("test@test.com");
    await passwordInput.sendKeys("testing123!");

    await submitButton.click();

    let dialogTitle = await driver
      .wait(until.elementLocated(By.id("alert-dialog-title")), 10000)
      .getText();

    //  let message = await dialogTitle.getText();

    assert.equal("Login successful", dialogTitle);
  });

  it("should not be able to login with invalid credentials", async () => {
    let emailInput = await driver.findElement(
      By.xpath("//input[@data-testid='signin-email']")
    );
    let passwordInput = await driver.findElement(
      By.xpath("//input[@data-testid='signin-password']")
    );
    let submitButton = await driver.findElement(
      By.xpath("//button[@data-testid='signin-submit']")
    );

    await emailInput.sendKeys("wrong@email.com");
    await passwordInput.sendKeys("password");

    await submitButton.click();

    let dialogTitle = await driver.wait(
      until.elementLocated(By.id("alert-dialog-title")),
      10000
    );

    let message = await dialogTitle.getText();

    assert.equal("Login failed", message);
  });
});
