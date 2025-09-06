export class newPostElement{
    static get buttons(){
        return{
            get publishArticule(){
                return cy.get('button[type="button"]')
            },
            get editArticule(){
                return cy.get('a.btn')
            },
            get deleteArticule(){
                return cy.get('button.btn-outline-danger')
            }
        }
    }
    static get textboxes(){
        return{
            get articuleTitle(){
                return cy.get('input[placeholder="Article Title"]').clear()            
            },
            get subject(){
                return cy.get('input[placeholder="What\'s this article about?"]').clear()                
            },
            get bodyArticule(){
                return cy.get('textarea[placeholder="Write your article (in markdown)"]').clear()              
            },
            get tags(){
                return cy.get('input[placeholder="Enter tags"]').clear()                
            }
        }
    }
}