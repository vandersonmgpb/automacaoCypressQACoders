/// <reference types="cypress" />

describe('Login', () => {
    const element = require("../fixtures/login.json")

    beforeEach(() => {
        cy.visit('https://automacao.qacoders-academy.com.br/login')        
    });

    afterEach(() => {
        cy.screenshot()
    })

    it('Login com sucesso', () => {
       
        const email = Cypress.env('EMAIL')
        const password = Cypress.env('PASSWORD')
        
        cy.Login(email, password)
       
    })
    
    it('Login com e-mail válido e senha inválida', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL'))        
        cy.get(element.input_password).type(Cypress.env('PASSWORD_INVALIDO'))        
        cy.get(element.btn_login).click().screenshot('Bt_entrar')
        cy.MsgLoginFalho()
    })
    
    it('Login com e-mail inválido e senha válida', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL_INVALIDO'))        
        cy.get(element.input_password).type(Cypress.env('PASSWORD'))        
        cy.get(element.btn_login).click()
        cy.MsgLoginFalho()
    })
})