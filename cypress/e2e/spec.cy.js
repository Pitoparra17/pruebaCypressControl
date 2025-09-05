import { loginMethod } from "./pages/login/login.method"
import { registerMethod } from "./pages/register/register.method"
import { registerData } from "./pages/register/registes.data"
import { logger } from "./util/logger";

describe('template spec', () => {
  
  const { userName, email, password } = registerData.newUser;

  it('SignUP', () => {

    logger.stepNumber(1)
    logger.step('Navegar a pagina')

    cy.visit('http://localhost:4100/')

    logger.stepNumber(2)
    logger.step('Dirigirse a pagina registro')
    cy.get('a[href="/register"]').click()

    logger.stepNumber(3)
    logger.step('rellenar formulario de registro')
    registerMethod.signUp(userName,email,password)

    logger.verification('valida el nombre del usuario al registrarse')
    cy.get('.nav-link').should('contain.text', userName);
    cy.get(`a.nav-link[href="/@${userName}"]`).should('contain.text', userName);
    
  }),

    it('SignIn', () => {

    logger.stepNumber(5)
    logger.step('Navegar a pagina')
    cy.visit('http://localhost:4100/')
    
    logger.stepNumber(6)
    logger.step('dirigirse a pagina inicio de sesion')
    cy.get('a[href="/login"]').click()
    
    logger.stepNumber(7)
    logger.step('rellenar formulario de inicio de sesion')
    loginMethod.signIn(email,password)
    logger.verification('valida el nombre del usuario al iniciar sesion')
    //cy.get('.nav-link').should('contain.text', userName);
    cy.get(`a.nav-link[href="/@${userName}"]`).should('contain.text', userName);
    cy.wait(3000)
  })
})