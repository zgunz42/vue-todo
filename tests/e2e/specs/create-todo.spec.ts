/// <reference types="cypress" />
// @ts-check
describe('create todo', () => {
  it('should add note into todo', function () {
    cy.visit("/");
    cy.contains("Add Todo").click();
    cy.get("#note-message").type("Todo sample");
    cy.contains("OK").click();
  });
});
