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
    
    it ('agregar sucursal', ()=>{
      commons.clickmenu()
      perfil.perfil_Rest()
      perfil.agregar_sucursal('prueba1' , 'Pollo' , 'Cochabamaba' , 'Centro', 'https://www.google.com.bo/maps/place/Muebler%C3%ADa+Vasquez/@-16.5239053,-68.0767068,15.23z/data=!4m13!1m7!3m6!1s0x915edf0a04f5a40f:0x57dbfc76b4458ab3!2sLa+Paz!3b1!8m2!3d-16.489689!4d-68.1192936!3m4!1s0x0:0x9a1a5b77a14115c1!8m2!3d-16.5219149!4d-68.0640448?hl=es', 'piso 3', 'Manuel' , '78596412', '1593549')

    })
    
    it ('editar sucursal', ()=>{
      commons.clickmenu()
      perfil.perfil_Rest()
      perfil.agregar_sucursal('prueba2' , 'Pollo' , 'Cochabamaba' , 'CentroSur', 'https://www.google.com.bo/maps/place/Muebler%C3%ADa+Vasquez/@-16.5239053,-68.0767068,15.23z/data=!4m13!1m7!3m6!1s0x915edf0a04f5a40f:0x57dbfc76b4458ab3!2sLa+Paz!3b1!8m2!3d-16.489689!4d-68.1192936!3m4!1s0x0:0x9a1a5b77a14115c1!8m2!3d-16.5219149!4d-68.0640448?hl=es', 'piso 5', 'Manuela' , '78596436', '1593585')
    })
})
