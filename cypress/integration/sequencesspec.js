import { Sequences } from "./components/sequences";
import { Util } from "./components/util";

describe('Testing Successful login in Application', () => {

	const sequences = new Sequences();
	const util = new Util();
  const RandomSequences = util.generateRandomNumber('UI_Testing');
  const RandomDescription1 = util.generateRandomNumber('Email');
  const RandomDescription2 = util.generateRandomNumber('Call');
  const RandomDescription3 = util.generateRandomNumber('Linkedin');
  const RandomDescription4 = util.generateRandomNumber('Sms');
  const RandomDescription5 = util.generateRandomNumber('Twitter');
  const RandomDescription6 = util.generateRandomNumber('Whatsapp');
  const RandomDescription7 = util.generateRandomNumber('Meeting');
  const EDescription1 = util.generateRandomNumber('EEmail');
  const EDescription2 = util.generateRandomNumber('ECall');
  const EDescription3 = util.generateRandomNumber('ELinkedin');
  const EDescription4 = util.generateRandomNumber('ESms');
  const EDescription5 = util.generateRandomNumber('ETwitter');
  const EDescription6 = util.generateRandomNumber('EWhatsapp');
  const EDescription7 = util.generateRandomNumber('EMeeting');

  const RandomName = util.generateRandomNumber('Filter');

	before(function() {
      cy.exec("npm run refresh_Json_Test_data");	  
    })
  it('Login', function (){
        cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
          for  (var jsonindex in json_TestDataData){
            cy.login_with_Userkey_from_Testdata_to_CRM_Application(json_TestDataData[jsonindex].userkey);
            cy.asserting_As_Xpath_Present('LandingPage_loginSuccessful_Message');
       }
       })
  })
  it('Create_Sequences', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
    sequences.navigateToSequences();
    sequences.createSequences(RandomSequences);
    //cy.logout_of_CRM_Application();
    }
    })
  })
  it('Create_Steps', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
    sequences.createEmailSteps(RandomDescription1,json_TestDataData[jsonindex].Email_Sub,json_TestDataData[jsonindex].Email);
    sequences.createCallSteps(RandomDescription2,json_TestDataData[jsonindex].Call);
    sequences.createLinkedinSteps(RandomDescription3,json_TestDataData[jsonindex].Linkedintt,json_TestDataData[jsonindex].Linkedin);
    sequences.createSmsSteps(RandomDescription4,json_TestDataData[jsonindex].Sms);
    sequences.createTwitterSteps(RandomDescription5,json_TestDataData[jsonindex].Twittertt,json_TestDataData[jsonindex].Twitter);
    sequences.createWhatsappSteps(RandomDescription6,json_TestDataData[jsonindex].Whatsapp);
    sequences.createMeetingSteps(RandomDescription7,json_TestDataData[jsonindex].Meeting);      
    }
    })
  })
  /*it('Edit_Steps', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
    sequences.editEmailSteps(json_TestDataData[jsonindex].Email_Sub,json_TestDataData[jsonindex].Email,EDescription1);
    sequences.editCallSteps(RandomDescription2,json_TestDataData[jsonindex].Call,EDescription2);
    sequences.editLinkedinSteps(RandomDescription3,json_TestDataData[jsonindex].Linkedin,EDescription3);
    sequences.editSmsSteps(RandomDescription4,json_TestDataData[jsonindex].Sms,EDescription4);
    sequences.editTwitterSteps(RandomDescription5,json_TestDataData[jsonindex].Twitter,EDescription5);
    sequences.editWhatsappSteps(RandomDescription6,json_TestDataData[jsonindex].Whatsapp,EDescription6);
    sequences.editMeetingSteps(RandomDescription7,json_TestDataData[jsonindex].Meeting,EDescription7);
    }
    })
  })
  it('Delete_Steps', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.deleteEmailSteps(json_TestDataData[jsonindex].Email_Sub,json_TestDataData[jsonindex].Email);
      sequences.deleteCallSteps(EDescription2,json_TestDataData[jsonindex].Call);  
    }
    })
  })*/
  it('Activate_Steps', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.activateSequences(RandomSequences);
    }
    })
  })
  it('Deactivate_Steps', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.deactivateSequences(RandomSequences);
    }
    })
  })
  it('Select_Steps', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.selectSequences(RandomSequences);
    }
    })
  })
})