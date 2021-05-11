/// <reference types="cypress"/>
import { open_site } from "../../pageObject/open_site";
import { login_page } from "../../pageObject/login_page";
import { go_motos } from "../../pageObject/Go_Motos";
import { Log_out } from "../../pageObject/Log_out";
import { personal } from "../../pageObject/personal";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Login', ()=>{
    const site = new open_site()
    const login = new login_page()
    const motos = new go_motos()
    const logout = new Log_out()
    const newper = new personal()
    
    beforeEach(()=>{
        cy.clearCookies()
        site.mainpage()
        cy.clearLocalStorage()
        site.login()
        login.datos('cota@motos.com','sample5')
    })
    /*afterEach(()=>{
        logout.logout()

    })*/
    
    it ('añadir personal', ()=>{
        newper.personal()
        newper.per()
        newper.añadir_empleado()
        newper.subir_foto()
        cy.wait(3000)
        newper.llenar_datos('Marianela', 'Rojas','marianela789@gmail.com','78965412','Cajero','Cerca Suiza')
        
        
    })

  })