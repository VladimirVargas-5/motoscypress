/// <reference types="cypress"/>

export class personal {
    personal(){
        cy.wait(3000)
        cy.get('.MuiGrid-root > .MuiButtonBase-root').click

    }
    per(){
        cy.get(':nth-child(2) > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
    }
    añadir_empleado(){
        cy.xpath('//*[@id="root"]/div/div/div/div/div/div/div[1]/div[2]/div/div/button/span[1]').click()
    }
    llenar_datos(value1, value2, value3, value4, value5, value6){
        cy.get('.MuiGrid-grid-md-8 > .MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(value1)
        cy.get('.MuiGrid-grid-md-8 > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(value2)
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(value3)
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(value4)
        cy.get('.MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').select(value5)
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').select(value6)
        cy.wait(1500)
        cy.get('.MuiGrid-root > .MuiButtonBase-root > .MuiButton-label').click()


    }
    subir_foto(){
        cy.get('.MuiPaper-root > img').click()
        cy.get('input[type=file]').attachFile('descarga.jpg')
        cy.wait(3000)
        cy.get('.MuiButton-containedSizeSmall > .MuiButton-label').click()
        cy.wait(3000)
        cy.get('.MuiButton-textSizeSmall > .MuiButton-label').click()
        cy.wait(3000)
    }

}
