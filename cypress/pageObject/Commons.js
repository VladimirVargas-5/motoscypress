/// <reference types="cypress"/>
export class Commons {
    logout(){
        cy.get('.MuiAvatar-root > .MuiSvgIcon-root > path').click({force:true})
        cy.xpath('/html/body/div[2]/div[3]/ul/li').click({force:true})
        cy.contains('Iniciar Sesión').click()
        cy.wait(2500)
    }
    mainpage(){
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://xpress-test-motos-admin.firebaseapp.com/login');
        cy.contains('Estoy de acuerdo').click()
    }
    datos(val, val2){
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type(val)
        cy.wait(3000)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(val2+'{enter}')          
    }
    clickmenu(){
        cy.xpath('//*[@id="root"]/div/header/div/div[1]/button').click({force:true})
    }
    Cambio_Sucursal(value){ //mandar el numero de la posicion de la sucursal
        cy.get('div.MuiDrawer-root.MuiDrawer-modal div > button > span.MuiButton-label').click({force:true})
        cy.xpath('//*[@id="simple-menu"]/div[3]/ul/li['+value+']').click({force:true})
    }


}