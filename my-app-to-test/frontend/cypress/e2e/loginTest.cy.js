describe("Login Test", () => {
  before(() => {
    cy.viewport(1920, 1080);
  });
  beforeEach(() => {
    cy.visit("https://automagic-test-app.netlify.app/");
    cy.get("button[role='tab']").contains("Sign In").click();
  });

  it("should load the page", () => {
    cy.title().should("eq", "Automagic Test App");
    cy.getByDataTestId("signin-tab").click();

    cy.get("#simple-tabpanel-0").contains("Sign in").should("be.visible");
  });

  it("should login with valid credentials", () => {
    cy.getByDataTestId("signin-email").type("test@test.com");
    cy.getByDataTestId("signin-password").type("testing123!");
    cy.getByDataTestId("signin-submit").click();

    cy.get("#alert-dialog-title")
      .invoke("text")
      .should("eq", "Login successful");
  });

  it("should not login with invalid credentials", () => {
    cy.getByDataTestId("signin-email").type("wrong@test.com");
    cy.getByDataTestId("signin-password").type("password");
    cy.getByDataTestId("signin-submit").click();

    cy.get("#alert-dialog-title").invoke("text").should("eq", "Login failed");
  });
});
