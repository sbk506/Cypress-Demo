///<reference types= "cypress" />

describe('Test Suite', function(){


before(function(){

   cy.fixture('example').then(function(data){
       this.data=data
   })
   cy.fixture('url').then(function(data1){
    this.data1=data1
})

   })



    it('Data driven TC', function(){

        cy.visit(this.data1.URL)
        cy.get('#Email').clear().type(this.data.email)
        cy.get('#Password').clear().type(this.data.Password)
        cy.get('input[type=submit]').click()
    })
})