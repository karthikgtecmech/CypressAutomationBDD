describe("My First Test Suite", function(){

    it("My First Test Case", function(){

        cy.visit(Cypress.env('url')+'/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        //parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
            {
                console.log('checking')
            })
        cy.get('@productLocator').find('.product').each(($el, index, $list) =>  {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').contains('ADD TO CART').click()
            } 
        })
        
       cy.get('div.brand').then(function(logo){
        cy.log(logo.text())
        cy.get('div.brand').should('have.text', 'GREENKART')
       })
    })

})