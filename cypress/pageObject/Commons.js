/// <reference types="cypress"/>
export class Commons {
    logout(){
        cy.xpath('//*[@id="root"]/div/header/div/div[4]/button').click({force:true})
        cy.xpath('/html/body/div[2]/div[3]/ul/li').click({force:true})
                
    }
    credentials(val, val2){
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type(val)
        cy.wait(3000)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(val2+'{enter}')
                
    }
    mainpage(){
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://xpress-test-motos-admin.firebaseapp.com/home');
    }
    login(){
            cy.get('.jss4 > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
            cy.get('.jss17 > .MuiButtonBase-root').click()                
    }
    datos(val, val2){
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type(val)
        cy.wait(3000)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(val2+'{enter}')          
    }

}