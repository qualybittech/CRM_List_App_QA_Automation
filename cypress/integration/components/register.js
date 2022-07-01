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
        
    }
}
