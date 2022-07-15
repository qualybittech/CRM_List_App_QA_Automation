describe('Testing Successful login in Application', () => {
 
	before(function() {
	  // runs once before all tests in the it block
	  //Below block is to refresh CSV and Properties file to JSON conversion
      cy.exec("npm run refresh_Json_Test_data");	  
    })
	
	// test case
	it('Conatacts adding Test Case', function (){
	
	//Below block is to Read json file,loop it and use it as Test data
	//All then code pasted within the below For loop will be Looped against CSV/JSOn test data
	cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
	for (var jsonindex in json_TestDataData) {
	
	//Code calling the Login to application based uponUserkey in Test data
	//below syntax of json_TestDataData[jsonindex].userkey is to extract the value of Userkey from Test json
	cy.login_with_Userkey_from_Testdata_to_CRM_Application(json_TestDataData[jsonindex].userkey);

	cy.asserting_As_Xpath_Present('LandingPage_loginSuccessful_Message');
	cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
	cy.element_Click_based_on_inputXpath('Main_section_Contacts_Link');

	cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Button');
	
	//Below lines are to extract test values from Json test data files and using it for Cypress commands
	cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Firstname',json_TestDataData[jsonindex].Firstname);
	cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Lastname',json_TestDataData[jsonindex].Lastname);
	cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Email',json_TestDataData[jsonindex].Email);
	cy.element_Click_based_on_inputXpath('Contacts_Section_close_arrowButton');
	cy.logout_of_CRM_Application();	

	}
	})
	})
	})