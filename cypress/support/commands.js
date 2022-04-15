//COMANDOS NÃO IFRAMES

Cypress.Commands.add('clickAndSpecButton', (seletor) => {
  cy.get(seletor).click()
   .should('not.be.visible')
})

Cypress.Commands.add('typeHere', (seletor, texto) => {
  cy.get(seletor).type(texto) 
})

Cypress.Commands.add('selectHere', (seletor, value) => {
  cy.get(seletor).select(value) 
})

Cypress.Commands.add('checkHere', (seletor) => {
  cy.get(seletor).check()
})

Cypress.Commands.add('expectImage', (source) => {
  cy.get(source).should('be.visible')
})

//COMANDOS IFRAME

Cypress.Commands.add('clickAndSpecButtonIframe', (iframe, seletor) => {
  cy.iframe(iframe)
    .find(seletor).click().should('not.be.visible')
})

Cypress.Commands.add('typeHereIframe', (iframe, seletor, texto) => {
  cy.iframe(iframe)
    .find(seletor).type(texto) 
})

Cypress.Commands.add('selectHereIframe', (iframe, seletor, value) => {
  cy.iframe(iframe)
    .find(seletor).select(value) 
})

Cypress.Commands.add('checkHereIframe', (iframe, seletor) => {
  cy.iframe(iframe)
    .find(seletor).check()
})



