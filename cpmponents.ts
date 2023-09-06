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
    cy.get('[data-test="dropdown-btn"]').contains('Астана'); // Замените регулярное выражение на ожидаемое значение, если оно известно
  });
});

