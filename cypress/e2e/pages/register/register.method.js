import { registerElement } from "./register.element";
import {logger} from "../../util/logger";

export class registerMethod{
    static insertUserName(userName){
        registerElement.textboxes.userName.type(userName)
    }
    static insertEmail(email){
        registerElement.textboxes.email.type(email)
    }
    static insertPassword(password){
        registerElement.textboxes.password.type(password)
    }

    static clickOnSignUpButton(){
        registerElement.buttons.singUp.click()
    }

    static signUp(username,email,password){
        logger.subStep('insertar userName')
        this.insertUserName(username)
        logger.subStep('insertar email')
        this.insertEmail(email)
        logger.subStep('insertar password')
        this.insertPassword(password)
        logger.subStep('dar clic boton sign Up')
        this.clickOnSignUpButton()
    }

}