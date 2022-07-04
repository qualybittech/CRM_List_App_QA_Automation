import { Accounts } from "./components/accounts";
import { Snippets } from "./components/snippets";
import { Templates } from "./components/templates";
import { Sequences } from "./components/sequences";
import { Contacts } from "./components/contacts";
import { Util } from "./components/util";
describe('Testing Successful login in Application', () => {

  const accounts = new Accounts();
  const snippets = new Snippets();
  const templates = new Templates();
  const sequences = new Sequences();
	const contact = new Contacts();
	const util = new Util();
    const RandomEmail1 = util.generateRandomEmail('harry');
	const RandomEmail2 = util.generateRandomEmail('potter');
    const InvalidEmail = util.generateRandomEmail('invalid@');
    const RandomName = util.generateRandomNumber('Filter');
    const RandomSequences = util.generateRandomNumber('UI_Testing');
    const RandomDescription1 = util.generateRandomNumber('Email');
    const RandomDescription2 = util.generateRandomNumber('Call');
    const Firstname1 = util.generateRandomNumber('Ravi');
    const Firstname2 = util.generateRandomNumber('Kri');
    const PersonalSnippet = util.generateRandomNumber('PersonalSnippet');
    const TeamSnippet = util.generateRandomNumber('TeamSnippet')
    const PersonalTemplate = util.generateRandomNumber('PersonalTemplate');
    const TeamTemplate = util.generateRandomNumber('TeamTemplate')
    const file = 'Template_Upload.csv'
    const Random_Website = util.generateRandomWebsite('gram');
    const Fullname = util.generateRandomNumber('sai')
  

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
   /* it('Basics', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
          for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            contact.basics();
       }
       })
    })
    it('Create_Account', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
        accounts.navigateToAccounts();
        accounts.createAccount(Fullname,json_TestDataData[jsonindex].Phone,
          Random_Website,json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Address,json_TestDataData[jsonindex].City,
        json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Code,json_TestDataData[jsonindex].Country,json_TestDataData[jsonindex].Industry,json_TestDataData[jsonindex].About,
        json_TestDataData[jsonindex].Linkedin,json_TestDataData[jsonindex].Facebook,json_TestDataData[jsonindex].Twitter,
        json_TestDataData[jsonindex].No_Of_Employee);
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
          templates.createPersonalTemplate(PersonalTemplate,json_TestDataData[jsonindex].Subject,
          json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body,PersonalSnippet,TeamSnippet,file)
      }
      })
    })
    it('Create_Team_Template', function (){
      cy.fixture('./JSON_TestData/Templates_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
        templates.navigateToTemplates();
        templates.createTeamTemplate(TeamTemplate,json_TestDataData[jsonindex].Subject,
          json_TestDataData[jsonindex].Tags,json_TestDataData[jsonindex].Body,PersonalSnippet,TeamSnippet,file  )
      }
      })
    })

    it('Create_Sequences', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
          for  (var jsonindex in json_TestDataData){
            sequences.navigateToSequences();
            sequences.createSequences(RandomSequences);
            sequences.createEmailSteps(RandomDescription1,json_TestDataData[jsonindex].Email_Sub,json_TestDataData[jsonindex].Email,PersonalTemplate,TeamTemplate,PersonalSnippet,TeamSnippet,file);
            sequences.createCallSteps(RandomDescription2,json_TestDataData[jsonindex].Call);  
       }
       })
    })
    it('Create_Contact', function (){
    	cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
        contact.navigateToContacts();
	   contact.createContact(Firstname1,json_TestDataData[jsonindex].Lastname,RandomEmail1,json_TestDataData[jsonindex].Phone,Fullname,
		json_TestDataData[jsonindex].Title,json_TestDataData[jsonindex].Street,json_TestDataData[jsonindex].City,
		json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,json_TestDataData[jsonindex].Code,
		json_TestDataData[jsonindex].Linkedin,json_TestDataData[jsonindex].Facebook,json_TestDataData[jsonindex].Twitter,
		json_TestDataData[jsonindex].Tags)

	contact.createContact(Firstname2,json_TestDataData[jsonindex].Lastname,RandomEmail2,json_TestDataData[jsonindex].Phone,Fullname,
		json_TestDataData[jsonindex].Title,json_TestDataData[jsonindex].Street,json_TestDataData[jsonindex].City,
		json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,json_TestDataData[jsonindex].Code,
		json_TestDataData[jsonindex].Linkedin,json_TestDataData[jsonindex].Facebook,json_TestDataData[jsonindex].Twitter,
		json_TestDataData[jsonindex].Tags)
	//cy.logout_of_CRM_Application();
  }
})})*/
  it('Filter_Contact', function (){
    cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      contact.navigateToContacts();
    contact.filterContact(json_TestDataData[jsonindex].Lastname,json_TestDataData[jsonindex].Title,json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,
     json_TestDataData[jsonindex].Tags,RandomName)
     screenTop
    }
    })
  })
   it('Invalid_Contact', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            contact.invalidEmail(InvalidEmail,json_TestDataData[jsonindex].Firstname,json_TestDataData[jsonindex].Lastname)
         }
        })
    })
    it('Duplicate_Contact', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
          for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            contact.duplicateEmail(RandomEmail1,json_TestDataData[jsonindex].Firstname,json_TestDataData[jsonindex].Lastname)
       }
       })
    })
   it('View_Contact', function (){
         cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
           for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            //contact.viewContact(RandomEmail1,Firstname1,json_TestDataData[jsonindex].Lastname)
            //contact.viewAddTask(RandomEmail1,json_TestDataData[jsonindex].date,json_TestDataData[jsonindex].Description,Firstname1)
           // contact.viewAddToSequences(RandomEmail1,RandomSequences)
            contact.viewSendEmail(RandomEmail1,json_TestDataData[jsonindex].Email_Sub,json_TestDataData[jsonindex].Description,PersonalSnippet,TeamSnippet,PersonalTemplate,TeamTemplate,file)
        }
        })
    })
    it('Edit_Contact', function (){
      cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
       for  (var jsonindex in json_TestDataData){
          contact.navigateToContacts();
          contact.updatedContactDetails(RandomEmail1,json_TestDataData[jsonindex].Phone,json_TestDataData[jsonindex].Ecity,json_TestDataData[jsonindex].Estate,
            json_TestDataData[jsonindex].Ecountry)
          }
          })
  })
    it('Insert_Contact_Variables', function (){
      cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
       for  (var jsonindex in json_TestDataData){
          contact.navigateToContacts();
          contact.insertContactVariables(Firstname1,json_TestDataData[jsonindex].Lastname,RandomEmail1,json_TestDataData[jsonindex].Phone,
            json_TestDataData[jsonindex].Ecity,json_TestDataData[jsonindex].Estate,json_TestDataData[jsonindex].Ecountry )
          }
          })
    })
    it('Insert_Account_Variables', function (){
      cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
        for  (var jsonindex in json_TestDataData){
          contact.navigateToContacts();
          contact.insertAccountVariables(RandomEmail1,Fullname,json_TestDataData[jsonindex].Address,json_TestDataData[jsonindex].Phone,
            Random_Website,json_TestDataData[jsonindex].No_Of_Employee,json_TestDataData[jsonindex].Linkedin,json_TestDataData[jsonindex].Twitter,json_TestDataData[jsonindex].Facebook,json_TestDataData[jsonindex].Industry)
          
          }
          })
    })
   
    it('Archive_Contact', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            contact.archiveContact(RandomEmail1)
            contact.navigateToArchive()
            contact.assertion(RandomEmail1)
           }
           })
    })
    it('Unarchive_Contact', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            contact.navigateToArchive()
            contact.unArchiveContact(RandomEmail1)
	        contact.navigateToArchive()
            contact.assertion(RandomEmail1)
           }
           })
    })
    it('Add_Tag', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            contact.AddTag(RandomEmail1,json_TestDataData[jsonindex].Tags)
            contact.ViewTag(RandomEmail1,json_TestDataData[jsonindex].tags)
           }
           })
    })
	it('Remove_Tag', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            contact.RemoveTag(RandomEmail1,json_TestDataData[jsonindex].tags)
           }
           })
    })
    it('Multiple_Add_Tag', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            contact.multipleAddtag(RandomEmail1,RandomEmail2,json_TestDataData[jsonindex].Tags)
            contact.ViewTag(RandomEmail1,json_TestDataData[jsonindex].tags)
           }
           })
    })
    it('Multiple_Remove_Tag', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            contact.multipleRemovetag(RandomEmail1,RandomEmail2,json_TestDataData[jsonindex].tags)
           }
           })
    })
    it('Multiple_Archive', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            contact.multipleArchive(RandomEmail1,RandomEmail2);    
            contact.navigateToArchive(); 
            contact.multipleAssertion(RandomEmail1,RandomEmail2);
           }
           })
    })
    it('Multiple_Unarchive', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            contact.navigateToArchive()
            contact.multipleUnarchive(RandomEmail1,RandomEmail2);
            contact.navigateToArchive();
            contact.multipleAssertion(RandomEmail1,RandomEmail2);
           }
           })
    })
   
    
    it('Delete', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            contact.deleteContact(RandomEmail2);
           }
           })
    })
    it('Delete_Multiple', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.navigateToContacts();
            contact.multipleDelete(RandomEmail1);   
           }
           })
    })
    it('Upload_Contact', function (){
      cy.fixture('./CSV_TestData/Contacts_Testdata.csv').then((CSV_TestData) => {
       //for  (var jsonindex in json_TestDataData){
          contact.navigateToContacts();
       contact.uploadContact('Contact_Upload.csv')
        // }
         })
  })
})