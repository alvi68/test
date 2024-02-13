const cypress = require("cypress");
const { error } = require("cypress/types/jquery");
const { Runnable } = require("mocha");

describe('SociionLoginPage', () => {
    it('Test Signup', () => {
        cy.visit('https://www.socioon.com/register');
        cy.wait(1000);
        //cy.get('.right-w .prop-side-widget > a').click();
        //cy.get('.right-w').scrollTo('right');

               // Click on the button after it becomes visible
        //cy.scrollTo('top');
        //cy.get('div.prop-side-widget a[href="https://www.socioon.com/register"]').click();

        
        // Wait for the URL to change to the registration page
        //cy.url().should('include', '/register');

        // Wait for and type first name
        cy.get('.user-update-form [name="first_name"]').should('be.visible').type('Muhammad');

        // Wait for and type last name
        cy.get('.user-update-form [name="last_name"]').should('be.visible').type('Awais');
        cy.get('.user-update-form [name="email"] ').should('be.visible' ).type('awaisalvi123@fmail.com')
        cy.get('.user-update-form [name="password"] ').should('be.visible' ).type('awaisalvi123@fmail.com')
        cy.wait(1000)
        cy.get('.user-update-form select[name="yearPost"]').select('2008');
        cy.get('select[name="monthPost"]').select('May')
        cy.get('select[name="day"]').select('18')
        
        //cy.get('.user-update-form [name="reffer_id"]').should('be.visible').type('12489744');
        cy.get('.user-update-form [value="Male"]').check().should('be.checked')
        cy.get('.user-update-form [value="agreed"]').check().should('be.checked')
        Cypress.on('uncaught:exception',(err,Runnable)=>{
            return false
        })
        cy.get('.user-update-form .btn-submit').click()
        



        

    });
});
