export class Hacer_pedido {
    Hacer_pedido(){
        cy.get('.form-control').click()

    }
    search(value1){
        cy.get('.form-control').type(value1)
        cy.get('[style="display: flex; justify-content: center; width: 80%;"] > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get(':nth-child(9) > .MuiButtonBase-root > .MuiButton-label').click()
        
    }
    generar_pedido(){
        cy.get(':nth-child(3) > .MuiButton-label').click()
    }
    monto_pedido(value1){
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(value1)
    }
    solicitar_moto(){
        cy.get('.MuiDialogActions-root > div > .MuiButtonBase-root > .MuiButton-label').click()
    }

}
