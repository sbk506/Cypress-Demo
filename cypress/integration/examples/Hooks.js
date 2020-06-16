///<reference types= "cypress"   /> 

describe('TestSuite', function(){

before(function(){
    cy.log('This Runs only once beofre all TC executed. basically all setup stuff')
}
)

beforeEach(function(){
    cy.log('This runs before each TC is executed. basicallly Login')
})


afterEach(function(){
    cy.log('This Runs after each TC is executed, basically logut')
})

after(function(){
    cy.log('This run only once after all TC are executed. basicallly closing all drivers')
})


    it('Search', function(){
        cy.log('This is ********** search functionality TC')
    })

    it('Delete', function(){
        cy.log('This is ********** delete functionality TC')
    })

    it('Add', function(){
        cy.log('This is ********** Add functionality TC')
    })
})