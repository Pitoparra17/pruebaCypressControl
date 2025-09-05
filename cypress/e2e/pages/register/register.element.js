import { registerData } from "./registes.data";

export class registerElement{
    static get buttons(){
        return{
            get singUp(){
                return cy.get('button[type="submit"]')
            }
        }
    }
    static get textboxes(){
        return{
            get userName(){
                return cy.get('input[type="text"]')                
            },
            get email(){
                return cy.get('input[type="email"]')                
            },
            get password(){
                return cy.get('input[type="password"]')                
            }
        }
    }
}