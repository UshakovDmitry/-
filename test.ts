describe('Transport Tab Tests', () => {
  beforeEach(() => {
    cy.visit('/transport');
  });

  it('should activate the Transport button when clicked', () => {
    cy.get('[data-test="transport-btn"]')
      .click()
      .should('have.class', 'isActiveTab');
    cy.get('[data-test="loaders-btn"]').should('not.have.class', 'isActiveTab');
  });

  it('should toggle between Transport and Loaders when clicked', () => {
    cy.get('[data-test="transport-btn"]')
      .click()
      .should('have.class', 'isActiveTab');
    cy.get('[data-test="loaders-btn"]')
      .click()
      .should('have.class', 'isActiveTab');
    cy.get('[data-test="transport-btn"]').should('not.have.class', 'isActiveTab');
  });
});
