
///<reference types="cypress"/>

describe('Test Suite', function(){

    it('alerts TC', ()=>{

        cy.visit("http://testautomationpractice.blogspot.com/")
        cy.get('#HTML9 > div.widget-content > button').click()
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('Press a button!')
            console.log(str)
        })
 
    })

}

)


