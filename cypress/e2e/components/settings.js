export class Settings{

    navigateToSettings(){
        cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
        cy.element_Click_based_on_inputXpath('Main_Section_Setting_Link');
    }

    assertionForAccountDetails(name,lname,email,role){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Settings_Section_Account_Firstname');
        cy.get('@XpathvalueString').then(xpathString => {
            cy.asserting_As_Xpath_Present(xpathString.replace('#text#',name));
          });
          cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Settings_Section_Account_Firstname');
        cy.get('@XpathvalueString').then(xpathString => {
            cy.asserting_As_Xpath_Present(xpathString.replace('#text#',lname));
          });
          cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Settings_Section_Account_Firstname');
        cy.get('@XpathvalueString').then(xpathString => {
            cy.asserting_As_Xpath_Present(xpathString.replace('#text#',email));
          });
          cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Settings_Section_Account_Firstname');
          cy.get('@XpathvalueString').then(xpathString => {
              cy.asserting_As_Xpath_Present(xpathString.replace('#text#',role));
            });
    }
    accountDetailsUpdation(phone){
      cy.element_Send_Value_based_on_InputXpath('Settings_Section_Account_Phone',phone)
      cy.element_Click_based_on_inputXpath('Contacts_Section_Add_Snippet');
    }
    inviteUser(email){
      cy.element_Click_based_on_inputXpath('Settings_Section_User_Teams');
      cy.element_Send_Value_based_on_InputXpath('Settings_Section_User_Teams_Email',email)
      cy.element_Click_based_on_inputXpath('Settings_Section_User_Teams_Invite');
      cy.asserting_As_Xpath_Present('Settings_Section_User_Teams_Invite_Popup');

    }
    security(oldpassword,newpassword){
      cy.element_Click_based_on_inputXpath('Settings_Section_Security');
      cy.element_Send_Value_based_on_InputXpath('Settings_Section_Security_Oldpassword',oldpassword)
      cy.element_Send_Value_based_on_InputXpath('Settings_Section_Security_Newpassword',newpassword)
      cy.element_Send_Value_based_on_InputXpath('Settings_Section_Security_Cnfpassword',newpassword)
      cy.element_Click_based_on_inputXpath('Settings_Section_Security_Submit');
    }
}