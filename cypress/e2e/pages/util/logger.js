export class logger{
    static stepNumber(number){
        const text = `step # ${number}`
        cy.log(text)
        cy.allure().stop(text)
    }

    static step(description){
        const text = `step - ${description}`
        cy.log(text)
        cy.allure().stop(text)
    }

    static verification(description){
        const text = `Verification - ${description}`
        cy.log(text)
        cy.allure().stop(text)
    }

    static subStep(description){
        const text = `Substep - ${description}`
        cy.log(text)
        cy.allure().stop(text)
    }

    static subVerification(description){
        const text = `Substep - ${description}`
        cy.log(text)
        cy.allure().stop(text)
    }
}