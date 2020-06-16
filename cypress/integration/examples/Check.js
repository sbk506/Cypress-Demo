///<reference types="cypress" />
describe('Test Suite', function(){

    it('test1', function(){
        
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get('#checkbox1').check().should('be.checked').and('contain.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('contain.value', 'Movies')
        cy.get('#checkbox3').check().should('be.checked').and('contain.value', 'Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]').check(['Cricket', 'Hockey'])

    }
    )
    it('test2', function(){

        cy.get('#Skills').select('Android').should('contain.value', 'Android')


        cy.get('#countries').select('Albania').should('have.value', 'Albania')
    })

    
       
       // cy.get('span[role=combobox]').click()
      //  cy.get('ul>li')
     //   .each(($el, index, $list) =>{
      //      if($el.each===''){
     //           cy.wrap($el).click()
     //       }
      //      else{

    //        }
     //       }
        
     //   )

     it('Test3', function(){

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('Dutch').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Greek').click()
        cy.get('.ui-corner-all').contains('Urdu').click()


     })

     it('Test4', function(){

        cy.get('.selection> span[role=combobox]').click({force: true})
        cy.get('[type=search][role=textbox]').type('Japa')
        cy.get('[type=search][role=textbox]').type('{enter}')


     })

    })

