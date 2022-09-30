import 'cypress-file-upload';
import { Checkbox } from 'react-bootstrap';
require('cypress-xpath');
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



/*Cypress.Commands.add('login_to_CRM_Application', (emailvalue, passwordvalue) => {
	
	cy.launch_Application();
	//cy.get('input[id="email"]').type(emailvalue)
	//cy.get('input[id="password"]').type(passwordvalue)
	//cy.get('button[type="submit"]').click()
	cy.element_Send_Value_based_on_inputXpathName('Login_Page_Email_Username',emailvalue);
	cy.element_Send_Value_based_on_inputXpathName('Login_Page_password',passwordvalue);
	cy.element_Click_based_on_inputXpathName('Login_Page_Submit');
})
*/

Cypress.Commands.add('launch_Application', () => {
	
	cy.fixture('./Environment_Specific/'+Cypress.env('environment')+'_Environment').then((environment)  => {
		//cy.visit(environment.URL)
		cy.visit('https://www.qa.blubrd.ai/', {
			auth: {
		  username: 'qateam',
		  password: 'Secured1659password',
		  },
		  })
	})
	
})

Cypress.Commands.add('login_with_Userkey_from_Testdata_to_CRM_Application', (userKeyvalue) => {
	cy.fixture('./Environment_Specific/'+Cypress.env('environment')+'_Environment').then((environment)  => {
		//In below line test data from Json file is used
		var username_Password_array = environment[userKeyvalue].split('|');
		//environment.[userKeyvalue].split('|').then((username_Password_array) => {
		cy.login_to_CRM_Application_with_username_and_password(username_Password_array[0],username_Password_array[1]);
	})
})

Cypress.Commands.add('asserting_As_Xpath_Present', (xpathValue) => {		
	//cy.fixture('xpath_Locators').then((xpath_Locators)  => {
		cy.fixture('xpath_Locators').then((xpath_Locators)  => {

			

			if (typeof xpath_Locators[xpathValue] !== 'undefined')
			{
				cy.xpath(xpath_Locators[xpathValue]).should('be.visible');
			}
			else 
			{
				cy.xpath(xpathValue).should('be.visible');
			}
	})	
})

Cypress.Commands.add('asserting_As_Xpath_Not_Present', (xpathValue) => {		
	//cy.fixture('xpath_Locators').then((xpath_Locators)  => {
		cy.fixture('xpath_Locators').then((xpath_Locators)  => {

			if (typeof xpath_Locators[xpathValue] !== 'undefined')
			{
				cy.xpath(xpath_Locators[xpathValue]).not('be.visible');
			}
			else 
			{
				cy.xpath(xpathValue).not('be.visible');
			}
	})	
})

Cypress.Commands.add('element_Click_based_on_inputXpath', (xpathValue) => {		
	cy.fixture('xpath_Locators').then((xpath_Locators)  => {
			cy.log("xpathValue: "+xpathValue)
			if (typeof xpath_Locators[xpathValue] !== 'undefined')
			//if (xpath_Locators[xpathValue] !== 'undefined')
			{
			cy.log("if: "+xpath_Locators[xpathValue])
			cy.xpath(xpath_Locators[xpathValue]).click();
		}
		else 
		{
			//cy.log("value: "+cy.xpath(xpathValue))
			cy.xpath(xpathValue).click();
		}
	})	
})

Cypress.Commands.add('element_Send_Value_based_on_InputXpath', (xpathValue,SendingValue) => {		
	cy.fixture('xpath_Locators').then((xpath_Locators)  => {
	var xpathtobeused='';
	
		if (typeof xpath_Locators[xpathValue] !== 'undefined')
		{
			xpathtobeused=xpath_Locators[xpathValue];
		}
		else 
		{
			xpathtobeused=xpathValue
		}

		//findng the Index of Last slash in Xpath - to find as search select in only last locator
		var indexoflastslash = (xpathtobeused.toLowerCase().lastIndexOf("/"));
		
		//In the last section check as select keyoword is present
		var select_locatorPresent_status = xpathtobeused.substring(indexoflastslash+1).toLowerCase().startsWith("select");

		//checking if select present, if yes select or else type
		if(select_locatorPresent_status==true)
		
		{
			cy.xpath(xpathtobeused).select(SendingValue);
		}
		else
		{
			//cy.xpath(xpathtobeused).t;
			//cy.xpath(xpathtobeused).clear();
			cy.xpath(xpathtobeused).type(SendingValue);
		}
	})
})

