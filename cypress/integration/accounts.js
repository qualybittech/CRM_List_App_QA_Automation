import { Templates } from "./components/templates";
import { Util } from "./components/util";

describe('Testing Successful login in Application', () => {

  const templates = new Templates();
	const util = new Util();
  const RandomName1 = util.generateRandomNumber('PersonalTemplate1');
  const RandomName2 = util.generateRandomNumber('PersonalTemplate2');
  const RandomName3 = util.generateRandomNumber('TeamTemplate1');
  const RandomName4 = util.generateRandomNumber('TeamTemplate2');
  const PersonalSnippet = util.generateRandomNumber('PersonalSnippet');
  const TeamSnippet = util.generateRandomNumber('TeamSnippet')
  const p = './JSON_TestData/Templates_Testdata.json'
	before(function() {
      cy.exec("npm run refresh_Json_Test_data");	  
    })
  it('Login', function (){
        cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
          for  (var jsonindex in json_TestDataData){
            cy.login_with_Userkey_from_Testdata_to_CRM_Application(json_TestDataData[jsonindex].userkey);
            cy.asserting_As_Xpath_Present('LandingPage_loginSuccessful_Message');
			cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
			cy.element_Click_based_on_inputXpath('Main_section_Templates_Link');
			cy.element_Click_based_on_inputXpath('Templates_Section_Type_Personal');
			cy.element_Click_based_on_inputXpath('Templates_Section_Create_Button');
			cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Name','Name');
			cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Subject','Subject');
			cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Body','Name');
			//cy.get('.wsywgi-form > .justify-between > .gap-2 > :nth-child(1)').attachFile('accounts.json');
			//cy.element_Click_based_on_inputXpath('Templates_Section_Create_Add');   

       }
       })
	})
	   it('Uplaodfile', function (){
			cy.get('#attachments').attachFile(p);
			cy.element_Click_based_on_inputXpath('Templates_Section_Create_Add');   
  })
 


})