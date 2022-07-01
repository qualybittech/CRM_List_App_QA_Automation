import { Contacts } from "./components/contacts";
import { Tasks } from "./components/tasks";
import { Util } from "./components/util";

describe('Testing Successful login in Application', () => {

  const contacts = new Contacts();
	const tasks = new Tasks();
	const util = new Util();
  const RandomDescription1 = util.generateRandomNumber('01Description');
  const RandomDescription2 = util.generateRandomNumber('02Description');
  const RandomDescription3 = util.generateRandomNumber('03Description');
  const RandomDescription4 = util.generateRandomNumber('04Description');
  const RandomDescription5 = util.generateRandomNumber('05Description');
  const RandomDescription6 = util.generateRandomNumber('06Description');
  const RandomDescription7 = util.generateRandomNumber('07Description');
  const RandomDescription8 = util.generateRandomNumber('08Description');
  const RandomName = util.generateRandomNumber('Filter');
  const Lastname1 = util.generateRandomNumber('kris');
  const Firstname1 = util.generateRandomNumber('Sai');
  const RandomEmail1 = util.generateRandomEmail('harry');
  const Lastname2 = util.generateRandomNumber('kris');
  const Firstname2 = util.generateRandomNumber('Sai');
  const RandomEmail2 = util.generateRandomEmail('harry');


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
  it('Create_Contact', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      contacts.navigateToContacts();
    contacts.createContact(Firstname1,Lastname1,RandomEmail1,Firstname1,json_TestDataData[jsonindex].Title,json_TestDataData[jsonindex].Street,json_TestDataData[jsonindex].City,
      json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,json_TestDataData[jsonindex].Code,
      json_TestDataData[jsonindex].Linkedin,json_TestDataData[jsonindex].Facebook,json_TestDataData[jsonindex].Twitter,
      json_TestDataData[jsonindex].Tags)
      contacts.createContact(Firstname2,Lastname1,RandomEmail2,Firstname2,json_TestDataData[jsonindex].Title,json_TestDataData[jsonindex].Street,json_TestDataData[jsonindex].City,
        json_TestDataData[jsonindex].State,json_TestDataData[jsonindex].Country,json_TestDataData[jsonindex].Code,
        json_TestDataData[jsonindex].Linkedin,json_TestDataData[jsonindex].Facebook,json_TestDataData[jsonindex].Twitter,
        json_TestDataData[jsonindex].Tags)
    
    }
    })
  })
   it('Create_Tasks', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
    tasks.navigateToTasks();
    tasks.createNoteTask(Lastname1,Firstname1,json_TestDataData[jsonindex].date,RandomDescription1)
    //tasks.createNoteTask(Lastname1,Firstname2,json_TestDataData[jsonindex].date,RandomDescription2)
   tasks.assertion(RandomDescription1)
   tasks.createCallTask(Lastname1,Firstname1,json_TestDataData[jsonindex].date,RandomDescription2)
    tasks.assertion(RandomDescription2)
    //tasks.createCallTask(Lastname1,Firstname1,json_TestDataData[jsonindex].date,RandomDescription3)
    //tasks.assertion(RandomDescription3)
    tasks.createEmailTask(Lastname1,Firstname1,json_TestDataData[jsonindex].date,RandomDescription4)
    tasks.assertion(RandomDescription4)
    tasks.createLinkedinTask(Lastname1,Firstname1,json_TestDataData[jsonindex].date,RandomDescription5)
    tasks.assertion(RandomDescription5)
    tasks.createTwitterTask(Lastname1,Firstname1,json_TestDataData[jsonindex].date,RandomDescription6)
    tasks.assertion(RandomDescription6)
    tasks.createMeetingTask(Lastname1,Firstname1,json_TestDataData[jsonindex].date,RandomDescription7)
    tasks.assertion(RandomDescription7)
    tasks.createSmsTask(Lastname1,Firstname1,json_TestDataData[jsonindex].date,RandomDescription8)
    tasks.assertion(RandomDescription8)

    //cy.logout_of_CRM_Application();
    }
    })
  })
  it('Edit_Tasks', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      //tasks.sort();
      //tasks.searchTask()
      tasks.navigateToTasks();
      tasks.updatedTaskDetails(Lastname1,RandomDescription2,json_TestDataData[jsonindex].editdate)
      }
      })
  })
  it('View_Tasks', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
      
        tasks.navigateToTasks();
        tasks.viewTask(Firstname1,Lastname1,json_TestDataData[jsonindex].viewdate)
    }
    })
  })
   it('Archive_Tasks', function (){
      cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
       for  (var jsonindex in json_TestDataData){
        tasks.navigateToTasks();
        tasks.archiveTask(RandomDescription1)
        tasks.navigateToArchive()
        tasks.assertion(RandomDescription1)
         }
         })
    })
  it('Unarchive_Tasks', function (){
      cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
       for  (var jsonindex in json_TestDataData){
        tasks.navigateToTasks();
        tasks.navigateToArchive()
        tasks.unArchiveTask(RandomDescription1)
        tasks.navigateToArchive()
        tasks.assertion(RandomDescription1)
         }
         })
  })
  it('Multiple_Archive', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.searchTask(Lastname1)
      tasks.multipleArchive(RandomDescription1,RandomDescription2);    
      tasks.navigateToArchive(); 
      tasks.multipleAssertion(RandomDescription1,RandomDescription2);
       }
       })
  })
  it('Multiple_Unarchive', function (){
     cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
        tasks.navigateToTasks();
        tasks.navigateToArchive()
        tasks.searchTask(Lastname1)
        tasks.multipleUnarchive(RandomDescription1,RandomDescription2);
        tasks.navigateToArchive();
        tasks.multipleAssertion(RandomDescription1,RandomDescription2);
      }
      })
  })
  it('Add_Tag', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.searchTask(Lastname1)
      tasks.AddTag(RandomDescription1,json_TestDataData[jsonindex].Tags)
      tasks.ViewTag(RandomDescription1,json_TestDataData[jsonindex].tags)
      }
    })
  })
  it('Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.searchTask(Lastname1)
      tasks.RemoveTag(RandomDescription1,json_TestDataData[jsonindex].tags)
      }
    })
  })
  it('Multiple_Add_Tag', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.searchTask(Lastname1)
      tasks.multipleAddtag(RandomDescription1,RandomDescription2,json_TestDataData[jsonindex].Tags)
      tasks.ViewTag(RandomDescription1,json_TestDataData[jsonindex].tags)
       }
       })
  })
  it('Multiple_Remove_Tag', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.searchTask(Lastname1)
      tasks.multipleRemovetag(RandomDescription1,RandomDescription2,json_TestDataData[jsonindex].tags)
      }
      })
  })
  it('Complete_Task', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.searchTask(Lastname1)
      tasks.completeTask(RandomDescription1)
      }
      })
  })
  it('Notcomplete_Task', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.searchTask(Lastname1)
      tasks.notCompleteTask(RandomDescription1)
      }
      })
  })
  it('Skip_Task', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.searchTask(Lastname1)
      tasks.skipTask(RandomDescription1)
      }
      })
  })
  it('Undoskip_Task', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.searchTask(Lastname1)
      tasks.undoSkipTask(RandomDescription1)
      }
      })
  })
  
  /*it('Filter_Task', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
       tasks.filterTask(json_TestDataData[jsonindex].Type,json_TestDataData[jsonindex].date,json_TestDataData[jsonindex].tags,json_TestDataData[jsonindex].Status,json_TestDataData[jsonindex].Createdtype,RandomName)
       screenTop
   }
   })
  })*/
  it('Delete', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.searchTask(Lastname1)
      tasks.deleteTask(RandomDescription2);
      }
      })
  })
  it('Search_Task', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
      for  (var jsonindex in json_TestDataData){
        tasks.navigateToTasks();
       screenTop
   }
   })
  })
  it('Delete_Multiple', function (){
    cy.fixture('./JSON_TestData/Tasks_Testdata.json').then((json_TestDataData) => {
     for  (var jsonindex in json_TestDataData){
      tasks.navigateToTasks();
      tasks.multipleDelete(RandomDescription1);   
      }
      })
  })
})   