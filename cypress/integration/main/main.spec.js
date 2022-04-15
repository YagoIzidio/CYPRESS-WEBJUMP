/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>

describe('Pagina principal de teste Webjump', () => {

  beforeEach(() =>  {
    cy.visit('/qa-test')
  })

  it('1 - Clicando nos botões One, Two, e Four no painel de BUTTONS e verificando sua ausência', () => {
    cy.clickAndSpecButton('#btn_one')
    cy.clickAndSpecButton('#btn_two')
    cy.clickAndSpecButton('#btn_link')
  })

  it('2 - Clicando nos botões One, Two, e Four no painel de IFRAME BUTTONS e verificando sua ausência', () => {
    cy.clickAndSpecButtonIframe('iframe[src*="buttons"]', '#btn_one')
    cy.clickAndSpecButtonIframe('iframe[src*="buttons"]', '#btn_two')
    cy.clickAndSpecButtonIframe('iframe[src*="buttons"]', '#btn_link')
  })

  it('3 - Multitarefas nos painéis da pagina e validação da imagem', () => {
    cy.typeHere('#first_name', 'Yago')
    cy.clickAndSpecButton('#btn_one')
    cy.selectHere('#select_box', 'option_two')
    cy.checkHere('#opt_three')
    cy.expectImage('img[src*="1vsaEJB.jpg"]')  
  })

  it('4 - Multitarefas nos painéis de IFRAME e validação da imagem', () => {
    cy.typeHereIframe('iframe[src*="fields"]', '#first_name', 'Yago')
    cy.clickAndSpecButtonIframe('iframe[src*="buttons"]', '#btn_one')
    cy.selectHereIframe('iframe[src*="buttons"]', '#select_box', 'option_two')
    cy.checkHereIframe('iframe[src*="buttons"]', '#opt_three')
    cy.expectImage('img[src*="1vsaEJB.jpg"]')  
  })
})  

