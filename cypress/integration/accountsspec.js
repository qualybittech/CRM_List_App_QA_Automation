import { Accounts } from "./components/accounts";
import { Util } from "./components/util";

describe('Testing Successful login in Application', () => {

	const accounts = new Accounts();
  const util = new Util();
  const Random_Website1 = util.generateRandomWebsite('netflix');
  const Random_Website2 = util.generateRandomWebsite('gram');
  const Fullname = util.generateRandomNumber('sai')
  const RandomName = util.generateRandomNumber('Filter');
    
	before(function() {
      cy.exec("npm run refresh_Json_Test_data");	  
    })
    it('Login', function (){
        cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
          for  (var jsonindex in json_TestDataData){
            cy.login_with_Userkey_from_Testdata_to_CRM_Application(json_TestDataData[jsonindex].userkey);
            cy.asserting_As_Xpath_Present('LandingPage_loginSuccessful_Message');

        }
       }) 
      })
       it('Create_Account', function (){
        cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
        for  (var jsonindex in json_TestDataData){
          accounts.navigateToAccounts();
          accounts.createAccount(Fullname,json_TestDataData[jsonindex].Phone,
            Random_Website1,json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Address,json_TestDataData[jsonindex].City,
          json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Code,json_TestDataData[jsonindex].Country,json_TestDataData[jsonindex].Industry,json_TestDataData[jsonindex].About,
          json_TestDataData[jsonindex].Linkedin,json_TestDataData[jsonindex].Facebook,json_TestDataData[jsonindex].Twitter,
          json_TestDataData[jsonindex].No_Of_Employee);
        accounts.createAccount(Fullname,json_TestDataData[jsonindex].Phone,
          Random_Website2,json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Address,json_TestDataData[jsonindex].City,
        json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Code,json_TestDataData[jsonindex].Country,json_TestDataData[jsonindex].Industry,json_TestDataData[jsonindex].About,
        json_TestDataData[jsonindex].Linkedin,json_TestDataData[jsonindex].Facebook,json_TestDataData[jsonindex].Twitter,
        json_TestDataData[jsonindex].No_Of_Employee);
      }
     })
    })
    it('Search_Account', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
        for  (var jsonindex in json_TestDataData){
          accounts.searchAccount(Fullname)
     }
     })
    })
   it('Invalid_Account', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
        for  (var jsonindex in json_TestDataData){
          accounts.invalidWebsite(json_TestDataData[jsonindex].Fullname,json_TestDataData[jsonindex].Phone,json_TestDataData[jsonindex].Fullname)
     }
     })
    })
    it('View_Account', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
        for  (var jsonindex in json_TestDataData){
          accounts.viewAccount(Random_Website1,Fullname,json_TestDataData[jsonindex].State)
     }
     })
    })
    it('Edit_Account', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
       for  (var jsonindex in json_TestDataData){
        accounts.updatedAccountDetails(Random_Website1,json_TestDataData[jsonindex].Phoneedit)
        cy.wait(2000)
       }
       })
    })
    it('Archive_Account', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
       for  (var jsonindex in json_TestDataData){
          accounts.archiveAccount(Random_Website1)
          accounts.navigateToArchive()
          accounts.assertion(Random_Website1)
         }
         })
    })
  it('Unarchive_Account', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
       for  (var jsonindex in json_TestDataData){
        accounts.unArchiveAccount(Random_Website1)
        accounts.navigateToArchive()
        accounts.assertion(Random_Website1)
         }
         })
  })
  it('Multiple_Archive', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
        accounts.multipleArchive(Random_Website1,Random_Website2);    
        accounts.navigateToArchive(); 
        accounts.multipleAssertion(Random_Website1,Random_Website2);
       }
       })
  })
  it('Multiple_Unarchive', function (){
     cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
        accounts.multipleUnarchive(Random_Website1,Random_Website2);
        accounts.navigateToArchive();
        accounts.multipleAssertion(Random_Website1,Random_Website2);
      }
      })
  })
  it('Add_Tag', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      accounts.AddTag(Random_Website1,json_TestDataData[jsonindex].Tags)
      accounts.ViewTag(Random_Website1,json_TestDataData[jsonindex].tags)
      }
    })
  })
  it('Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      accounts.RemoveTag(Random_Website1,json_TestDataData[jsonindex].tags)
      }
    })
  })
  it('Multiple_Add_Tag', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      accounts.multipleAddtag(Random_Website1,Random_Website2,json_TestDataData[jsonindex].Tags)
      accounts.ViewTag(Random_Website1,json_TestDataData[jsonindex].tags)
       }
       })
  })
  it('Multiple_Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      accounts.multipleRemovetag(Random_Website1,Random_Website2,json_TestDataData[jsonindex].tags)
      }
      })
  })
  /*it('Filter_Account', function (){
         cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
           for  (var jsonindex in json_TestDataData){
            accounts.filterAccount(json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].No_Of_Employee,
              json_TestDataData[jsonindex].Industry,json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,RandomName)
            screenTop
        }
        })
  })*/
  it('Delete', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      accounts.deleteAccount(Random_Website2);
      }
      })
  })
  it('Delete_Multiple', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      accounts.multipleDelete(Random_Website1);   
      }
      })
  })
})