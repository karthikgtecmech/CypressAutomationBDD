describe("My Sixth Test Suite", function(){

    it("My Sixth Test Case", function(){

        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top') 
       
    })

})