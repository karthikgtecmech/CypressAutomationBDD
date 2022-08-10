describe("My Fourth Test Suite", function(){

    it("My Fourth Test Case", function(){

        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //window alert
        cy.on('window:alert', (str) => {
            //from mocha framework
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })

         //window confirm
         cy.on('window:confirm', (str) => {
            //from mocha framework
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })
       
        //handle child window- remove target attribute
        cy.get('#opentab').invoke('removeAttr', 'target').click() 
        cy.wait(1500)  
        
        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back')

    })

})