const { describe } = require("mocha");




describe('Handling child window', ()=> {
    it('Test handling window', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('opentab').invoke('removeAttr','target').click()
    })



})