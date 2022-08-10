class HomePage{

    getNameTextfield(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding(){
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getGender(){
        return cy.get('#exampleFormControlSelect1')
    }

    getEnterpreneaur(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }

    getCheckOut(){
        return cy.get('a.nav-link.btn.btn-primary')
    }

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

export default HomePage;