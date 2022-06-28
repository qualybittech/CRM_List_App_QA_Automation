import { Sequences } from "./components/sequences";
import { Snippets } from "./components/snippets";
import { Templates } from "./components/templates";
import { Tasks } from "./components/tasks";
import { Contacts } from "./components/contacts";
import { Util } from "./components/util";

describe('Testing Successful login in Application', () => {

  const tasks = new Tasks();
  const snippets = new Snippets();
  const templates = new Templates();
  const contacts = new Contacts();
	const sequences = new Sequences();
	const util = new Util();
  const RandomSequences = util.generateRandomNumber('UI_Testing');
  const ERandomSequences = util.generateRandomNumber('E_UI_Testing');
  const RandomDescription1 = util.generateRandomNumber('Email');
  const RandomDescription2 = util.generateRandomNumber('Call');
  const RandomDescription3 = util.generateRandomNumber('Linkedin');
  const RandomDescription4 = util.generateRandomNumber('Sms');
  const RandomDescription5 = util.generateRandomNumber('Twitter');
  const RandomDescription6 = util.generateRandomNumber('Whatsapp');
  const RandomDescription7 = util.generateRandomNumber('Meeting');
  const RandomDescriptionAdded = util.generateRandomNumber('Added');
  const ERandomDescriptionAdded = util.generateRandomNumber('EAdded');
  const EDescription1 = util.generateRandomNumber('EEmail');
  const EDescription2 = util.generateRandomNumber('ECall');
  const EDescription3 = util.generateRandomNumber('ELinkedin');
  const EDescription4 = util.generateRandomNumber('ESms');
  const EDescription5 = util.generateRandomNumber('ETwitter');
  const EDescription6 = util.generateRandomNumber('EWhatsapp');
  const EDescription7 = util.generateRandomNumber('EMeeting');
  const RandomEmail1 = util.generateRandomEmail('harry');
	const RandomEmail2 = util.generateRandomEmail('potter');
  const Lastname1 = util.generateRandomNumber('krishna');
  const Lastname2 = util.generateRandomNumber('krishna');
  const PersonalSnippet = util.generateRandomNumber('PersonalSnippet');
  const TeamSnippet = util.generateRandomNumber('TeamSnippet')
  const PersonalTemplate = util.generateRandomNumber('PersonalTemplate');
  const TeamTemplate = util.generateRandomNumber('TeamTemplate')
  const file = 'Seq_Contact_Upload.csv'


  const RandomName = util.generateRandomNumber('Filter');

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
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
    contacts.navigateToContacts();
    contacts.createContact(json_TestDataData[jsonindex].Firstname,Lastname1,RandomEmail1,Lastname1,json_TestDataData[jsonindex].Title,json_TestDataData[jsonindex].Street,json_TestDataData[jsonindex].City,
      json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,json_TestDataData[jsonindex].Code,
      json_TestDataData[jsonindex].Linkedin,json_TestDataData[jsonindex].Facebook,json_TestDataData[jsonindex].Twitter,
      json_TestDataData[jsonindex].Tags)
    contacts.createContact(json_TestDataData[jsonindex].Firstname,Lastname2,RandomEmail2,Lastname1,json_TestDataData[jsonindex].Title,json_TestDataData[jsonindex].Street,json_TestDataData[jsonindex].City,
      json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,json_TestDataData[jsonindex].Code,
      json_TestDataData[jsonindex].Linkedin,json_TestDataData[jsonindex].Facebook,json_TestDataData[jsonindex].Twitter,
      json_TestDataData[jsonindex].Tags)
    //cy.logout_of_CRM_Application();
    }
    })
  })
  it('Create_Steps', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.navigateToSequences();
      sequences.createSequences(RandomSequences);
      sequences.createEmailSteps(RandomDescription1,json_TestDataData[jsonindex].Email_Sub,json_TestDataData[jsonindex].Email,PersonalTemplate,TeamTemplate,PersonalSnippet,TeamSnippet,file);
    sequences.createCallSteps(RandomDescription2,json_TestDataData[jsonindex].Call);
    sequences.createLinkedinSteps(RandomDescription3,json_TestDataData[jsonindex].Linkedintt,json_TestDataData[jsonindex].Linkedin);
    sequences.createSmsSteps(RandomDescription4,json_TestDataData[jsonindex].Sms);
    sequences.createTwitterSteps(RandomDescription5,json_TestDataData[jsonindex].Twittertt,json_TestDataData[jsonindex].Twitter);
    sequences.createWhatsappSteps(RandomDescription6,json_TestDataData[jsonindex].Whatsapp);
    sequences.createMeetingSteps(RandomDescription7,json_TestDataData[jsonindex].Meeting);      
    }
    })
  })
  it('Edit_Steps', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.navigateToSequences();
      sequences.selectSequences(RandomSequences);
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
  
  it('Activate_Steps', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.navigateToSequences();
       sequences.activateSequences(RandomSequences);
    }
    })
  })
 /* 
 it('Select_Steps', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.selectSequences(RandomSequences);
    }
    })
  })*/
  it('Assign_Contact', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.navigateToSequences();
      sequences.selectSequences(RandomSequences);
      sequences.assignContacts(json_TestDataData[jsonindex].Firstname,Lastname1);
      sequences.uploadContact(file);
 // Sequence Email Jobs=> method=GET; NOBODY NO PARAMS;  URL = https://sales-tmp-server.herokuapp.com/automation/sequenceEmailJobs;
 //cy.request(GET, 'https://sales-tmp-server.herokuapp.com/automation/sequenceEmailJobs)
    }
    })
  })
  it('Task_Contact', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.searchTask(Lastname1)
      sequences.taskSequencesPresent(Lastname1,RandomSequences,EDescription2,EDescription3,EDescription4,
  EDescription5,EDescription6,EDescription7 )
    }
    })
  })
  it('Complete_Task', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.searchTask(Lastname1)
      sequences.completeTaskSequences(EDescription3,EDescription2,RandomSequences,json_TestDataData[jsonindex].Firstname,Lastname1)
    }
    })
  })
  it('Notcomplete_Task', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.searchTask(Lastname1)
      sequences.notCompleteTaskSequences(EDescription3,EDescription2,RandomSequences,json_TestDataData[jsonindex].Firstname,Lastname1)
    }
    })
  })
  it('Outbox', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      sequences.outBox(RandomEmail1,RandomSequences)
    }
    })
  })
  it('Add&Edit after task created',function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.navigateToSequences();
      sequences.selectSequences(RandomSequences);
      sequences.createSmsSteps(RandomDescriptionAdded,json_TestDataData[jsonindex].Sms);
      sequences.editSmsSteps(RandomDescriptionAdded,json_TestDataData[jsonindex].Sms,ERandomDescriptionAdded);
      sequences.viewContactSeq(json_TestDataData[jsonindex].Firstname,Lastname1,RandomSequences)

    }
    })
  })
  it('Edit_Old_Steps', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.navigateToSequences();
      sequences.selectSequences(RandomSequences);
    sequences.editCallSteps(EDescription2,json_TestDataData[jsonindex].Call,EDescription2);
    sequences.editLinkedinSteps(EDescription3,json_TestDataData[jsonindex].Linkedin,EDescription3);
    sequences.editSmsSteps(EDescription4,json_TestDataData[jsonindex].Sms,EDescription4);
    sequences.editTwitterSteps(EDescription5,json_TestDataData[jsonindex].Twitter,EDescription5);
    sequences.editWhatsappSteps(EDescription6,json_TestDataData[jsonindex].Whatsapp,EDescription6);
    sequences.editMeetingSteps(EDescription7,json_TestDataData[jsonindex].Meeting,EDescription7);
    }
    })
  })
  it('Remove_Contact', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.navigateToSequences();
      sequences.selectSequences(RandomSequences);
   sequences.removeContacts(json_TestDataData[jsonindex].Firstname,Lastname1);
    }
    })
  })
  it('Deactivate_Steps', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.navigateToSequences();
      sequences.deactivateSequences(RandomSequences);
      sequences.selectSequences(RandomSequences);
      sequences.assignContacts(json_TestDataData[jsonindex].Firstname,Lastname2);
      tasks.navigateToTasks();
      tasks.searchTask(Lastname2)
      sequences.taskSequencesAbsent(Lastname2,RandomSequences,EDescription2,EDescription3,EDescription4,
      EDescription5,EDescription6,EDescription7 )
    }
    })
  })
  /*it('Edit_Sequences', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
    sequences.editSequences(ERandomSequences);
    }
    })
  })*/

  it('Settings_Sequences', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.navigateToSequences();
      sequences.selectSequences(RandomSequences);
  sequences.settingsSequences(json_TestDataData[jsonindex].Time);
    }
    })
  })
  it('Clone_Sequences', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.navigateToSequences();
      sequences.cloneSequences(RandomSequences);
    }
    })
  })
  it('Delete_Steps', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.navigateToSequences();
      sequences.selectSequences(RandomSequences);
       sequences.deleteEmailSteps(json_TestDataData[jsonindex].Email_Sub,json_TestDataData[jsonindex].Email);
      sequences.deleteCallSteps(EDescription2,json_TestDataData[jsonindex].Call);  
    }
    })
  })
  it('Delete_Sequences', function (){
    cy.fixture('./JSON_TestData/Sequences_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      sequences.navigateToSequences();
      sequences.deleteSequences(RandomSequences);
    }
    })
  })
})