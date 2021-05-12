/// <reference types="cypress"/>
import { open_site } from "../../pageObject/open_site";
import { login_page } from "../../pageObject/login_page";
import { go_motos } from "../../pageObject/Go_Motos";
import { Log_out } from "../../pageObject/Log_out";
import { registro } from "../../pageObject/Registro";
import { Hacer_pedido } from "../../pageObject/Hacer_pedido";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Login', ()=>{
    const site = new open_site()
    const login = new login_page()
    const motos = new go_motos()
    const logout = new Log_out()
    const regis = new registro()
    const hacer_pedido = new Hacer_pedido()
    
    /*beforeEach(()=>{
        cy.clearLocalStorage()
        
    })
    afterEach(()=>{
        logout.logout()

    })*/
    it('Crear User', ()=>{
        site.mainpage()
        site.login()
        login.datos('cota@motos.com','sample5')   
        motos.motos()
        regis.registro()
        regis.fill('testname', 'testlastname', '70512345', 'address test', 'ref test', 'https://www.google.com.bo/maps/place/Muebler%C3%ADa+Vasquez/@-16.5239053,-68.0767068,15.23z/data=!4m13!1m7!3m6!1s0x915edf0a04f5a40f:0x57dbfc76b4458ab3!2sLa+Paz!3b1!8m2!3d-16.489689!4d-68.1192936!3m4!1s0x0:0x9a1a5b77a14115c1!8m2!3d-16.5219149!4d-68.0640448?hl=es')
        cy.get('.MuiSnackbar-root > .MuiPaper-root').should('be.visible')
        
    })
    it('Edit User', ()=>{
        
        regis.search('70512345')
        regis.edit('edit', 'edit', 'edit','edit')
        cy.get('.MuiSnackbar-root > .MuiPaper-root').should('be.visible')
        
    })
    it.skip ('ir a pedidos', ()=>{
        motos.motos()
        hacer_pedido.Hacer_pedido()
        hacer_pedido.search('70708949')
        hacer_pedido.generar_pedido()
        hacer_pedido.monto_pedido('5')
        hacer_pedido.solicitar_moto()
        cy.url().should('contain', 'https://xpress-test-motos-admin.firebaseapp.com/app/orders')
        cy.xpath('//*[@id="root"]/div[1]/div/div/div/div/div/div[1]/div/ul/div[1]/div/div/div/div[1]/div/div/div/div/div[2]/div[3]/h6').should('equal','Repartidor no asignado')
    })
   
  })