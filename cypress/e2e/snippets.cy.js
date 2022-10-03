import { Snippets } from "./components/snippets";
import { Util } from "./components/util";

describe('Snippets module', () => {

	const snippets = new Snippets();
	const util = new Util();
  const RandomName1 = util.generateRandomNumber('PersonalSnippet1');
  const RandomName2 = util.generateRandomNumber('PersonalSnippet2');
  const RandomName3 = util.generateRandomNumber('TeamSnippet1');
  const RandomName4 = util.generateRandomNumber('TeamSnippet2');
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
  it('Upload_Snippets', function (){
    cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
      //for  (var jsonindex in json_TestDataData){
        snippets.navigateToSnippets();
        snippets.uploadSnippet('Snippet_Upload.csv')
      // }
       })
  })
  it('Create_Personal_Snippets', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippets();
    snippets.createPersonalSnippet(RandomName1,json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body)
    snippets.createPersonalSnippet(RandomName2,json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body)
    //cy.logout_of_CRM_Application();
    }
    })
  })
  it('Edit_Snippet', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      snippets.navigateToSnippets();
      snippets.updatedSnippetDetails(RandomName1,json_TestDataData[jsonindex].Bodyedit)
     cy.wait(2000)
     }
     })
  })
  it('View_Snippet', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
        snippets.navigateToSnippets();
        snippets.viewSnippet(RandomName1,json_TestDataData[jsonindex].Bodyedit)
    }
    })
  })
  it('Clone_Snippet', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
        snippets.navigateToSnippets();
        snippets.cloneSnippet(RandomName1)
    }
    })
  })
  it('Add_Tag', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      snippets.navigateToSnippets();
      snippets.AddTag(RandomName1,json_TestDataData[jsonindex].Tags)
      snippets.ViewTag(RandomName2,json_TestDataData[jsonindex].tag)
      }
    })
  })
  it('Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      snippets.navigateToSnippets();
      snippets.RemoveTag(RandomName1,json_TestDataData[jsonindex].tag)
      }
    })
  })
  it('Multiple_Add_Tag', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      snippets.navigateToSnippets();
      snippets.multipleAddtag(RandomName1,RandomName2,json_TestDataData[jsonindex].Tags)
      snippets.ViewTag(RandomName1,json_TestDataData[jsonindex].tag)
      snippets.ViewTag(RandomName2,json_TestDataData[jsonindex].tag)
       }
       })
  })
  it('Multiple_Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      snippets.navigateToSnippets();
      snippets.multipleRemovetag(RandomName1,RandomName2,json_TestDataData[jsonindex].tag)
      }
      })
  })
 it('Archive_Snippet', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      snippets.navigateToSnippets();
      snippets.archiveSnippet(RandomName1)
      snippets.navigateToArchive()
      snippets.assertion(RandomName1)
       }
       })
  })
it('Unarchive_Snippet', function (){
    cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      snippets.navigateToSnippets();
      snippets.navigateToArchive()
      snippets.unArchiveSnippet(RandomName1)
      snippets.navigateToArchive()
      snippets.assertion(RandomName1)
       }
       })
})
it('Multiple_Archive', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippets();
    snippets.multipleArchive(RandomName1,RandomName2);    
    snippets.navigateToArchive(); 
    snippets.multipleAssertion(RandomName1,RandomName2);
     }
     })
})
it('Multiple_Unarchive', function (){
   cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      snippets.navigateToSnippets();
      snippets.navigateToArchive()
      snippets.multipleUnarchive(RandomName1,RandomName2);
      snippets.navigateToArchive();
      snippets.multipleAssertion(RandomName1,RandomName2);
    }
    })
})
it('Delete', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippets();
    snippets.deleteSnippet(RandomName2);
    }
    })
})
it('Delete_Multiple', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippets();
    snippets.multipleDelete(RandomName1); 
    cy.wait(3000)  
    }
    })
})
it('Create_Team_Snippets', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
  for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippetsTeam();
    snippets.createTeamSnippet(RandomName3,json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body)
  snippets.createTeamSnippet(RandomName4,json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body)
  //cy.logout_of_CRM_Application();
  }
  })
})
it('Edit_Snippet', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippetsTeam();
    snippets.updatedSnippetDetails(RandomName3,json_TestDataData[jsonindex].Bodyedit)
   cy.wait(2000)
   }
   })
})
it('View_Snippet', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      snippets.navigateToSnippetsTeam();
      snippets.viewSnippet(RandomName3,json_TestDataData[jsonindex].Bodyedit)
  }
  })
})
it('Clone_Snippet', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      snippets.navigateToSnippetsTeam();
      snippets.cloneSnippet(RandomName3)
  }
  })
})
it('Add_Tag', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippetsTeam();
    snippets.AddTag(RandomName3,json_TestDataData[jsonindex].Tags)
    snippets.ViewTag(RandomName3,json_TestDataData[jsonindex].tag)
    }
  })
})
it('Remove_Tag', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippetsTeam();
    snippets.RemoveTag(RandomName3,json_TestDataData[jsonindex].tag)
    }
  })
})
it('Multiple_Add_Tag', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippetsTeam();
    snippets.multipleAddtag(RandomName3,RandomName4,json_TestDataData[jsonindex].Tags)
    snippets.ViewTag(RandomName3,json_TestDataData[jsonindex].tag)
    snippets.ViewTag(RandomName4,json_TestDataData[jsonindex].tag)
     }
     })
})
it('Multiple_Remove_Tag', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippetsTeam();
    snippets.multipleRemovetag(RandomName3,RandomName4,json_TestDataData[jsonindex].tag)
    }
    })
})
it('Archive_Snippet', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippetsTeam();
    snippets.archiveSnippet(RandomName3)
    snippets.navigateToArchive()
    snippets.assertion(RandomName3)
     }
     })
})
it('Unarchive_Snippet', function (){
  cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
   for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippetsTeam();
    snippets.navigateToArchive()
    snippets.unArchiveSnippet(RandomName3)
    snippets.navigateToArchive()
    snippets.assertion(RandomName3)
     }
     })
})
it('Multiple_Archive', function (){
cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
 for  (var jsonindex in json_TestDataData){
  snippets.navigateToSnippetsTeam();
  snippets.multipleArchive(RandomName3,RandomName4);    
  snippets.navigateToArchive(); 
  snippets.multipleAssertion(RandomName3,RandomName4);
   }
   })
})
it('Multiple_Unarchive', function (){
 cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
  for  (var jsonindex in json_TestDataData){
    snippets.navigateToSnippetsTeam();
    snippets.navigateToArchive(); 
    snippets.multipleUnarchive(RandomName3,RandomName4);
    snippets.navigateToArchive();
    snippets.multipleAssertion(RandomName3,RandomName4);
  }
  })
})
it('Delete', function (){
cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
 for  (var jsonindex in json_TestDataData){
  snippets.navigateToSnippetsTeam();
  snippets.deleteSnippet(RandomName4);
  }
  })
})
it('Delete_Multiple', function (){
cy.fixture('./JSON_TestData/Snippets_Testdata.json').then((json_TestDataData) => {
 for  (var jsonindex in json_TestDataData){
  snippets.navigateToSnippetsTeam();
  snippets.multipleDelete(RandomName3);   
  }
  })
})
})   