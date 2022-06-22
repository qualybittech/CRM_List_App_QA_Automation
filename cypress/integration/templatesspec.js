import { Snippets } from "./components/snippets";
import { Templates } from "./components/templates";
import { Util } from "./components/util";

describe('Testing Successful login in Application', () => {

	const snippets = new Snippets();
  const templates = new Templates();
	const util = new Util();
  const RandomName1 = util.generateRandomNumber('PersonalTemplate1');
  const RandomName2 = util.generateRandomNumber('PersonalTemplate2');
  const RandomName3 = util.generateRandomNumber('TeamTemplate1');
  const RandomName4 = util.generateRandomNumber('TeamTemplate2');
  const PersonalSnippet = util.generateRandomNumber('PersonalSnippet');
  const TeamSnippet = util.generateRandomNumber('TeamSnippet')
  const file = 'accounts.json'

	before(function() {
      cy.exec("npm run refresh_Json_Test_data");	  
    })
    
  beforeEach(()=>{
      cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
        for  (var jsonindex in json_TestDataData){
          cy.login_with_Userkey_from_Testdata_to_CRM_Application(json_TestDataData[jsonindex].userkey);
          cy.asserting_As_Xpath_Present('LandingPage_loginSuccessful_Message');
     }
     })
  })  
  it('Create_Snippet', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
        snippets.navigateToSnippets();
        snippets.createPersonalSnippet(PersonalSnippet,json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body  )  
        snippets.createTeamSnippet(TeamSnippet,json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body  ) 
    }
    })
  })
  it('Create_Personal_Template', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
        templates.navigateToTemplates();
        templates.createPersonalTemplate(RandomName1,json_TestDataData[jsonindex].Subject,
        json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body,PersonalSnippet,TeamSnippet,file)
        templates.createPersonalTemplate(RandomName2,json_TestDataData[jsonindex].Subject,
            json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body,PersonalSnippet,TeamSnippet,file  )
    //cy.logout_of_CRM_Application();
    }
    })
  })
  it('Edit_Template', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
        templates.navigateToTemplates();
        templates.updatedTemplateDetails(RandomName1,json_TestDataData[jsonindex].Bodyedit)
     }
     })
  })
  it('View_Template', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
        templates.navigateToTemplates();
        templates.viewTemplate(RandomName1,json_TestDataData[jsonindex].Bodyedit)
    }
    })
  })
  it('Clone_Template', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
        templates.navigateToTemplates();
        templates.cloneTemplate(RandomName1)
    }
    })
  })
  it('Add_Tag', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      templates.navigateToTemplates();
      templates.AddTag(RandomName1,json_TestDataData[jsonindex].Tags)
        templates.ViewTag(RandomName1,json_TestDataData[jsonindex].tag)
      }
    })
  })
  it('Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      templates.navigateToTemplates();
      templates.RemoveTag(RandomName1,json_TestDataData[jsonindex].tag)
      }
    })
  })
  it('Multiple_Add_Tag', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      templates.navigateToTemplates();
      templates.multipleAddtag(RandomName1,RandomName2,json_TestDataData[jsonindex].Tags)
        templates.ViewTag(RandomName1,json_TestDataData[jsonindex].tag)
       }
       })
  })
  it('Multiple_Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      templates.navigateToTemplates();
      templates.multipleRemovetag(RandomName1,RandomName2,json_TestDataData[jsonindex].tag)
      }
      })
  })
  it('Archive_Template', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      templates.navigateToTemplates();
      templates.archiveAccount(RandomName1)
        templates.navigateToArchive()
        templates.assertion(RandomName1)
       }
       })
  })
