/// <reference types="cypress"/>
export class Chat {
click_Chat_Button(){
    cy.contains('Chat').click()
    cy.wait(500)
}
select_kind_Of_Chat(value){
    cy.get('.MuiNativeSelect-root').select(value)
    cy.wait(500)
}
type_topic(value){
    cy.get('input[type=text]').type(value)
}
click_on_CrearChat(){
    cy.contains('Crear chat').click()
}
upload_image(){
    cy.wait(3000)
    cy.xpath('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div/div[1]').attachFile('descarga.jpg')
    cy.wait(1000)
}
write_message(value){
    cy.get('textarea[name=message]').type(value+'{enter}')
}
open_An_Old_Chat(value){
    cy.xpath('/html/body/div[3]/div[3]/div/div[2]/div['+value+']/div/div[1]/div/div[2]/p[1]').click()
}
close_chat(){
    cy.get('.MuiIconButton-label > img').click()
}
}