/// <reference types="cypress"/>

export class perfilRestaurant {
    
    perfil_Rest(){
        cy.get(':nth-child(2) > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()
    }
    editar_datos(value1){
        cy.get('.jss134 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(value1)
        

    }
    
}
