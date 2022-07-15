import { Contacts } from "./components/contacts";
import { Accounts } from "./components/accounts";
import { Util } from "./components/util";

describe('Testing Successful login in Application', () => {

  const contacts = new Contacts();
	const accounts = new Accounts();
  const util = new Util();
  const Random_Website1 = util.generateRandomWebsite('netflix');
  const Random_Website2 = util.generateRandomWebsite('gram');
  const Fullname = util.generateRandomNumber('sai')
  const RandomName = util.generateRandomNumber('Filter');
  const RandomEmail1 = util.generateRandomEmail('harry');

    
	before(function() {
      cy.exec("npm run refresh_Json_Test_data");	  
    })

    beforeEach(()=>{
      cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
        for  (var jsonindex in json_TestDataData){
          cy.login_with_Userkey_from_Testdata_to_CRM_Application(json_TestDataData[jsonindex].userkey);
          cy.asserting_As_Xpath_Present('LandingPage_loginSuccessful_Message');
          accounts.navigateToAccounts();

     }
     })
  })
       it('Create_Account', function (){
        cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
        for  (var jsonindex in json_TestDataData){
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
    it('Filter_Account', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
        for  (var jsonindex in json_TestDataData){
         accounts.filterAccount(json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].No_Of_Employee,
           json_TestDataData[jsonindex].Industry,json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,RandomName,json_TestDataData[jsonindex].ENo_Of_Employee)
         screenTop
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
    it('Creating_Existing_Account', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
        for  (var jsonindex in json_TestDataData){
          accounts.existingWebsite(json_TestDataData[jsonindex].Fullname,json_TestDataData[jsonindex].Phone,Random_Website1)
     }
     })
    })
    it('View_Account', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
        for  (var jsonindex in json_TestDataData){
          accounts.searchAccount(Fullname)
          cy.wait(2000)
          accounts.viewAccount(Random_Website1,Fullname,json_TestDataData[jsonindex].State)
          accounts.viewAddContact(Random_Website1)
          accounts.createContact(json_TestDataData[jsonindex].Firstname,json_TestDataData[jsonindex].Lastname,RandomEmail1,
            json_TestDataData[jsonindex].Title,json_TestDataData[jsonindex].Street,json_TestDataData[jsonindex].City,
            json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,json_TestDataData[jsonindex].Code,
            json_TestDataData[jsonindex].Linkedin,json_TestDataData[jsonindex].Facebook,json_TestDataData[jsonindex].Twitter,
            json_TestDataData[jsonindex].Tags,Fullname)
     }
     })
    })
    it('Edit_Account', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
       for  (var jsonindex in json_TestDataData){
        accounts.searchAccount(Fullname)
        accounts.updatedAccountDetails(Random_Website1,json_TestDataData[jsonindex].Phoneedit)
        cy.wait(2000)
       }
       })
    })
    it('Archive_Account', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
       for  (var jsonindex in json_TestDataData){
        accounts.searchAccount(Fullname)
          accounts.archiveAccount(Random_Website1)
          accounts.navigateToArchive()
          accounts.assertion(Random_Website1)
         }
         })
    })
  it('Unarchive_Account', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
       for  (var jsonindex in json_TestDataData){
        accounts.navigateToArchive()
        accounts.searchAccount(Fullname)
        accounts.unArchiveAccount(Random_Website1)
        accounts.navigateToArchive()
        accounts.assertion(Random_Website1)
         }
         })
  })
  it('Multiple_Archive', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      accounts.searchAccount(Fullname)
        accounts.multipleArchive(Random_Website1,Random_Website2);    
        accounts.navigateToArchive(); 
        accounts.multipleAssertion(Random_Website1,Random_Website2);
       }
       })
  })
  it('Multiple_Unarchive', function (){
     cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
        accounts.navigateToArchive()
        accounts.searchAccount(Fullname)
        accounts.multipleUnarchive(Random_Website1,Random_Website2);
        accounts.navigateToArchive();
        accounts.multipleAssertion(Random_Website1,Random_Website2);
      }
      })
  })
  it('Add_Tag', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      accounts.searchAccount(Fullname)
      accounts.AddTag(Random_Website1,json_TestDataData[jsonindex].Tags)
      accounts.ViewTag(Random_Website1,json_TestDataData[jsonindex].tags)
      }
    })
  })
  it('Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      accounts.searchAccount(Fullname)
      accounts.RemoveTag(Random_Website1,json_TestDataData[jsonindex].tags)
      }
    })
  })
  it('Multiple_Add_Tag', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      accounts.searchAccount(Fullname)
      accounts.multipleAddtag(Random_Website1,Random_Website2,json_TestDataData[jsonindex].Tags)
      accounts.ViewTag(Random_Website1,json_TestDataData[jsonindex].tags)
       }
       })
  })
  it('Multiple_Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      accounts.searchAccount(Fullname)
      accounts.multipleRemovetag(Random_Website1,Random_Website2,json_TestDataData[jsonindex].tags)
      }
      })
  })
  it('Filter_Account', function (){
         cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
           for  (var jsonindex in json_TestDataData){
            accounts.filterAccount(json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].No_Of_Employee,
              json_TestDataData[jsonindex].Industry,json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,RandomName)
            screenTop
        }
        })
  })
  it('Delete', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      accounts.searchAccount(Fullname)
      accounts.deleteAccount(Random_Website2);
      }
      })
  })
  it('Delete_Multiple', function (){
    cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      accounts.searchAccount(Fullname)
      accounts.multipleDelete(Random_Website1);   
      }
      })
  })
})