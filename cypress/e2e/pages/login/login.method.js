import { loginElement } from "./login.element"

export class loginMethod{
    static insertEmail(email){
        loginElement.texboxes.email.type(email)
    }
    static insertPassword(password){
        loginElement.texboxes.password.type(password)
    }
    static clickOnSignInButton(){
        loginElement.buttons.signIn.click()
    }

    static signIn(email,password){
        this.insertEmail(email)
        this.insertPassword(password)
        this.clickOnSignInButton()
    }
}