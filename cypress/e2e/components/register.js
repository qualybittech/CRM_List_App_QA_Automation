export class Register{


signupUsingEmailid(Firstname,Lastname,Email,Password){
    cy.element_Click_based_on_inputXpath ("Register_Section_Signup") 
    cy.element_Send_Value_based_on_InputXpath("Register_Section_Signup_Firstname",Firstname)
    cy.element_Send_Value_based_on_InputXpath("Register_Section_Signup_Lastname",Lastname)
    cy.element_Send_Value_based_on_InputXpath("Register_Section_Signup_Email",Email)
    cy.element_Send_Value_based_on_InputXpath("Register_Section_Signup_Password",Password)
    cy.element_Click_based_on_inputXpath("Register_Section_Signup_Firstname")
    cy.element_Click_based_on_inputXpath("Register_Section_Signup_Password")

    cy.element_Click_based_on_inputXpath ("Register_Section_Register") 
    cy.element_Click_based_on_inputXpath ("Register_Section_Register") 
    cy.wait(2000)
    //Assertion
    cy.Returning_String_after_Find_and_Replace('Register_Section_Welcome_Message','#text#',Firstname);
    cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    cy.asserting_As_Xpath_Present('Register_Section_Verify_Message')
    cy.element_Click_based_on_inputXpath('Logout');
}
Api(){
    cy.request('GET','https://sales-tmp-server.herokuapp.com/automation/deleteUser?email=chinchan0209@gmail.com')
    cy.request('GET','https://sales-tmp-server.herokuapp.com/automation/deleteUser?email=chinchan0209@outlook.com')
}
loginUsingEmailid(Email,Password){
    cy.element_Send_Value_based_on_InputXpath('Login_Page_Email_Username',Email)
    cy.element_Send_Value_based_on_InputXpath('Login_Page_password',Password)
    cy.element_Click_based_on_inputXpath('Login_Page_Submit');
    //Assertion
    cy.asserting_As_Xpath_Present('LandingPage_loginSuccessful_Message')
    cy.asserting_As_Xpath_Present('Register_Section_Verify_Message')
    cy.element_Click_based_on_inputXpath('Logout');
}
signupUsingSignedupEmailid(Firstname,Lastname,Email,Password){
    cy.element_Click_based_on_inputXpath ("Register_Section_Signup") 
    cy.element_Send_Value_based_on_InputXpath("Register_Section_Signup_Firstname",Firstname)
    cy.element_Send_Value_based_on_InputXpath("Register_Section_Signup_Lastname",Lastname)
    cy.element_Send_Value_based_on_InputXpath("Register_Section_Signup_Email",Email)
    cy.element_Send_Value_based_on_InputXpath("Register_Section_Signup_Password",Password)
    cy.element_Click_based_on_inputXpath("Register_Section_Signup_Firstname")
    cy.element_Click_based_on_inputXpath("Register_Section_Signup_Password") 
    cy.wait(2000)
    //Assertion
    cy.asserting_As_Xpath_Present('Register_Section_Already_Signedup_Message')
}
loginUsingUnsignupEmailid(Email,Password){
    cy.element_Send_Value_based_on_InputXpath('Login_Page_Email_Username',Email)
    cy.element_Send_Value_based_on_InputXpath('Login_Page_password',Password)
    cy.element_Click_based_on_inputXpath('Login_Page_Submit');
    //Assertion
    cy.asserting_As_Xpath_Present('Register_Section_No_User_Message')
}
signupUsingGoogle(Email,Password){
    cy.element_Click_based_on_inputXpath ("Register_Section_Signup") 
    cy.wait(3000)
    cy.element_Click_based_on_inputXpath("Register_With_Google")
    //Cypress.Cookies.debug('enable', 'option')
    cy.element_Send_Value_based_on_InputXpath('Register_With_Google_Email',Email)
    cy.element_Click_based_on_inputXpath("Register_With_Google_Email_Next")
    cy.element_Send_Value_based_on_InputXpath('Register_With_Google_Password',Password)
    cy.element_Click_based_on_inputXpath("Register_With_Google_Email_Next")
}
}
