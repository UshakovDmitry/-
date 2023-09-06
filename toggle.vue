describe('Paginator Component', () => {
  // Указываем, что перед каждым тестом нужно посетить определенный URL
  beforeEach(() => {
    cy.visit('/your-page-url'); // Замените на URL, где расположен ваш компонент
  });

  it('should have navigation buttons', () => {
    cy.get('[data-test="first-page-btn"]').should('exist');
    cy.get('[data-test="prev-page-btn"]').should('exist');
    cy.get('[data-test="next-page-btn"]').should('exist');
    cy.get('[data-test="last-page-btn"]').should('exist');
  });

  it('should navigate to the next and previous pages', () => {
    // Предполагается, что начальная страница - это 1
    cy.get('[data-test="page-btn"]').contains('2').click();
    cy.get('[data-test="page-btn"].active').contains('2');
    cy.get('[data-test="prev-page-btn"]').click();
    cy.get('[data-test="page-btn"].active').contains('1');
  });

  it('should navigate to the first and last pages', () => {
    // Переход на последнюю страницу
    cy.get('[data-test="last-page-btn"]').click();
    cy.get('[data-test="page-btn"].active').contains('N'); // N - номер последней страницы
    
    // Переход на первую страницу
    cy.get('[data-test="first-page-btn"]').click();
    cy.get('[data-test="page-btn"].active').contains('1');
  });

  it('should activate the button corresponding to the current page', () => {
    cy.get('[data-test="page-btn"]').contains('3').click();
    cy.get('[data-test="page-btn"].active').contains('3');
  });

  // Проверки на граничных значениях
  it('should not go below the first page', () => {
    cy.get('[data-test="first-page-btn"]').click();
    cy.get('[data-test="prev-page-btn"]').click(); // Ничего не произойдет
    cy.get('[data-test="page-btn"].active').contains('1');
  });

  it('should not go above the last page', () => {
    cy.get('[data-test="last-page-btn"]').click();
    cy.get('[data-test="next-page-btn"]').click(); // Ничего не произойдет
    cy.get('[data-test="page-btn"].active').contains('N'); // N - номер последней страницы
  });
});

