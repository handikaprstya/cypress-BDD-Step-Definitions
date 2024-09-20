import loginPage from './login.page';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page', () => {
    loginPage.visit();
});

When('I submit login', () => {
    loginPage.fillUsername('username');
    loginPage.fillPassword('password');
    loginPage.signIn();
});

Then('I should see homepage', () => {
    cy.get('#account_summary_tab > a').should('be.visible')
});

