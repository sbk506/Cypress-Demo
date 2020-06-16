///<reference types="cypress"  />

describe('Go feauture', function(){

    it('Test1', function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.title('eq', 'nopCommerce demo store')   //home

        cy.get('.ico-login').contains('Log in').click()

        cy.title('eq','nopCommerce demo store. Login')   //login

        cy.go('back')
        cy.title('eq', 'nopCommerce demo store')    //home

        cy.go('forward')
        cy.title('eq','nopCommerce demo store. Login')   //login
        

        cy.go(-1)
        cy.title('eq', 'nopCommerce demo store') //home

        cy.go(1)
        cy.title('eq','nopCommerce demo store. Login')   //login

        cy.reload()

    })
})