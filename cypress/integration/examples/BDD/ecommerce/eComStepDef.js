import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/pageObjects/HomePage';
import ProductPage from '../../../../support/pageObjects/ProductPage';

const homePage = new HomePage()
const productPage = new ProductPage()
let name

Given('I Open Ecommerce Page', () => {
    cy.visit(Cypress.env('url') + '/angularpractice/')
})

When('I add items to the Cart', function () {
    homePage.getShopTab().click()
    this.data.productName.forEach(function (element) {
        cy.selectProduct(element)
    })
    homePage.getCheckOut().click()
})

And('Validate the total prices', () => {
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
})

Then('Selecty the Country Submit and verify Thank You', function () {
    cy.wait(2000)
    productPage.getCheckOutProduct().click()
    productPage.getDeliveryLocationTextBox().type(this.data.country)
    Cypress.config('defaultCommandTimeout', 10000)
    cy.contains(this.data.country).click()
    cy.screenshot()
    cy.screenshot('Screenshot taken')
    productPage.getPurchaseButton().click()
    productPage.getAgreeCheckbox().click({ force: true })

    productPage.getPurchaseSuccessMsg().then(function (successMsg) {
        expect(successMsg.text()).to.contains(this.data.purchaseSuccessMsg)
    })
})

When('I will fill the form details', function (dataTable) {
    name = dataTable.rawTable[1][0]
    homePage.getNameTextfield().type(name)
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('Validate the form behaviour', function () {
    homePage.getTwoWayDataBinding().should('have.value', name)
    homePage.getNameTextfield().should('have.attr', 'minlength', '2')
    homePage.getEnterpreneaur().should('be.disabled')
})

And('Select the shop page', () => {
    homePage.getShopTab().click()
})






