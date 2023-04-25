import React from 'react'
import Stepper from './Stepper'

describe('<Stepper />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Stepper />)
  })

  it('mounts', () => {
    cy.mount(<Stepper />)
    cy.get('[data-cy=counter]').should('have.text', '0')
    cy.get('[data-cy=counter]').should('have.length', '1')
  })

  it('should set intitial state', () => {
    cy.mount(<Stepper initial={100} />)
    cy.get('[data-cy=counter]').should('have.text', '100')
  })

  it('clicking + fires a change event with the incremented value', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<Stepper onChange={onChangeSpy} />)
    cy.get('[data-cy=increment]').click()
    cy.get('@onChangeSpy').should('have.been.calledWith', 1)
  })

  it('reset button', () => {
    cy.mount(<Stepper initial={100} />)
    cy.get('[data-cy=counter]').should('have.text', '100')
    cy.get('[data-cy=reset]').click()
    cy.get('[data-cy=counter]').should('have.text', '0')
  })
})