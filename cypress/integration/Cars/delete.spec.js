describe('Testing Cars - Remove Functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.contains('Add Car').click();
    cy.get('input[name=make]').type('VW');
    cy.get('input[name=model]').type('Passat');
    cy.get('input[name=colour]').type('Red');
    cy.get('input[name=year]').type('1989');
    cy.contains('Submit').click();
  })

  it('Remove Functionality must allow user to delete Car from the list', () => {
    cy.get('.table').contains('VW').should('be.visible');
    cy.get('.table').contains('Passat').should('be.visible');
    cy.get('.table').contains('Red').should('be.visible');
    cy.get('.table').contains('1989').should('be.visible');
    cy.get('.table').contains('Remove').click();
    cy.contains('No cars available. Please add some.').should('be.visible');
  })

})
