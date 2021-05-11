/// <reference types="cypress"/>
export class open_site {
    mainpage(){
    cy.clearCookies()
    cy.visit('https://xpress-test-motos-admin.firebaseapp.com/home');
}

    login(){
        cy.get('.jss4 > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('.jss17 > .MuiButtonBase-root').click()
                
    }

}
