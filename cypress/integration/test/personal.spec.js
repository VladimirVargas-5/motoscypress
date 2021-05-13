/// <reference types="cypress"/>
import { personal } from "../../pageObject/personal";
import {Commons} from "../../pageObject/Commons"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Login', ()=>{
    const newper = new personal()
    const commons = new Commons()
    
    beforeEach(()=>{
      commons.mainpage()
      commons.datos('cota@motos.com','sample5')
      commons.clickmenu()
    })
    afterEach(()=>{
      commons.logout()
    })
    it ('añadir personal', ()=>{
      newper.per()
      newper.añadir_empleado()
      newper.subir_foto()
      cy.wait(3000)
      newper.llenar_datos('Marianela', 'Rojas','marianela789@gmail.com','78965412','Cajero','Cerca Suiza')   
    })
  })