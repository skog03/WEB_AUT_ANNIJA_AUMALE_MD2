import { BasePage } from "./basePAge";

export class HomePage extends BasePage {
  static get url() {
    return "https://katalon-demo-cura.herokuapp.com/";
  }

  static get makeAppointmentBtn(){
    return cy.get("#btn-make-appointment");
  }
  
  static get usernameField(){
    return cy.get("#txt-username");
  }
  //txt-password
  static get passwordfield(){
    return cy.get("#txt-password");
  }
  //btn-login
  static get loginBtn(){
    return cy.get("#btn-login");
  }
}