import { Snippets } from "./components/snippets";
import { Util } from "./components/util";

describe('Testing Successful login in Application', () => {

	const snippets = new Snippets();
	const util = new Util();
  const RandomName1 = util.generateRandomNumber('Snippet');
  const RandomName2 = util.generateRandomNumber('SampleSnippet');
	before(function() {
      cy.exec("npm run refresh_Json_Test_data");	  
    })
  it('Login', function (){
        cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
          for  (var jsonindex in json_TestDataData){
            cy.login_with_Userkey_from_Testdata_to_CRM_Application(json_TestDataData[jsonindex].userkey);
            cy.asserting_As_Xpath_Present('LandingPage_loginSuccessful_Message');
       }
       })
  })
  it('Create_Snippets', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippets();
    snippets.createSnippet(    json_TestDataData[jsonindex].Type,RandomName1,
        json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body  )
    snippets.createSnippet(    json_TestDataData[jsonindex].Type,RandomName2,
        json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body  )
    //cy.logout_of_CRM_Application();
    }
    })
  })
  it('Edit_Snippet', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
     snippets.updatedSnippetDetails(RandomName1,json_TestDataData[jsonindex].Bodyedit)
     cy.wait(2000)
     }
     })
  })
  it('View_Snippet', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
      snippets.viewSnippet(RandomName1,json_TestDataData[jsonindex].Bodyedit)
    }
    })
  })
  it('Add_Tag', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      snippets.AddTag(RandomName1,json_TestDataData[jsonindex].Tags)
      snippets.ViewTag(RandomName1,json_TestDataData[jsonindex].tag)
      }
    })
  })
  it('Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      snippets.RemoveTag(RandomName1,json_TestDataData[jsonindex].tag)
      }
    })
  })
  it('Multiple_Add_Tag', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      snippets.multipleAddtag(RandomName1,RandomName2,json_TestDataData[jsonindex].Tags)
      snippets.ViewTag(RandomName1,json_TestDataData[jsonindex].tag)
      snippets.ViewTag(RandomName2,json_TestDataData[jsonindex].tag)
       }
       })
  })
  it('Multiple_Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      snippets.multipleRemovetag(RandomName1,RandomName2,json_TestDataData[jsonindex].tag)
      }
      })
  })
 it('Archive_Snippet', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      snippets.archiveSnippet(RandomName1)
      snippets.navigateToArchive()
      snippets.assertion(RandomName1)
       }
       })
  })
it('Unarchive_Snippet', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      snippets.unArchiveSnippet(RandomName1)
      snippets.navigateToArchive()
      snippets.assertion(RandomName1)
       }
       })
})
it('Multiple_Archive', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    snippets.multipleArchive(RandomName1,RandomName2);    
    snippets.navigateToArchive(); 
    snippets.multipleAssertion(RandomName1,RandomName2);
     }
     })
})
it('Multiple_Unarchive', function (){
   cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      snippets.multipleUnarchive(RandomName1,RandomName2);
      snippets.navigateToArchive();
      snippets.multipleAssertion(RandomName1,RandomName2);
    }
    })
})
it('Delete', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    snippets.deleteSnippet(RandomName2);
    }
    })
})
it('Delete_Multiple', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    snippets.multipleDelete(RandomName1);   
    }
    })
})
})   