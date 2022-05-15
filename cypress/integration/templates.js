import { Templates } from "./components/templates";
import { Util } from "./components/util";

describe('Testing Successful login in Application', () => {

	const templates = new Templates();
	const util = new Util();
  const RandomName1 = util.generateRandomNumber('1Template');
  const RandomName2 = util.generateRandomNumber('2Template');
	before(function() {
      cy.exec("npm run refresh_Json_Test_data");	  
    })
  it('Login', function (){
        cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
          for  (var jsonindex in json_TestDataData){
            cy.login_with_Userkey_from_Testdata_to_CRM_Application(json_TestDataData[jsonindex].userkey);
            cy.asserting_As_Xpath_Present('LandingPage_loginSuccessful_Message');
       }
       })
  })
  it('Create_Template', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
        templates.navigateToTemplates();
        templates.createTemplate(    json_TestDataData[jsonindex].Type,RandomName1,json_TestDataData[jsonindex].Subject,
        json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body  )
        templates.createTemplate(    json_TestDataData[jsonindex].Type,RandomName2,json_TestDataData[jsonindex].Subject,
            json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body  )
    //cy.logout_of_CRM_Application();
    }
    })
  })
  it('Edit_Template', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
        templates.updatedTemplateDetails(RandomName1,json_TestDataData[jsonindex].Bodyedit)
     }
     })
  })
  it('View_Template', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
        templates.viewTemplate(RandomName1,json_TestDataData[jsonindex].Bodyedit)
    }
    })
  })
  it('Add_Tag', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
        templates.AddTag(RandomName1,json_TestDataData[jsonindex].Tags)
        templates.ViewTag(RandomName1,json_TestDataData[jsonindex].tag)
      }
    })
  })
  it('Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
        templates.RemoveTag(RandomName1,json_TestDataData[jsonindex].tag)
      }
    })
  })
  it('Multiple_Add_Tag', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
        templates.multipleAddtag(RandomName1,RandomName2,json_TestDataData[jsonindex].Tags)
        templates.ViewTag(RandomName1,json_TestDataData[jsonindex].tag)
       }
       })
  })
  it('Multiple_Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
        templates.multipleRemovetag(RandomName1,RandomName2,json_TestDataData[jsonindex].tag)
      }
      })
  })
  it('Archive_Template', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
        templates.archiveAccount(RandomName1)
        templates.navigateToArchive()
        templates.assertion(RandomName1)
       }
       })
  })
it('Unarchive_Template', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
        templates.unArchiveAccount(RandomName1)
        templates.navigateToArchive()
        templates.assertion(RandomName1)
       }
       })
})
it('Multiple_Archive', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    templates.multipleArchive(RandomName1,RandomName2);    
    templates.navigateToArchive(); 
    templates.multipleAssertion(RandomName1,RandomName2);
     }
     })
})
it('Multiple_Unarchive', function (){
   cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
        templates.multipleUnarchive(RandomName1,RandomName2);
        templates.navigateToArchive();
        templates.multipleAssertion(RandomName1,RandomName2);
    }
    })
})
it('Delete', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    templates.deleteTemplate(RandomName2);
    }
    })
})
it('Delete_Multiple', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    templates.multipleDelete(RandomName1);   
    }
    })
})
})