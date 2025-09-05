import { loginMethod } from "./pages/login/login.method"
import { registerMethod } from "./pages/register/register.method"
import { registerData } from "./pages/register/registes.data"

describe('template spec', () => {
  
  const { userName, email, password } = registerData.newUser;

  it('SignUP', () => {

    //const userName = registerData.newUser.userName
    //const email = registerData.newUser.email
    //const password = registerData.newUser.password

    cy.visit('http://localhost:4100/')

    cy.get('a[href="/register"]').click()

    registerMethod.signUp(userName,email,password)

    //cy.get('.nav-link').should('contain.text', userName);
    cy.get(`a.nav-link[href="/@${userName}"]`).should('contain.text', userName);
    cy.wait(3000)
  }),

    it('SignIn', () => {

    cy.visit('http://localhost:4100/')

    cy.get('a[href="/login"]').click()

    loginMethod.signIn(email,password)

    //cy.get('.nav-link').should('contain.text', userName);
    cy.get(`a.nav-link[href="/@${userName}"]`).should('contain.text', userName);
    cy.wait(3000)
  })
})