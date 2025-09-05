import { loginElement } from "./login.element"

export class loginMethod{
    static insertEmal(email){
        loginElement.texboxes.email.invoke('val',email)
    }
    static insertPassword(password){
        loginElement.texboxes.password.invoke('val',password)
    }
    static clickOnSignInButton(){
        loginElement.buttons.signIn.clic()
    }

    static signUp(email,password){
        this.insertUserName(email)
        this.insertPassword(password)
        this.clickOnSignInButton()
    }
}