const { By, Builder, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { describe, it, before, beforeEach, after } = require("mocha");
const assert = require("assert");

describe("Signup Test", () => {
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

    let signupTab = await driver.findElement(
      By.xpath("//button[contains(text(), 'Sign Up') and @role='tab']")
    );

    await signupTab.click();
  });

  after(async () => {
    await driver.quit();
  });

  it("should load the page successfully", async () => {
    let pageTitle = await driver.getTitle();

    assert.ok(pageTitle.includes("Automagic Test App"));

    let formTitle = await driver
      .findElement(By.xpath("//*[@id='simple-tabpanel-1']/div/p/main/div/h1"))
      .getText();

    assert.ok(formTitle.includes("Sign up"));
  });

  it("should be able to signup with all required fields", async () => {
    let firstNameInput = await driver.findElement(
      By.xpath("//*[@data-testid='signup-firstname']")
    );
    let lastNameInput = await driver.findElement(
      By.xpath("//*[@data-testid='signup-lastname']")
    );
    let emailInput = await driver.findElement(
      By.xpath("//*[@data-testid='signup-email']")
    );
    let passwordInput = await driver.findElement(
      By.xpath("//*[@data-testid='signup-password']")
    );
    let aboutMeInput = await driver.findElement(
      By.xpath("//*[@data-testid='signup-about']")
    );
    let submitButton = await driver.findElement(
      By.xpath("//button[@data-testid='signup-submit']")
    );

    await firstNameInput.sendKeys("Tester");
    await lastNameInput.sendKeys("McTest");
    await emailInput.sendKeys("test@test.com");
    await passwordInput.sendKeys("testing123!");
    await aboutMeInput.sendKeys("Lorem ipsum");
    await submitButton.click();

    let dialogTitle = await driver
      .wait(until.elementLocated(By.id("alert-dialog-title")), 10000)
      .getText();

    //  let message = await dialogTitle.getText();

    assert.equal("Signup successful", dialogTitle);
  });

  it("should not be able to signup with missing required fields", async () => {
    let emailInput = await driver.findElement(
      By.xpath("//*[@data-testid='signup-email']")
    );
    let passwordInput = await driver.findElement(
      By.xpath("//*[@data-testid='signup-password']")
    );
    let submitButton = await driver.findElement(
      By.xpath("//button[@data-testid='signup-submit']")
    );

    await emailInput.sendKeys("test@test.com");
    await passwordInput.sendKeys("testing123!");

    await submitButton.click();

    let dialogTitle = await driver.wait(
      until.elementLocated(By.id("alert-dialog-title")),
      10000
    );

    let message = await dialogTitle.getText();

    assert.equal("Signup failed", message);
  });
});
