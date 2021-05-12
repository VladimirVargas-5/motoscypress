/// <reference types="cypress"/>
import { go_motos } from "../../pageObject/Go_Motos";
import { personal } from "../../pageObject/personal";
import {Commons} from "../../pageObject/Commons"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Login', ()=>{
    const motos = new go_motos()
    const newper = new personal()
    const commons = new Commons()
    
    beforeEach(()=>{
        commons.mainpage()
        commons.login()
        commons.datos('cota@motos.com','sample5')
        commons.clickmenu()
    })
    
    it ('añadir personal', ()=>{
        newper.per()
        newper.añadir_empleado()
        newper.subir_foto()
        cy.wait(3000)
        newper.llenar_datos('Marianela', 'Rojas','marianela789@gmail.com','78965412','Cajero','Cerca Suiza')
        
        
    })

  })