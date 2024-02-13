
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
        cy.get('.user-update-form [name="email"]').should('be.visible').type('awaisalvi12e3@fmail.com');

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
    it.only('Crate post',()=> {
        cy.viewport(1200, 800)
        cy.visit('https://www.socioon.com/');
        //jonnybilal1@outlook.com
        cy.get('.form-group [name="identity"]').type('jonnybilal1@outlook.com')
        cy.get('.form-group [name="password"]').type('12345678')
        cy.get('.form-group [type="submit"] ').click()
        cy.wait(3000)
        //cy.get('.make-post-new >[name="postInsert"]').scrollIntoView()
        //cy.wait(1000)
        
// Then click on it
        cy.get('.create-post-tabs > #m_st_togler').click({ force: true }) 
        cy.get('#m_pst_txt').type('hello')

    })
    
});
