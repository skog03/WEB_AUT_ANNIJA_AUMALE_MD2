import { BasePage } from "./basePAge";

export class MakeAppointmentPage extends BasePage {

    //combo_facility
    
    
    static get facility(){
        return cy.get("#combo_facility");
    }
    //chk_hospotal_readmission
    static get readmissionChk(){
        return cy.get("#chk_hospotal_readmission");
    }

    static get medicaid(){
        return cy.get("#radio_program_medicaid");
    }
    static get calendar(){
        return cy.get("#txt_visit_date");
    }
    static get daysInCalendar(){
        return cy.get("[class='day']");
    }
    static get commentField(){
        return cy.get("#txt_comment");
    }
    //btn-book-appointment
    static get bookBtn(){
        return cy.get("#btn-book-appointment");
    }

   

    static get menuBtn(){
        return cy.get("#menu-toggle");
    }
    
    static get sidebar(){
        return cy.get("#sidebar-wrapper");
    }
    

}