describe('Testing Cars - View Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.contains('Add Car').click();
    cy.get('input[name=make]').type('Nissan');
    cy.get('input[name=model]').type('Patrool');
    cy.get('input[name=colour]').type('Amber');
    cy.get('input[name=year]').type('2010');
    cy.contains('Submit').click();
    cy.contains('View').click();
  })

  it('View page must have heading', () => {
    cy.get('h1').last().should('have.text', 'You are currently viewing:');
  })

  it('View page must have labled Car properties', () => {
    cy.get('.main-form').contains('Make: Nissan').should('be.visible');
    cy.get('.main-form').contains('Model: Patrool').should('be.visible');
    cy.get('.main-form').contains('Colour: Amber').should('be.visible');
    cy.get('.main-form').contains('Year: 2010').should('be.visible');
  })

  it('View page must have Sounds Like attribute or show the message', () => {
    cy.get('.main-form').contains('The make sounds like: ') ?
    cy.get('.main-form').contains('The make sounds like: ').should('be.visible') :
    cy.get('.main-form').contains('There are no similar words for this make').should('be.visible');
  })
})
