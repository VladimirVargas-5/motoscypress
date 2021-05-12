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
        cy.clearCookies()
        commons.mainpage()
        cy.clearLocalStorage()
        commons.login()
        commons.datos('cota@motos.com','sample5')
    })
    /*afterEach(()=>{
        logout.logout()

    })*/
    
    it ('editar perfilRestaurant', ()=>{
       commons.clickmenu()
       perfil.perfil_Rest()
        perfil.editar_datos()
        
    })

  })