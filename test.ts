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
//////////////
describe('Search and Dropdown Tests', () => {
  beforeEach(() => {
    cy.visit('/transport');
  });

  it('should display a list of cities', () => {
    cy.get('[data-test="dropdown-body"]').should('not.exist');
    cy.get('[data-test="dropdown-btn"]').click();
    cy.get('[data-test="dropdown-body"]').should('be.visible');
  });

  it('should display text', () => {
    const numberPPO = 12345567;
    cy.get('[data-test="search-input-PPO"]').should('be.visible');
    cy.get('[data-test="search-input-PPO"]')
      .should('be.visible')
      .type(`${numberPPO}{enter}`);
  });
});
