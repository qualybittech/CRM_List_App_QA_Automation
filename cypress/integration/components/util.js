export class Util{

    generateRandomEmail(text){
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const RandomEmail = text+`${id}@gmail.com`
        return RandomEmail
    }
    generateRandomWebsite(text){
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const RandomWebsite = text+`${id}.com`
        return RandomWebsite
    }
    generateRandomNumber(text){
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const RandomNumber = text+`${id}`
        return RandomNumber
    }


   
}