/// <reference types="cypress"/>
export class login_page {
    datos(val, val2){
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type(val)
        cy.wait(3000)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(val2+'{enter}')
                
    }

}
