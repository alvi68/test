/// <reference types="Cypress" />
describe('My First Test', ()=>{
    it('Login 1', () =>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        //cy.title().should('eq','GreenKart')
        cy.get('.search-keyword').type('ca').click
        cy.wait(3000)
        cy.get('.products>.product').should('have.length', 4 )

        cy.get('.product').eq(2).contains('ADD TO CART').click()
        
        cy.get('.products>.product').each(($el , index, $list) => {
            const textVeg =$el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
                
            }
        })
        cy.get('.cart-icon').click()
        cy.get('.cart-preview.active').should('have.class', 'active')
        cy.get('.cart-preview .cart-items .cart-item').should('have.length',2)


    })


})