it('Unarchive_Template', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      templates.navigateToTemplates();
      templates.navigateToArchive()
      templates.unArchiveAccount(RandomName1)
        templates.navigateToArchive()
        templates.assertion(RandomName1)
       }
       })
})
it('Multiple_Archive', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    templates.navigateToTemplates();
    templates.multipleArchive(RandomName1,RandomName2);    
    templates.navigateToArchive(); 
    templates.multipleAssertion(RandomName1,RandomName2);
     }
     })
})
it('Multiple_Unarchive', function (){
   cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      templates.navigateToTemplates();
      templates.navigateToArchive()
      templates.multipleUnarchive(RandomName1,RandomName2);
        templates.navigateToArchive();
        templates.multipleAssertion(RandomName1,RandomName2);
    }
    })
})
it('Delete', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    templates.navigateToTemplates();
    templates.deleteTemplate(RandomName2);
    }
    })
})
it('Delete_Multiple', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    templates.navigateToTemplates();
    templates.multipleDelete(RandomName1);   
    }
    })
})
it('Create_Team_Template', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
  for  (var jsonindex in json_TestDataData){
    templates.navigateToTemplates();
    templates.createTeamTemplate(RandomName3,json_TestDataData[jsonindex].Subject,
      json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body,PersonalSnippet,TeamSnippet,file  )
      templates.createTeamTemplate(RandomName4,json_TestDataData[jsonindex].Subject,
          json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body,PersonalSnippet,TeamSnippet,file  )
  //cy.logout_of_CRM_Application();
  }
  })
})
it('Edit_Template', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    templates.navigateToTeamTemplates();
    templates.updatedTemplateDetails(RandomName3,json_TestDataData[jsonindex].Bodyedit)
   }
   })
})
it('View_Template', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
          templates.navigateToTeamTemplates();
          templates.viewTemplate(RandomName3,json_TestDataData[jsonindex].Bodyedit)
  }
  })
})
it('Clone_Template', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      templates.navigateToTeamTemplates();
      templates.cloneTemplate(RandomName3)
  }
  })
})
it('Add_Tag', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    templates.navigateToTeamTemplates();
    templates.AddTag(RandomName3,json_TestDataData[jsonindex].Tags)
      templates.ViewTag(RandomName3,json_TestDataData[jsonindex].tag)
    }
  })
})
it('Remove_Tag', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    templates.navigateToTeamTemplates();
    templates.RemoveTag(RandomName3,json_TestDataData[jsonindex].tag)
    }
  })
})
it('Multiple_Add_Tag', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    templates.navigateToTeamTemplates();
    templates.multipleAddtag(RandomName3,RandomName4,json_TestDataData[jsonindex].Tags)
      templates.ViewTag(RandomName3,json_TestDataData[jsonindex].tag)
     }
     })
})
it('Multiple_Remove_Tag', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    templates.navigateToTeamTemplates();
    templates.multipleRemovetag(RandomName3,RandomName4,json_TestDataData[jsonindex].tag)
    }
    })
})
it('Archive_Template', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    templates.navigateToTeamTemplates();
    templates.archiveAccount(RandomName3)
      templates.navigateToArchive()
      templates.assertion(RandomName3)
     }
     })
})
it('Unarchive_Template', function (){
  cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    templates.navigateToTeamTemplates();
    templates.navigateToArchive()
    templates.unArchiveAccount(RandomName3)
      templates.navigateToArchive()
      templates.assertion(RandomName3)
     }
     })
})
it('Multiple_Archive', function (){
cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
 for  (var jsonindex in json_TestDataData){
  templates.navigateToTeamTemplates();
  templates.multipleArchive(RandomName3,RandomName4);    
  templates.navigateToArchive(); 
  templates.multipleAssertion(RandomName3,RandomName4);
   }
   })
})
it('Multiple_Unarchive', function (){
 cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
  for  (var jsonindex in json_TestDataData){
    templates.navigateToTeamTemplates();
    templates.navigateToArchive()
    templates.multipleUnarchive(RandomName3,RandomName4);
      templates.navigateToArchive();
      templates.multipleAssertion(RandomName3,RandomName4);
  }
  })
})
it('Delete', function (){
cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
 for  (var jsonindex in json_TestDataData){
  templates.navigateToTeamTemplates();
  templates.deleteTemplate(RandomName4);
  }
  })
})
it('Delete_Multiple', function (){
cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
 for  (var jsonindex in json_TestDataData){
  templates.navigateToTeamTemplates();
  templates.multipleDelete(RandomName3);   
  }
  })
})
})