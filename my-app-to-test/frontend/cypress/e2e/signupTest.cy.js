describe("Sign up Test", () => {
  before(() => {
    cy.viewport(1920, 1080);
  });
  beforeEach(() => {
    cy.visit("https://automagic-test-app.netlify.app/");
    cy.get("button[role='tab']").contains("Sign Up").click();
  });

  it("should load the page", () => {
    cy.title().should("eq", "Automagic Test App");
    cy.getByDataTestId("signup-tab").click();

    cy.get("#simple-tabpanel-1").contains("Sign up").should("be.visible");
  });

  it("should signup with all required fields", () => {
    cy.getByDataTestId("signup-firstname").type("Tester");
    cy.getByDataTestId("signup-lastname").type("McTester");
    cy.getByDataTestId("signup-email").type("test@test.com");
    cy.getByDataTestId("signup-password").type("testing123!");
    cy.getByDataTestId("signup-about").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );
    cy.getByDataTestId("signup-submit").click();

    cy.get("#alert-dialog-title")
      .invoke("text")
      .should("eq", "Signup successful");
  });

  it("should not sign up with missing required fields", () => {
    cy.getByDataTestId("signup-firstname").type("Tester");
    cy.getByDataTestId("signup-email").type("test@test.com");
    cy.getByDataTestId("signup-password").type("testing123!");
    cy.getByDataTestId("signup-submit").click();

    cy.get("#alert-dialog-title").invoke("text").should("eq", "Signup failed");
  });
});
