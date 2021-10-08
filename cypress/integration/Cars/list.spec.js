describe('Testing Cars - List Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('List page must have heading Cars', () => {
    cy.get('h1').first().should('have.text', 'Cars');
  })

  it('List page must have two links to Add Car and Cars List', () => {
    cy.get('.links a').should('have.length', 2);
    cy.get('.links').contains('Cars List').should('be.visible');
    cy.get('.links').contains('Add Car').should('be.visible');
  })

  it('List page must have headings if it is not empty', () => {
    if (!cy.get('.message')) {
      cy.get('.table').contains('Make').should('be.visible');
      cy.get('.table').contains('Model').should('be.visible');
      cy.get('.table').contains('Colour').should('be.visible');
      cy.get('.table').contains('Year').should('be.visible');
      cy.get('.table').contains('Actions').should('be.visible');
    }
  })

  it('List page with no items must have a message', () => {
    cy.get('.message').contains('No cars available. Please add some').should('be.visible');
  })
})
