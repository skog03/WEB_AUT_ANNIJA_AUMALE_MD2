import { ConformationPage } from "../pageObjects/ConformationPage";
import { HistoryPage } from "../pageObjects/HistoryPage";
import { HomePage } from "../pageObjects/HomePage"
import { MakeAppointmentPage } from "../pageObjects/MakeAppointmentPage";

describe('template spec', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('Make an appointment', () => {
    //ii. Click - Make Appointment
    HomePage.makeAppointmentBtn.click();
    //iii. Set username and password fields with the demo account credentials
    HomePage.usernameField.type("John Doe");
    HomePage.passwordfield.type("ThisIsNotAPassword");
    //iv. Click - Login
    HomePage.loginBtn.click();
    //v. Set the following values:
      //1. Facility - Seoul CURA Healthcare Center
    MakeAppointmentPage.facility.select('Seoul CURA Healthcare Center');
      //2. Check - Apply for hospital readission
    MakeAppointmentPage.readmissionChk.check();
      //3. Select - Medicaid
    MakeAppointmentPage.medicaid.check();
      //4. Set Date value by using the widget - 30
    MakeAppointmentPage.calendar.click();

    MakeAppointmentPage.daysInCalendar.contains("30").click();
    
      //5. Set comment - CURA Healthcare Service
    MakeAppointmentPage.commentField.type("CURA Healthcare Service");
    
      //6. Click - Book Appointment
    MakeAppointmentPage.bookBtn.click();
    //vi. Validate that previously set values are correct

    ConformationPage.facilityText.should('have.text','Seoul CURA Healthcare Center');
    ConformationPage.readmissionText.should('have.text','Yes');
    ConformationPage.programText.should('have.text','Medicaid');
    ConformationPage.dateText.should('have.text','30/05/2025');
    ConformationPage.commentText.should('have.text','CURA Healthcare Service');
  })
  

  it.only('Appointment history empty', () => {
  //ii. Click - Make Appointment
    HomePage.makeAppointmentBtn.click();
    //iii. Set username and password fields with the demo account credentials
    HomePage.usernameField.type("John Doe");
    HomePage.passwordfield.type("ThisIsNotAPassword");
    //iv. Click - Login
    HomePage.loginBtn.click();
    //v. Click - Menu/Stack/Burger icon
    MakeAppointmentPage.menuBtn.click();
    //vi. Validate that the sidebar is active
    MakeAppointmentPage.sidebar.should('have.class','active');
      
    //vii. Click - History
    MakeAppointmentPage.sidebar.contains('History').click();
    //viii. Validate that - No appointment - is visible
    HistoryPage.history.should('contain.text','No appointment.');

  })
})