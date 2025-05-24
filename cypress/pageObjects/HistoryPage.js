import { BasePage } from "./basePAge";

export class HistoryPage extends BasePage {

    static get history(){
        return cy.get("#history");
    }
}