describe("Forgot Password Test", () => {
  beforeEach(() => {
    cy.visit("https://automagic-test-app.netlify.app/");
    cy.get("button[role='tab']").contains("Forgot Password").click();
  });

  it("should load the page", () => {
    cy.title().should("eq", "Automagic Test App");
    cy.getByDataTestId("forgot-tab").click();

    cy.get("#simple-tabpanel-2")
      .contains("Forgot Password")
      .should("be.visible");
  });

  it("should send forgot password link with valid email", () => {
    cy.getByDataTestId("forgot-email").type("test@test.com");
    cy.getByDataTestId("forgot-submit").click();

    cy.get("#alert-dialog-description")
      .invoke("text")
      .should("eq", "Password reset link was sent to your email");
  });

  it("should not login with invalid credentials", () => {
    cy.getByDataTestId("forgot-email").type("invalid@test.com");
    cy.getByDataTestId("forgot-submit").click();

    cy.get("#alert-dialog-description")
      .invoke("text")
      .should("eq", "The email address provided does not exist in our system");
  });
});
