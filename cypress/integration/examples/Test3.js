describe("My Third Test Suite", function(){

    it("My Third Test Case", function(){

        cy.visit(Cypress.env('url')+'/AutomationPractice/')

        //checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked', 'option1').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck()
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //static dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() == 'India'){
                $el.click() //or give $el.trigger('click')
                cy.get('#autocomplete').should('have.value', 'India')
            }
        })

        //Visible &Invisble elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio button
        cy.get('[value="radio2"]').check().should('be.checked')
       
    })

})