import { registerElement } from "./register.element";

export class registerMethod{
    static insertUserName(userName){
        registerElement.textboxes.userName.invoke('val',userName)
    }
    static insertEmail(email){
        registerElement.textboxes.password.invoke('val',email)
    }
    static insertPassword(password){
        registerElement.textboxes.password.invoke('val',password)
    }

    static clickOnSignUpButton(){
        registerElement.buttons.singUp.click()
    }

    static signUp(username,email,password){
        this.insertUserName(username)
        this.insertEmail(email)
        this.insertPassword(password)
        this.clickOnSignUpButton()
    }

}