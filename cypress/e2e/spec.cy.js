import { registerData } from "./pages/register/registes.data"

describe('template spec', () => {
  it('SingIn', () => {

    const userName = registerData.newUser.userName
    const email = registerData.newUser.email
    const password = registerData.newUser.password

    cy.visit('http://localhost:4100/')

    cy.get('a[href="/register"]').click()

    registerData.SingUp(userName,email,password)

    cy.get('.nav-link').should('contain.text', userName);
    cy.wait(3000)
  }),

    it('LogIn', () => {

    cy.visit('http://localhost:4100/')

    cy.get('a[href="/login"]').click()

    registerData.SingUp(userName,email,password)

    cy.get('.nav-link').should('contain.text', userName);
    cy.wait(3000)
  })
})