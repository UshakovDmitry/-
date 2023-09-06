describe('template spec', () => {
  // TRANSPORT
  beforeEach(() => {
    cy.visit('/transport');
  });

  // Ваши существующие тесты
  // ...

  // Тесты для компонента "dropdown"
  describe('Dropdown Component', () => {
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
      cy.get('[data-test="dropdown-btn"]').contains(/.+/); // Замените регулярное выражение на ожидаемое значение, если оно известно
    });
  });
});

