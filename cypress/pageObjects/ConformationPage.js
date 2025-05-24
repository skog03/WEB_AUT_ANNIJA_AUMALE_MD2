import { BasePage } from "./basePAge";

export class ConformationPage extends BasePage {
    static get facilityText(){
        return cy.get("#facility");
    }

    static get readmissionText(){
        return cy.get("#hospital_readmission");
    }
    static get programText(){
        return cy.get("#program");
    }
    static get dateText(){
        return cy.get("#visit_date");
    }
    static get commentText(){
        return cy.get("#comment");
    }
}
