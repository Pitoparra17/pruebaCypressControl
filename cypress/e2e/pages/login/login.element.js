export class loginElement{
    static get texboxes(){
        return{
            get email(){
                return cy.get('input[type="email"]')                
            },
            get password(){
                return cy.get('input[type="password"]')                
            }
        }
    }
    static get buttons(){
        return{
            get signIn(){
                return cy.get('button[type="submit"]')               
            }
        }
    }
}