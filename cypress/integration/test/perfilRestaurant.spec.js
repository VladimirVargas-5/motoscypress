/// <reference types="cypress"/>
import { Commons } from "../../pageObject/Commons";
import { perfilRestaurant } from "../../pageObject/perfilRestaurant";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Login', ()=>{
    const commons = new Commons()
    const perfil = new perfilRestaurant()
    
    beforeEach(()=>{
      commons.mainpage()
      commons.datos('cota@motos.com','sample5')
    })
    afterEach(()=>{
      commons.logout()
    })
   /* afterEach(()=>{
        logout.logout()

    })*/
    
    it ('editar perfilRestaurant', ()=>{
       commons.clickmenu()
       perfil.perfil_Rest()
        perfil.editar_datos('CotaMotos')
        cy.get('.MuiSnackbarContent-message').should('equal','Datos guardados correctamente')
        })
    
  it ('agregar sucursal', ()=>{
      commons.clickmenu()
      perfil.perfil_Rest()
      perfil.agregar_sucursal('prueba1' , 'Pollo' , 'Centro', 'piso 3', 'Manuel' , '78596412', '1593549')
      cy.get('.MuiSnackbarContent-message').should('equal','Datos guardados correctamente')
    })
    
it ('editar sucursal', ()=>{
    commons.clickmenu()
    perfil.perfil_Rest()
    perfil.editar_sucursal('prueba2' , 'Pablo' , 'CentroSur', '4451211', '1593549' , 'piso 6')
    cy.contains('Datos guardados correctamente').should('equal','Datos guardados correctamente')
    
    })

})