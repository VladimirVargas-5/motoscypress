/// <reference types="cypress"/>

export class perfilRestaurant {
    
    perfil_Rest(){
        cy.get(':nth-child(2) > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()
    }
    editar_datos(value1){
        cy.xpath('//*[@id="root"]/div/div/div/div/div/div/div[3]/form/div/div/div/div[2]/div[1]/div[1]/div[1]/div/div/input').clear().type(value1)
        cy.get('input[id=logoFile]').attachFile('descarga.jpg')
        cy.wait(2000)
        cy.get('input[id=bannerFile]').attachFile('apple.jpg')
        cy.wait(5000)
        cy.get('[style="margin-top: 32px;"] > .MuiButtonBase-root').click()
        cy.wait(5000)
    }
    agregar_sucursal(value1, categoria, address, piso, gerente, telefono, nit ){
        cy.contains('Sucursales').click()
        cy.wait(1000)
        cy.contains('Agregar Sucursal').click()
        cy.get('input[name=name]').type(value1)
        cy.get('input[placeholder=Categorías]').click().type(categoria+'{downarrow}{enter}')
        cy.get('div[id=city]').click()
        cy.xpath('//*[@id="menu-city"]/div[3]/ul/li[2]').click()
        cy.get('input[name=address]').type(address)
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.wait(1500)
        cy.get('.MuiDialogContent-root').click(600,600)
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('input[name=address_2]').type(piso)
        cy.get('input[name=manager]').type(gerente)
        cy.get('input[name=manager_phone]').type(telefono)
        cy.get('input[name=nit]').type(nit)
        cy.get('.MuiGrid-justify-xs-center > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()

    }
    editar_sucursal(nombre, gerente, address, telefono, nit, piso){
        cy.contains('Sucursales').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(7) > .MuiBox-root > .MuiTypography-root').click()
        cy.wait(1500)
        cy.get('input[name=name]').clear().type(nombre)
        cy.get('input[name=manager]').clear().type(gerente)
        cy.get('div[id=city]').click()
        cy.xpath('//*[@id="menu-city"]/div[3]/ul/li[2]').click()
        cy.get('input[name=address]').clear().type (address)
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.wait(1500)
        cy.get('.MuiDialogContent-root').click(500,500)
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('input[name=manager_phone]').clear().type(telefono)
        cy.get('input[name=nit]').clear().type(nit)
        cy.get('input[name=address_2]').clear().type(piso)
        cy.get('input[placeholder=Categorías]').click().type('{downarrow}{enter}')
        cy.wait(1000)
        cy.xpath('//*[@id="root"]/div/div/div/div/div/div/div[3]/div/form/div/div/div/div[2]/div[2]/button').click()
    }
    
}
