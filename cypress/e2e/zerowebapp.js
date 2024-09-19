const { When, Then, Given } = require('@badeball/cypress-cucumber-preprocessor');

// Scenario: Successful search with a valid keyword
Given('I am on the homepage', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
});

When('I enter "Bank" in the search bar', () => {
    cy.get('#searchTerm').type('Bank')
});

When('I click the "Search" button', () => {
    cy.get('#searchTerm').type('{enter}')
});

Then('I should see results related to "Bank"', () => {
    cy.url().should('include', 'search.html')
    cy.get('h2').should('contain.text', 'Search Results')
});
Then('The results page should display links and information relevant with my search', () => {
    cy.get('a').should('contain.text', 'Bank')
});



// Scenario: Search with an invalid keyword
When('I enter "InvalidKeyword" in the search bar', () => {
    cy.get('#searchTerm').type('invalidKeyword')
});

Then('I should see a message "No results found"', () => {
    cy.contains('No results were found').should('exist');
});

Then('the results page should not display any links or related information', () => {
    cy.get('h2').should('contain.text', "Search Results:")
    cy.contains('invalidKeyword').should('exist');
});

// Scenario: Search with an empty keyword
When('I leave the search bar empty', () => {
    cy.get('#searchTerm').clear();
});

Then('I should see a message saying "Search Results"', () => {
    cy.get('h2').should('contain.text', 'Search Results:');
});

Then('No results should be displayed' , () => {
    cy.get('.top_offset').should('contain.text', 'The following pages were found for the query:')
    .and('exist')
    .and('be.visible')
    cy.get('.top_offset').should('contain.text', 'Zero')
});