import { newPostElement } from "./newPost.element"
import {logger} from "../../util/logger";

export class newPostMethod{
    static insertArticuleTitle(articuleTitle){
            newPostElement.textboxes.articuleTitle.type(articuleTitle)
        }
        static insertSubject(subject){
            newPostElement.textboxes.subject.type(subject)
        }
        static insertBodyArticule(bodyArticule){
            newPostElement.textboxes.bodyArticule.type(bodyArticule)
        }

        static insertTags(tags){
            newPostElement.textboxes.tags.type(tags)
        }
    
        static clickOnPublishArticule(){
             newPostElement.buttons.publishArticule.click()
        }

        static clickOnEditArticule(){
            newPostElement.buttons.editArticule.click()
        }

        static clickOnDeleteArticule(){
            newPostElement.buttons.deleteArticule.click()
        }
    
        static newPost(articuleTitle,subject,bodyArticule,tags){
            logger.subStep('insertar titulo')
            this.insertArticuleTitle(articuleTitle)
            logger.subStep('insertar asunto')
            this.insertSubject(subject)
            logger.subStep('insertar cuerpo del articulo')
            this.insertBodyArticule(bodyArticule)
            logger.subStep('insertar tags')
            this.insertTags(tags)
            logger.subStep('dar clic boton publicar')
            this.clickOnPublishArticule()
        }

            static editNewPost(editArticuleTitle,editSubject,editBodyArticule,tags){
            logger.subStep('insertar nuevo titulo')
            this.insertArticuleTitle(editArticuleTitle)
            logger.subStep('insertar nuevo asunto')
            this.insertSubject(editSubject)
            logger.subStep('insertar nuevo cuerpo del articulo')
            this.insertBodyArticule(editBodyArticule)
            logger.subStep('insertar nuevo tags')
            this.insertTags(tags)
            logger.subStep('dar clic boton publicar')
            this.clickOnPublishArticule()
        }

        static deleteNewPost(){
            logger.subStep('dar clic boton eliminar articulo')
            this.clickOnDeleteArticule()
        }
}
