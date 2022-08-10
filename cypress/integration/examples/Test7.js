describe("My Seventh Test Suite", function(){

    it("My Seventh Test Case", function(){

        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
        
    })

})