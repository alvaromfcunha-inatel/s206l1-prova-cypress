/// <reference types="cypress"/>

const DEMOQA_URL = 'https://demoqa.com'

describe('demoqa automation-practice-form tests', () => {
  it('successfuly submiting form with only required fields', () => {
    cy.on('uncaught:exception', () => {
      return false
    })
    
    cy.viewport(2000, 2000)
    cy.visit(DEMOQA_URL + '/automation-practice-form')
    
    cy.get('#firstName').type('Alvaro')
    cy.get('#lastName').type('Cunha')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#userNumber').type('0123456789')
  
    cy.get('#submit').click()

    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form')
  })

  it('successfuly submiting form with all fields', () => {
    cy.on('uncaught:exception', () => {
      return false
    })
    
    cy.viewport(2000, 2000)
    cy.visit(DEMOQA_URL + '/automation-practice-form')
    
    cy.get('#firstName').type('Alvaro')
    cy.get('#lastName').type('Cunha')
    cy.get('#userEmail').type('awd@awd.com')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#userNumber').type('0123456789')
    cy.get('div.custom-checkbox:nth-child(1)').click()
    cy.get('div.custom-checkbox:nth-child(2)').click()
    cy.get('div.custom-checkbox:nth-child(3)').click()
    cy.get('#currentAddress').type('Rua do Fulano')

    cy.get('#submit').click()

    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form')
  })

  it('unsuccessfuly submiting form missing 1 required field', () => {
    cy.on('uncaught:exception', () => {
      return false
    })
    
    cy.viewport(2000, 2000)
    cy.visit(DEMOQA_URL + '/automation-practice-form')
    
    cy.get('#firstName').type('Alvaro')

    cy.get('#userEmail').type('awd@awd.com')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#userNumber').type('0123456789')
    cy.get('div.custom-checkbox:nth-child(1)').click()
    cy.get('div.custom-checkbox:nth-child(2)').click()
    cy.get('div.custom-checkbox:nth-child(3)').click()
    cy.get('#currentAddress').type('Rua do Fulano')

    cy.get('#submit').click()
    cy.get('#submit').click()

    cy.get('.practice-form-wrapper > h5:nth-child(1)').should('contain.text', 'Student Registration Form')
  })
})