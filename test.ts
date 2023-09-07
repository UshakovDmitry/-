
describe('template spec', () => {
  // TRANSPORT
  beforeEach(() => {
    cy.visit('/transport');
  });



  // Переключение между таблицами Транспорт и Грузчики..
  it('should activate the Transport button when clicked', () => {
    // Должна быть активна кнопка Транспорт
    cy.get('[data-test="transport-btn"]')
      .click()
      .should('have.class', 'isActiveTab');
    // Кнопка Грузчики не должна быть активной
    cy.get('[data-test="loaders-btn"]').should('not.have.class', 'isActiveTab');
  });

  it('should activate the Loaders button when clicked', () => {
    // Должна быть активна кнопка Грузчики при клике
    cy.get('[data-test="loaders-btn"]')
      .click()
      .should('have.class', 'isActiveTab');
    // Кнопка Транспорт не должна быть активной
    cy.get('[data-test="transport-btn"]').should(
      'not.have.class',
      'isActiveTab',
    );
  });

  it('should toggle between Transport and Loaders when clicked', () => {
    // При клике на кнопку Транспорт, она должна стать активной
    cy.get('[data-test="transport-btn"]')
      .click()
      .should('have.class', 'isActiveTab');
    // При клике на кнопку Грузчики, она должна стать активной
    cy.get('[data-test="loaders-btn"]')
      .click()
      .should('have.class', 'isActiveTab');
    // Кнопка Транспорт не должна быть активной
    cy.get('[data-test="transport-btn"]').should(
      'not.have.class',
      'isActiveTab',
    );
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
    cy.get('[data-test="download-btn"]').click({ force: true });
  });
  it('should toggle dropdown list when clicked', () => {
    // Убедимся, что список не отображается
    cy.get('[data-test="dropdown-body"]').should('not.exist');

    // Кликнем по кнопке, чтобы открыть список
    cy.get('[data-test="dropdown-btn"]').click();

    // Теперь список должен быть видим
    cy.get('[data-test="dropdown-body"]').should('be.visible');

    // Кликнем ещё раз, чтобы закрыть список
    cy.get('[data-test="dropdown-btn"]').click();

    // Теперь список должен быть скрыт
    cy.get('[data-test="dropdown-body"]').should('not.exist');
  });

  it('should display list of cities when dropdown is open', () => {
    // Откроем выпадающий список
    cy.get('[data-test="dropdown-btn"]').click();

    // Проверим наличие элементов списка в открытом dropdown
    cy.get('.dropdown__item').should('have.length.greaterThan', 0);
  });

  it('should update the current value when a city is selected', () => {
    // Откроем выпадающий список
    cy.get('[data-test="dropdown-btn"]').click();

    // Выберем первый город из списка
    cy.get('.dropdown__item').first().click();

    // Проверим, что текущее значение обновлено
    cy.get('[data-test="dropdown-btn"]').contains( 'Все города'); 
  });

  // Painator
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
    // cy.get('[data-test="page-btn"].active').contains('N'); // N - номер последней страницы

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
    // cy.get('[data-test="page-btn"].active').contains('N'); // N - номер последней страницы
  });
});
