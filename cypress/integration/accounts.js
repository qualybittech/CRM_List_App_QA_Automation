describe('Testing Successful login in Application', () => {
 
	// test case
	it('Conatacts adding Test Case', function (){
	
	//Be;low block is to Read json file,loop it and use it as Test data

	cy.fixture('./JSON_TestData/Accounts_Testdata').then((json_TestDataData) => {
	for (var jsonindex in json_TestDataData) {

	cy.fixture('./Environment_Specific/'+Cypress.env('environment')+'_Environment').then((environment)  => {
		//In below line test data from Json file is used
		var username_Password_array = environment.[json_TestDataData[jsonindex].userkey].split('|');
		cy.login_to_CRM_Application(username_Password_array[0],username_Password_array[1]);
	})

	cy.asserting_As_Xpath_Present('LandingPage_loginSuccessful_Message');
	cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
	cy.element_Click_based_on_inputXpath('Main_section_Contacts_Link');

	cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Button');
	cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Firstname',json_TestDataData[jsonindex].Firstname);
	cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Lastname',json_TestDataData[jsonindex].Lastname);
	cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Email',json_TestDataData[jsonindex].Email);

	cy.logout_of_CRM_Application();	

	}
	})
	})
	})