Cypress.Commands.add('element_Clear_And_Send_Value_based_on_InputXpath', (xpathValue,SendingValue) => {		
	cy.fixture('xpath_Locators').then((xpath_Locators)  => {
	var xpathtobeused='';
	
		if (typeof xpath_Locators[xpathValue] !== 'undefined')
		{
			xpathtobeused=xpath_Locators[xpathValue];
		}
		else 
		{
			xpathtobeused=xpathValue
		}

		//findng the Index of Last slash in Xpath - to find as search select in only last locator
		var indexoflastslash = (xpathtobeused.toLowerCase().lastIndexOf("/"));
		
		//In the last section check as select keyoword is present
		var select_locatorPresent_status = xpathtobeused.substring(indexoflastslash+1).toLowerCase().startsWith("select");

		//checking if select present, if yes select or else type
		if(select_locatorPresent_status==true)
		
		{
			cy.xpath(xpathtobeused).select(SendingValue);
		}
		else
		{
			cy.xpath(xpathtobeused).clear();
			cy.xpath(xpathtobeused).type(SendingValue);
		}
	})
})

Cypress.Commands.add('entering_Multiple-values_in_multiple_controls', (testDataFileName,testHeaderName,xpathNameInCommmaFormat) => {		
	cy.fixture(testDataFileName).then((xpath_Locators)  => {

	var str_array = testHeaderName.split(',');

for(var i = 0; i < str_array.length; i++) {
   // Trim the excess whitespace.
   str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
   // Add additional code here, such as:
   alert(str_array[i]);
   
}

		if (typeof xpath_Locators[xpathValue] !== 'undefined')
		{
			cy.xpath(xpath_Locators[xpathValue]).type(SendingValue);
		}
		else 
		{
			cy.xpath(xpathValue).type(SendingValue);
		}
		
	})
})

Cypress.Commands.add('Returning_String_after_Find_and_Replace', (xpathValue,stringtoFind,stringtoReplace) => {		
	
		cy.fixture('xpath_Locators').then((xpath_Locators)  => {

			if (typeof xpath_Locators[xpathValue] !== 'undefined')
			{
				cy.wrap(xpath_Locators[xpathValue].replace(stringtoFind, stringtoReplace)).as('convertedString');
			}
			else 
			{
				cy.wrap(xpathValue.replace(stringtoFind, stringtoReplace)).as('convertedString');
			}
		})
})

Cypress.Commands.add('Returning_XPATH_value_based_on_XpathKey_Supplied', (xpathValue) => {		
	
	cy.fixture('xpath_Locators').then((xpath_Locators)  => {

		if (typeof xpath_Locators[xpathValue] !== 'undefined')
		{
			cy.wrap(xpath_Locators[xpathValue]).as('XpathvalueString');
		}
		else 
		{
			cy.wrap(xpathValue).as('XpathvalueString');
		}
	})
})

Cypress.Commands.add('launch_Application', () => {
	
	cy.fixture('./Environment_Specific/'+Cypress.env('environment')+'_Environment').then((environment)  => {
		//cy.visit('https://www.qa.blubrd.ai/auth/login')
		cy.visit('https://www.qa.blubrd.ai/', {
        auth: {
        username: 'qateam',
        password: 'Secured1659password',
        },
    })
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
		var username_Password_array = environment[userKeyvalue].split('|');
		//environment.[userKeyvalue].split('|').then((username_Password_array) => {
		cy.login_to_CRM_Application_with_username_and_password(username_Password_array[0],username_Password_array[1]);
	})
})

Cypress.Commands.add('logout_of_CRM_Application', () => {
	
	cy.element_Click_based_on_inputXpath('applicaation_Header_user_dropdown_Link');
	cy.element_Click_based_on_inputXpath('applicaation_Header_user_LogoutLink');
})