const neatCSV = require('neat-csv')

describe("JWT Session", function () {

    it("Logged in through local storage", function () {

        cy.loginAPI().then(function () {
            cy.visit('https://rahulshettyacademy.com/client',
                {
                    onBeforeLoad: function (window) {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                })
        })

        cy.get('button.btn.w-10.rounded').eq(1).click()
        cy.get("button[routerlink*='cart']").click()
        cy.contains('Checkout').click()
        cy.get('[placeholder="Select Country"]').type("ind")
        cy.get('span.ng-star-inserted').each(($el, index, $list) => {
            if ($el.text().trim() == 'India') {
                cy.wrap($el).click()
            }
        })
        cy.get('.action__submit').click()
        cy.wait(2000)
        cy.get('.order-summary button').click()

        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_karthik.csv")
            .then(async (text) => {
                const csv = await neatCSV(text)
                cy.window(csv)
                console.log(csv)
            })

            //assert the text in the document using csv[0].Product Name <-- If there is space in the property use this method,
            //const actualProd = csv[0] ["Product Name"]
            //expect(productName).to.equal(actualProd)






    })

})