/// <reference types="cypress"/>
import {Commons} from "../../pageObject/Commons"
import {Chat} from "../../pageObject/Chat"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('Chat',()=>{
    const commons = new Commons()
    const chat = new Chat()

    beforeEach(()=>{
        commons.mainpage()
        commons.datos('xpress@motos.ong', 'cDZvrKt6dD')
    })

    afterEach(()=>{
        commons.logout()
    })

    it('Chat creation, Opcion OTRO', ()=>{
        chat.click_Chat_Button()
        chat.select_kind_Of_Chat('Otro')
        chat.type_topic('Prueba')
        chat.click_on_CrearChat()
        //chat.upload_image()
        chat.write_message('Este es un mensaje de prueba para opcion Otro')
        chat.close_chat()
    })
    it('Chat creation, Opcion Menu', ()=>{
        chat.click_Chat_Button()
        chat.select_kind_Of_Chat('Menu')
        chat.click_on_CrearChat()
        chat.write_message('Este es un mensaje de prueba para opcion Menu')
        chat.close_chat()
    })
    it('Select an existing chat', ()=>{
        chat.click_Chat_Button()
        chat.open_An_Old_Chat('2') //num 2, para abrir el chat en la posicion 2
        chat.write_message('Mensaje de un chat antiguo')
        chat.close_chat()
    })

})