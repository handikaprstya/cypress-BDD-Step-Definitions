const URL = 'http://zero.webappsecurity.com/index.html';
const SEARCH = '#searchTerm';
const SEARCH_RESULT = 'Search Results:'

class HomePage {
    static visit() {
        cy.visit(URL);
    }

    static search(keyword) {
        cy.get(SEARCH).type(keyword);
    }

    static enter(keyword) {
        cy.get(SEARCH).type(keyword);
    }

    static verify() {
        cy.url().should('include', 'search.html');
        cy.get('h2').should('contain.text', SEARCH_RESULT);
    }

    static verifyResults() {
        cy.get('a').should('contain.text', 'Bank');
    }

    static invalidKeyword(keyword) {
        cy.get(SEARCH).type(keyword)
    }

    static noResults() {
        cy.contains('No results were found').should('exist');
    }

    static noResultsDisplay(keyword) {
        cy.get('h2').should('contain.text', SEARCH_RESULT);
        cy.contains(keyword).should('exist');
    }

    static clear() {
        cy.get(SEARCH).clear();
    }

    static resultDisplay() {
        cy.get('h2').should('contain.text', SEARCH_RESULT);
    }

    static blankDisplay() {
        cy.get('.top_offset').should('contain.text', 'The following pages were found for the query:')
        .and('exist')
        .and('be.visible');
        cy.get('.top_offset').should('contain.text', 'Zero');
    }
}

export default HomePage