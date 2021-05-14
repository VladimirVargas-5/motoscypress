/// <reference types="cypress"/>
export class registro {
    registro(){
        cy.get('.MuiGrid-root > .MuiButtonBase-root').click()

    }
    fill(value1, value2, number, address, ref, url  ){
        cy.get('.MuiGrid-spacing-xs-3 > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(value1)
        cy.get('.MuiGrid-spacing-xs-3 > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(value2)
        cy.get(':nth-child(3) > .react-tel-input > .form-control').type(number)
        cy.get(':nth-child(3) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(address)
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(ref)
        cy.get('.MuiGrid-grid-xs-10 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(url)
        cy.get('.MuiGrid-grid-xs-2 > .MuiButtonBase-root').click()
        cy.wait(2000)
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()

    }
    search(number1){
        cy.get('.form-control').clear().type(number1)
        cy.get('[style="display: flex; justify-content: center; width: 80%;"] > .MuiButtonBase-root > .MuiButton-label').click()

    }
    edit(name1, lastname1, address1, ref1 ){
        cy.get(':nth-child(2) > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.get('.MuiGrid-spacing-xs-3.MuiGrid-justify-xs-space-evenly > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(name1)
        cy.get('.MuiGrid-spacing-xs-3.MuiGrid-justify-xs-space-evenly > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(lastname1)
        cy.get(':nth-child(4) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(address1)
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(ref1)
        cy.wait(2000)
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()     
    }
    block_user(causa){
        cy.wait(2000)
        cy.get(':nth-child(7) > :nth-child(2)').click()
        const texto = causa
                //penalizar
        cy.get(':nth-child(1) > .MuiGrid-grid-xs-2 > .MuiButtonBase-root').invoke('text').then((text)=>{
            if(text=='PENALIZAR USUARIO'){
                cy.log(text)
                cy.wait(1000)
                cy.get(':nth-child(1) > .MuiGrid-grid-xs-2 > .MuiButtonBase-root').click()
                cy.wait(1000)
                cy.get(':nth-child(1) > .MuiGrid-grid-xs-10 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(texto)
                cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
                       
            }
            else{
                cy.log(text)
                cy.wait(1000)
                cy.get(':nth-child(1) > .MuiGrid-grid-xs-2 > .MuiButtonBase-root').click()
                cy.wait(1000)
                cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
             
            }
        })
        
        
    }
    view(){
        cy.get(':nth-child(7) > :nth-child(3)').click()
        }


}
