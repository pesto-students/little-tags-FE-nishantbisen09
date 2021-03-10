/// <reference types="cypress" />

const APP_URL = 'https://little-tags-app.netlify.app';
context('Search functionality', () => {
  beforeEach(() => {
    cy.visit(APP_URL);
  });

  it('should show search page', () => {
    cy.get('.searchField input').type('en').should('have.value', 'en');
    cy.get('.searchResultContainer ').should('have.class', 'd-block');

    cy.get('.searchField input').type('{enter}');
    cy.get('h2').should('contain', 'Search results for "en"');
  });
});
