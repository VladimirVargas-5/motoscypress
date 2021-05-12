/// <reference types="cypress"/>
export class Log_out {
    logout(){
        cy.xpath('//*[@id="root"]/div/header/div/div[4]/button').click({force:true})
        cy.xpath('/html/body/div[2]/div[3]/ul/li').click({force:true})
                
    }

}
