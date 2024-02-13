describe('SociionLoginPage', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false;
        });
    });

    it('Test Signup', () => {
        cy.visit('https://www.socioon.com/register');
        cy.wait(1000);

        // Type first name
        cy.get('.user-update-form [name="first_name"]').should('be.visible').type('Muhammad');

        // Type last name
        cy.get('.user-update-form [name="last_name"]').should('be.visible').type('Awais');

        // Type email
        cy.get('.user-update-form [name="email"]').should('be.visible').type('awaisalvi123@fmail.com');

        // Type password
        cy.get('.user-update-form [name="password"]').should('be.visible').type('awaisalvi123@fmail.com');

        // Select year
        cy.get('.user-update-form select[name="yearPost"]').select('2008');

        // Select month
        cy.get('select[name="monthPost"]').select('May');

        // Select day
        cy.get('select[name="day"]').select('18');

        // Check male checkbox
        cy.get('.user-update-form [value="Male"]').check().should('be.checked');

        // Check agreed checkbox
        cy.get('.user-update-form [value="agreed"]').check().should('be.checked');

        // Click on submit button
        cy.get('.user-update-form .btn-submit').click();
    });
});
