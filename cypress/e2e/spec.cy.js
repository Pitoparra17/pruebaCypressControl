import { loginMethod } from "./pages/login/login.method"
import { registerMethod } from "./pages/register/register.method"
import { registerData } from "./pages/register/registes.data"
import { logger } from "./util/logger";
import { newPostData } from "./pages/newPost/newPost.data";
import {newPostMethod } from "./pages/newPost/newPost.method";

describe('template spec', () => {
  
  const { userName, email, password } = registerData.newUser;
  const {articuleTitle,subject,bodyArticule,tags}= newPostData.newPost;
  const {editArticuleTitle,editSubject,editBodyArticule,editTags}= newPostData.newPost;


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
    cy.get(`a.nav-link[href="/@${userName}"]`).should('contain.text', userName);

    logger.stepNumber(8)
    logger.step('ingresar a newpost header')
    cy.get('a[href="/editor"]').click()
    
    logger.stepNumber(9)
    logger.step('rellenar formulario de articulo')
    newPostMethod.newPost(articuleTitle,subject,bodyArticule,tags)
    cy.get('button[type="button"]').trigger('click')
    cy.wait(5000)
    logger.verification('valida el nombre del articulo')
    cy.contains('h1', articuleTitle)
    logger.verification('valida el nuevo cuerpo del articulo')
    cy.contains('p', bodyArticule)

    logger.stepNumber(10)
    logger.step('editar post de formulario')
    newPostMethod.editNewPost(editArticuleTitle,editSubject,editBodyArticule,editTags)
    cy.get('button[type="button"]').trigger('click')
    cy.wait(5000)
    logger.verification('valida el nuevo nombre del articulo')
    cy.contains('h1', editArticuleTitle)
    logger.verification('valida el nuevo cuerpo del articulo')
    cy.contains('p', editBodyArticule)

    logger.stepNumber(11)
    logger.step('editar post de formulario')
    newPostMethod.deleteNewPost()

    cy.wait(3000)
  })
})