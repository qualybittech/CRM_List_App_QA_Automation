import { Settings } from "./components/settings";
import { Util } from "./components/util";

describe('Setting module', () => {

    const settings = new Settings();
    const util = new Util();


  before(function() {
     cy.exec("npm run refresh_Json_Test_data");	  
  })
  beforeEach(()=>{
    cy.fixture('./JSON_TestData/Settings_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
          cy.login_with_Userkey_from_Testdata_to_CRM_Application(json_TestDataData[jsonindex].userkey);
          cy.asserting_As_Xpath_Present('LandingPage_loginSuccessful_Message');
      }
    })
  })
      it('To validate the account details', function (){
        cy.fixture('./JSON_TestData/Settings_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
          settings.navigateToSettings();
          settings.assertionForAccountDetails(json_TestDataData[jsonindex].name,json_TestDataData[jsonindex].lname,json_TestDataData[jsonindex].email,json_TestDataData[jsonindex].role);
         }
        })
    })
    /*it('To validate the edit account details feature', function (){
      cy.fixture('./JSON_TestData/Settings_Testdata.json').then((json_TestDataData) => {
       for  (var jsonindex in json_TestDataData){
        settings.navigateToSettings();
        settings.accountDetailsUpdation(json_TestDataData[jsonindex].phone);
       }
      })
  })*/
  it('To validate the user&teams feature', function (){
    cy.fixture('./JSON_TestData/Settings_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      settings.navigateToSettings();
      settings.inviteUser(json_TestDataData[jsonindex].inviteemail);
     }
    })
})
it('To validate the change password feature', function (){
  cy.fixture('./JSON_TestData/Settings_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    settings.navigateToSettings();
    settings.security(json_TestDataData[jsonindex].oldpassword,json_TestDataData[jsonindex].newpassword,json_TestDataData[jsonindex].email);
    cy.login_with_Userkey_from_Testdata_to_CRM_Application(json_TestDataData[jsonindex].userkey1);
    settings.navigateToSettings();
    settings.security(json_TestDataData[jsonindex].oldpassword,json_TestDataData[jsonindex].newpassword);
  }
  })
})
})