///<reference types="cypress" />

describe('Test Suite', function(){


    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data

        })
        
    })

    it('Login', function(){
        cy.Login(this.data.email, this.data.Password)
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')


        cy.Login(this.data.email1, this.data.Password1)
        cy.title().should('be.equal', 'Your store. Login')

        cy.Login(this.data.email2, this.data.Password2)
        cy.title('eq', 'Your store. Login')
    })


    it('Add', function(){

        cy.Login(this.data.email, this.data.Password)

        cy.log('This is ********* Add functionality')
    })


    it('Delete', function(){

        cy.Login(this.data.email, this.data.Password)

        cy.log('This is ********* Delete functionality')
    })


})