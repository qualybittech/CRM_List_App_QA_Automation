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
})