import { Sequences } from "./components/sequences";
import { Contacts } from "./components/contacts";
import { Util } from "./components/util";
describe('Testing Successful login in Application', () => {

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
    const Firstname2 = util.generateRandomNumber('Krish');


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
    /*it('Basics', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
          for  (var jsonindex in json_TestDataData){
           contact.basics();
       }
       })
    })*/
/*	it('Create_Contact', function (){
    	cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
       // sequences.navigateToSequences();
       // sequences.createSequences(RandomSequences);
       // sequences.createEmailSteps(RandomDescription1,json_TestDataData[jsonindex].Email_Sub,json_TestDataData[jsonindex].Email);
       // sequences.createCallSteps(RandomDescription2,json_TestDataData[jsonindex].Call);    
        contact.navigateToContacts();
	   contact.createContact(Firstname1,json_TestDataData[jsonindex].Lastname,RandomEmail1,
		json_TestDataData[jsonindex].Title,json_TestDataData[jsonindex].Street,json_TestDataData[jsonindex].City,
		json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,json_TestDataData[jsonindex].Code,
		json_TestDataData[jsonindex].Linkedin,json_TestDataData[jsonindex].Facebook,json_TestDataData[jsonindex].Twitter,
		json_TestDataData[jsonindex].Tags)

	contact.createContact(Firstname2,json_TestDataData[jsonindex].Lastname,RandomEmail2,
		json_TestDataData[jsonindex].Title,json_TestDataData[jsonindex].Street,json_TestDataData[jsonindex].City,
		json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,json_TestDataData[jsonindex].Code,
		json_TestDataData[jsonindex].Linkedin,json_TestDataData[jsonindex].Facebook,json_TestDataData[jsonindex].Twitter,
		json_TestDataData[jsonindex].Tags)
	//cy.logout_of_CRM_Application();
  }
})})
   it('Invalid_Contact', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
           contact.invalidEmail(InvalidEmail,json_TestDataData[jsonindex].Firstname,json_TestDataData[jsonindex].Lastname)
         }
        })
    })
    it('Duplicate_Contact', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
          for  (var jsonindex in json_TestDataData){
           contact.duplicateEmail(RandomEmail1,json_TestDataData[jsonindex].Firstname,json_TestDataData[jsonindex].Lastname)
       }
       })
    })
   it('View_Contact', function (){
         cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
           for  (var jsonindex in json_TestDataData){
            contact.viewContact(RandomEmail1,Firstname1,json_TestDataData[jsonindex].Lastname)
            contact.viewAddTask(RandomEmail1,json_TestDataData[jsonindex].date,json_TestDataData[jsonindex].Description,Firstname1)
            contact.viewAddToSequences(RandomEmail1,RandomSequences)
            contact.viewSendEmail(RandomEmail1,json_TestDataData[jsonindex].Email_Sub,json_TestDataData[jsonindex].Description)
        }
        })
    })
   it('Edit_Contact', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
        contact.updatedContactDetails(RandomEmail1,json_TestDataData[jsonindex].Phone)
            }
            })
    })
    it('Archive_Contact', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.archiveContact(RandomEmail1)
            contact.navigateToArchive()
            contact.assertion(RandomEmail1)
           }
           })
    })
    it('Unarchive_Contact', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
	        contact.unArchiveContact(RandomEmail1)
	        contact.navigateToArchive()
            contact.assertion(RandomEmail1)
           }
           })
    })
    it('Add_Tag', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.AddTag(RandomEmail1,json_TestDataData[jsonindex].Tags)
            contact.ViewTag(RandomEmail1,json_TestDataData[jsonindex].tags)
           }
           })
    })
	it('Remove_Tag', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.RemoveTag(RandomEmail1,json_TestDataData[jsonindex].tags)
           }
           })
    })
    it('Multiple_Add_Tag', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.multipleAddtag(RandomEmail1,RandomEmail2,json_TestDataData[jsonindex].Tags)
            contact.ViewTag(RandomEmail1,json_TestDataData[jsonindex].tags)
           }
           })
    })
    it('Multiple_Remove_Tag', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.multipleRemovetag(RandomEmail1,RandomEmail2,json_TestDataData[jsonindex].tags)
           }
           })
    })
    it('Multiple_Archive', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.multipleArchive(RandomEmail1,RandomEmail2);    
            contact.navigateToArchive(); 
            contact.multipleAssertion(RandomEmail1,RandomEmail2);
           }
           })
    })
    it('Multiple_Unarchive', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.multipleUnarchive(RandomEmail1,RandomEmail2);
            contact.navigateToArchive();
            contact.multipleAssertion(RandomEmail1,RandomEmail2);
           }
           })
    })*/
    it('Upload_Contact', function (){
        cy.fixture('./CSV_TestData/Contacts_Testdata.csv').then((CSV_TestData) => {
         //for  (var jsonindex in json_TestDataData){
           contact.navigateToContacts();
         contact.uploadContact('Contact_Upload.csv')
          // }
           })
    })
    /*it('Filter_Contact', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
          for  (var jsonindex in json_TestDataData){
        contact.filterContact(json_TestDataData[jsonindex].Lastname,json_TestDataData[jsonindex].Title,json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,
           json_TestDataData[jsonindex].Tags,RandomName)
           screenTop
       }
       })
   })*/
    it('Delete', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.deleteContact(RandomEmail2);
           }
           })
    })
    it('Delete_Multiple', function (){
        cy.fixture('./JSON_TestData/Contacts_Testdata.json').then((json_TestDataData) => {
         for  (var jsonindex in json_TestDataData){
            contact.multipleDelete(RandomEmail1);   
           }
           })
    })

})