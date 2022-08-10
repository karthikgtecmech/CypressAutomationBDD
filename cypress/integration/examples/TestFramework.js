import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe("My Framework Test Suite", function () {

    let data
    before(function () {
        //runs once before all tests in the block
        cy.fixture('TestData').then(function (jsonData) {
            data = jsonData
        })
    })

    it("My Framework Test Case", function () {

        cy.visit(Cypress.env('url') + '/angularpractice/')
        const homePage = new HomePage()
        const productPage = new ProductPage()
        homePage.getNameTextfield().type(data.name)
        homePage.getGender().select(data.gender)
        homePage.getTwoWayDataBinding().should('have.value', data.name)
        homePage.getNameTextfield().should('have.attr', 'minlength', '2')
        homePage.getEnterpreneaur().should('be.disabled')
        homePage.getShopTab().click()
        data.productName.forEach(function (element) {
            cy.selectProduct(element)
        })
        homePage.getCheckOut().click()
        var sum = 0
        productPage.getProductPriceInCart().each(($el, index, $list) => {
            const price = $el.text()
            var res = price.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        }).then(function () {
            cy.log(sum)
        })

        productPage.getTotalPriceInCart().then(function (element) {
            const totalPrice = element.text()
            var total = totalPrice.split(" ")
            total = total[1].trim()
            expect(Number(sum)).to.equal(Number(total))
        })

        // cy.pause()

        productPage.getCheckOutProduct().click()
        productPage.getDeliveryLocationTextBox().type(data.country)
        Cypress.config('defaultCommandTimeout', 10000)
        cy.contains(data.country).click()
        cy.screenshot()
        cy.screenshot('Screenshot taken')
        productPage.getPurchaseButton().click()
        productPage.getAgreeCheckbox().click({ force: true })

        productPage.getPurchaseSuccessMsg().then(function (successMsg) {
            expect(successMsg.text()).to.contains(data.purchaseSuccessMsg)
        })
        //or
        productPage.getPurchaseSuccessMsg().then(function (element) {
            const successMsg = element.text()
            expect(successMsg.includes(data.purchaseSuccessMsg)).to.true
        })

    })

})