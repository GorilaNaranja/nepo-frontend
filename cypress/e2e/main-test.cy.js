describe('Nepo test', () => {

  it('has to load the page', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="cy-card-title"]')
      .should('have.text', 'List of sellers')
  })
  
  it('has to call the REAL API and show the content', () => {
    //Check if API is called
    cy.intercept('http://localhost:4003/sellers', cy.spy().as('getSellers'));
    cy.get('@getSellers').should('not.have.been.called');
    cy.visit('http://localhost:5173/')
    cy.get('@getSellers').should('have.been.calledOnce');
    //Check the content is correct
    cy.get('[data-testid="cy-usercard-0"]')
      .should('exist')
      .should('contain.text', 'Mr Seller')
    cy.get('[data-testid="cy-usercard-1"]')
      .should('exist')
      .should('contain.text', 'Miss Seller')
  })
})
