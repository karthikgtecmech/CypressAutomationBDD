describe("My Fifth Test Suite", function(){

    it("My Fifth Test Case", function(){

        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            if($el.text().includes('Python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })

})