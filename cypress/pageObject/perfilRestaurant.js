/// <reference types="cypress"/>

export class perfilRestaurant {
    
    perfil_Rest(){
        cy.get(':nth-child(2) > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()
    }
    editar_datos(value1){
        cy.xpath('//*[@id="root"]/div/div/div/div/div/div/div[3]/form/div/div/div/div[2]/div[1]/div[1]/div[1]/div/div/input').clear().type(value1)
<<<<<<< HEAD
        cy.get('input[id=logoFile]').attachFile('descarga.jpg')
        cy.wait(2000)
        cy.get('input[id=bannerFile]').attachFile('apple.jpg')
        cy.wait(5000)
        cy.get('[style="margin-top: 32px;"] > .MuiButtonBase-root').click()
        cy.wait(5000)
    }
    agregar_sucursal(value1, categoria, ciudad, address,url, piso, gerente, telefono, nit ){
        cy.get('[tabindex="-1"] > .MuiTab-wrapper > .jss178').click()
        cy.get('.MuiButton-label').click()
        cy.get('.jss216 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(value1)
        cy.get('.MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root').select(categoria)
        cy.get('#city').select(ciudad)
        cy.get('.jss220 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(address)
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').type(url)
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label').type(piso)
        cy.get('.jss222 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(gerente)
        cy.get('.jss223 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(telefono)
        cy.get('.jss224 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(nit)
        cy.get('.MuiGrid-justify-xs-center > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()

=======
>>>>>>> d09033c7bea16660a11fdbd396cf6214be678b19
    }
    editar_sucursal(){
        cy.get('[tabindex="-1"] > .MuiTab-wrapper > .jss178').click()
        cy.get(':nth-child(1) > :nth-child(7) > .MuiBox-root > .MuiTypography-root').click()
        cy.get('.jss260 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(nombre)
        cy.get('.jss265 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(gerente)
        cy.get('.jss266 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type (address)
        cy.get('.jss267 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(telefono)
        cy.get('.jss268 > :nth-child(1) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(nit)
        cy.get('.jss270 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(piso)
        cy.get('#city').select(ciudad)
        cy.get('.MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root').select(categoria)
        cy.get('.jss272 > .MuiButtonBase-root > .MuiButton-label').click()
    }
    
}
