

Cypress.Commands.add('launch_Application', () => {
	
	cy.fixture('./Environment_Specific/'+Cypress.env('environment')+'_Environment').then((environment)  => {
		cy.visit(environment.URL)
	})
	
})
Cypress.Commands.add('login_to_CRM_Application_with_username_and_password', (emailvalue, passwordvalue) => {
	
	cy.launch_Application();
	cy.element_Send_Value_based_on_InputXpath('Login_Page_Email_Username',emailvalue);
	cy.element_Send_Value_based_on_InputXpath('Login_Page_password',passwordvalue);
	cy.element_Click_based_on_inputXpath('Login_Page_Submit');
})

Cypress.Commands.add('login_with_Userkey_from_Testdata_to_CRM_Application', (userKeyvalue) => {
	cy.fixture('./Environment_Specific/'+Cypress.env('environment')+'_Environment').then((environment)  => {
		//In below line test data from Json file is used
		var username_Password_array = environment.[userKeyvalue].split('|');
		//environment.[userKeyvalue].split('|').then((username_Password_array) => {
		cy.login_to_CRM_Application_with_username_and_password(username_Password_array[0],username_Password_array[1]);
	})
})

Cypress.Commands.add('logout_of_CRM_Application', () => {
	
	cy.element_Click_based_on_inputXpath('applicaation_Header_user_dropdown_Link');
	cy.element_Click_based_on_inputXpath('applicaation_Header_user_LogoutLink');
})


