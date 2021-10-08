describe('Testing Cars - Edit Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.contains('Add Car').click();
    cy.get('input[name=make]').type('Ferrari');
    cy.get('input[name=model]').type('Spider');
    cy.get('input[name=colour]').type('Red');
    cy.get('input[name=year]').type('2006');
    cy.contains('Submit').click();
    cy.contains('Edit').click();
  })

  it('Edit page must have Lables and Fields with prepopulated data', () => {
    cy.get('.main-form').contains('Make').should('be.visible');
    cy.get('.main-form').contains('Model').should('be.visible');
    cy.get('.main-form').contains('Colour').should('be.visible');
    cy.get('.main-form').contains('Year').should('be.visible');

    cy.get('input[name=make]').should('have.value', 'Ferrari');
    cy.get('input[name=model]').should('have.value', 'Spider');
    cy.get('input[name=colour]').should('have.value', 'Red');
    cy.get('input[name=year]').should('have.value', '2006');
  })

  it('Edit page must allow user to modify Car', () => {
    cy.get('input[name=make]').clear().type('Opel');
    cy.get('input[name=model]').clear().type('Vectra');
    cy.get('input[name=colour]').clear().type('Blue');
    cy.get('input[name=year]').clear().type('1999');
    cy.contains('Submit').click();

    cy.get('.table').contains('Opel').should('be.visible');
    cy.get('.table').contains('Vectra').should('be.visible');
    cy.get('.table').contains('Blue').should('be.visible');
    cy.get('.table').contains('1999').should('be.visible');
  })

  it('Edit page must have validations as Add page', () => {
    cy.get('input[name=make]').clear();
    cy.get('input[name=model]').clear();
    cy.get('input[name=colour]').clear();
    cy.get('input[name=year]').clear();
    cy.contains('Submit').click();
    cy.contains('Please fill out all the fields.').should('be.visible');

    cy.get('input[name=make]').type('Mercedes');
    cy.get('input[name=model]').type('S Class');
    cy.get('input[name=colour]').type('White');
    cy.get('input[name=year]').type('20');
    cy.contains('Submit').click();

    cy.contains('Please make sure year contains 4 digits only').should('be.visible');
    cy.get('input[name=year]').clear();
    cy.get('input[name=year]').type('2009');
    cy.contains('Submit').click();
  })
})
