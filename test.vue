describe('Toggle Buttons E2E tests', () => {
  beforeEach(() => {
    cy.visit('/your-page-url'); // Замените на URL страницы, где размещён ваш переключатель
  });

  it('should activate the Transport button when clicked', () => {
    cy.get('[data-test="transport-btn"]').click().should('have.class', 'isActiveTab');
    cy.get('[data-test="loaders-btn"]').should('not.have.class', 'isActiveTab');
  });

  it('should activate the Loaders button when clicked', () => {
    cy.get('[data-test="loaders-btn"]').click().should('have.class', 'isActiveTab');
    cy.get('[data-test="transport-btn"]').should('not.have.class', 'isActiveTab');
  });

  it('should toggle between Transport and Loaders when clicked', () => {
    cy.get('[data-test="transport-btn"]').click().should('have.class', 'isActiveTab');
    cy.get('[data-test="loaders-btn"]').click().should('have.class', 'isActiveTab');
    cy.get('[data-test="transport-btn"]').should('not.have.class', 'isActiveTab');
  });
});




<div class="wrapper-toggle-btns">
  <div
    class="wrapper-toggle-btns-item"
    data-test="transport-btn"
    :class="{ isActiveTab: model.isTransport === true }"
    @click="viewModel.setTransport()"
  >
    Транспорт
  </div>
  <div
    class="wrapper-toggle-btns-item"
    data-test="loaders-btn"
    :class="{ isActiveTab: model.isLoaders === true }"
    @click="viewModel.setLoaders()"
  >
    Грузчики
  </div>
</div>

