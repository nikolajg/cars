describe('Testing Cars - Add Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.contains('Add Car').click();
  })

  it('Add page must have field labels ', () => {
    cy.get('.main-form').contains('Make').should('be.visible');
    cy.get('.main-form').contains('Model').should('be.visible');
    cy.get('.main-form').contains('Colour').should('be.visible');
    cy.get('.main-form').contains('Year').should('be.visible');
  })

  it('Add page must have editable fields and Submit functionality', () => {
    cy.get('input[name=make]').type('Ford')
    cy.get('input[name=model]').type('Fiesta');
    cy.get('input[name=colour]').type('Yellow');
    cy.get('input[name=year]').type('2016');
    cy.contains('Submit').click();
    cy.get('.table').contains('Ford').should('be.visible')
    cy.get('.table').contains('Fiesta').should('be.visible');
    cy.get('.table').contains('Yellow').should('be.visible');
    cy.get('.table').contains('2016').should('be.visible');
  })

  it('Add page must have validation', () => {
    cy.contains('Submit').click();
    cy.contains('Please fill out all the fields.').should('be.visible');

    cy.get('input[name=make]').type('Lada');
    cy.get('input[name=model]').type('Priora');
    cy.get('input[name=colour]').type('Purple');
    cy.get('input[name=year]').type('20');
    cy.contains('Submit').click();

    cy.contains('Please make sure year contains 4 digits only').should('be.visible');
    cy.get('input[name=year]').clear();
    cy.get('input[name=year]').type('2011');
    cy.contains('Submit').click();
  })
})
