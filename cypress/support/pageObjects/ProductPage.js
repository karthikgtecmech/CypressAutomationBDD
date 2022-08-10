class ProductPage{

    getCheckOutProduct(){
        return cy.get('button.btn.btn-success')
    }

    getDeliveryLocationTextBox(){
        return cy.get('#country')
    }

    getPurchaseButton(){
        return cy.get('[value="Purchase"]')
    }

    getPurchaseSuccessMsg(){
        return cy.get('div.alert.alert-success.alert-dismissible')
    }

    getAgreeCheckbox(){
        return cy.get('label[for="checkbox2"] ')
    }

    getProductPriceInCart(){
        return cy.get('tr td:nth-child(4) strong')
    }

    getTotalPriceInCart(){
        return cy.get('h3 strong')
    }

}

export default ProductPage;