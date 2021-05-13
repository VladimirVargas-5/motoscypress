/// <reference types="cypress"/>

export class perfilRestaurant {
    
    perfil_Rest(){
        cy.get(':nth-child(2) > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()
    }
    editar_datos(value1){
        cy.xpath('//*[@id="root"]/div/div/div/div/div/div/div[3]/form/div/div/div/div[2]/div[1]/div[1]/div[1]/div/div/input').clear().type(value1)
    }
    
}
