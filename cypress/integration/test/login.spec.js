/// <reference types="cypress"/>
import { open_site } from "../../pageObject/open_site";
import { login_page } from "../../pageObject/login_page";
import { go_motos } from "../../pageObject/Go_Motos";
import { Log_out } from "../../pageObject/Log_out";
import { registro } from "../../pageObject/Registro";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Login', ()=>{
    const site = new open_site()
    const login = new login_page()
    const motos = new go_motos()
    const logout = new Log_out()
    const regis = new registro()
    
    beforeEach(()=>{
        site.mainpage()
        cy.clearLocalStorage()
        site.login()
        login.datos('cota@motos.com','sample5')
    })
    /*afterEach(()=>{
        logout.logout()

    })*/
    it('Ir a Motos', ()=>{
        
        motos.motos()
        regis.registro()
        regis.fill('testname', 'testlastname', '70512345', 'address test', 'ref test', 'https://www.google.com.bo/maps/place/Muebler%C3%ADa+Vasquez/@-16.5239053,-68.0767068,15.23z/data=!4m13!1m7!3m6!1s0x915edf0a04f5a40f:0x57dbfc76b4458ab3!2sLa+Paz!3b1!8m2!3d-16.489689!4d-68.1192936!3m4!1s0x0:0x9a1a5b77a14115c1!8m2!3d-16.5219149!4d-68.0640448?hl=es')

        
    })
  })