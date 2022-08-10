/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe("My Eighth Test Suite", function(){

    it("My Eighth Test Case", function(){

        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(2000)
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)

        console.log(Cypress.spec)
       
    })

})