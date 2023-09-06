describe('template spec', () => {
  // TRANSPORT
  beforeEach(() => {
    cy.visit('/transport');
  });
  it('should display a list of cities', () => {
    // Выбор города
    cy.get('[data-test="dropdown-body"]').should('not.exist');
    cy.get('[data-test="dropdown-btn"]').click();
    cy.get('[data-test="dropdown-body"]').should('be.visible');
  });
// Поиск по номеру ППО
  it('should display text', () => {
    const numberPPO = 12345567;
    cy.get('[data-test="search-input-PPO"]').should('be.visible');
    cy.get('[data-test="search-input-PPO"]')
      .should('be.visible')
      .type(`${numberPPO}{enter}`);
  });
  // Календарь
  // it('should display a calendar', () => {
  //   cy.get('[data-test="calendar-btn"]').click();
  //   cy.get('[data-test="calendar-body"]').should('be.visible');
  // });
  
  // Скачать файл
  it('should download file', () => {
    cy.get('[data-test="download-btn"]').click({force: true});   
  });
});
