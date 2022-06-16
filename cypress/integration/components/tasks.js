export class Tasks{

    navigateToTasks(){
        //cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
        cy.element_Click_based_on_inputXpath('Main_section_Tasks_Link');

    }
    createNoteTask(Contact,Date,Description){
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Button');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Note');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Assign_Contact',Contact);
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Contact','#text#',Contact);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //cy.element_Click_based_on_inputXpath('Tasks_Section_Select_Contact');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Date',Date);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Add');  
        cy.asserting_As_Xpath_Present('Taskpage_Taskadded_Message'); 
    }
    createCallTask(Contact,Date,Description){
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Button');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Call');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Assign_Contact',Contact);
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Contact','#text#',Contact);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
       // cy.element_Click_based_on_inputXpath('Tasks_Section_Select_Contact');
       cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Date',Date);
        //cy.element_Click_based_on_inputXpath('Tasks_Section_Date');
        //cy.element_Click_based_on_inputXpath('Tasks_Section_Select_Date');
        //cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Date','#text#',Date);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Add');  
        cy.asserting_As_Xpath_Present('Taskpage_Taskadded_Message'); 
    }
    createEmailTask(Contact,Date,Description){
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Button');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Email');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Assign_Contact',Contact);
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Contact','#text#',Contact);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
       //cy.element_Click_based_on_inputXpath('Tasks_Section_Select_Contact');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Date');
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Date','#text#',Date);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Add');  
        cy.asserting_As_Xpath_Present('Taskpage_Taskadded_Message'); 
    }
    createLinkedinTask(Contact,Date,Description){
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Button');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Linkedin');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Assign_Contact',Contact);
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Contact','#text#',Contact);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //cy.element_Click_based_on_inputXpath('Tasks_Section_Select_Contact');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Date');
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Date','#text#',Date);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Add');  
        cy.asserting_As_Xpath_Present('Taskpage_Taskadded_Message'); 
    }
    createTwitterTask(Contact,Date,Description){
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Button');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Twitter');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Assign_Contact',Contact);
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Contact','#text#',Contact);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
       //cy.element_Click_based_on_inputXpath('Tasks_Section_Select_Contact');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Date');
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Date','#text#',Date);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Add');  
        cy.asserting_As_Xpath_Present('Taskpage_Taskadded_Message'); 
    }
    createWhatsappTask(Contact,Date,Description){
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Button');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Whatsapp');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Assign_Contact',Contact);
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Contact','#text#',Contact);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //cy.element_Click_based_on_inputXpath('Tasks_Section_Select_Contact');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Date');
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Date','#text#',Date);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Add');  
        cy.asserting_As_Xpath_Present('Taskpage_Taskadded_Message'); 
    }
    createMeetingTask(Contact,Date,Description){
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Button');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Meeting');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Assign_Contact',Contact);
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Contact','#text#',Contact);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
     // cy.element_Click_based_on_inputXpath('Tasks_Section_Select_Contact');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Date');
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Date','#text#',Date);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Add');  
        cy.asserting_As_Xpath_Present('Taskpage_Taskadded_Message'); 
    }
    createSmsTask(Contact,Date,Description){
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Button');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Sms');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Assign_Contact',Contact);
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Contact','#text#',Contact);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
       //cy.element_Click_based_on_inputXpath('Tasks_Section_Select_Contact');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Date');
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Select_Date','#text#',Date);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Add');  
        cy.asserting_As_Xpath_Present('Taskpage_Taskadded_Message'); 
    }
    updatedTaskDetails(Contact,Description,Date){
        //Contact_Edit
        cy.wait(3000)
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Tasks_Section_Search',Contact);
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Extra_Option','#text#',Description);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));

       
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Edit','#text#',Description);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Tasks_Section_Date',Date);  
        cy.element_Click_based_on_inputXpath('Tasks_Section_Edit_Update');
        //Assertion
        cy.asserting_As_Xpath_Present('Tasks_Section_Edit_Assertion');
    }
    viewTask(Description,Date){
        //view
        cy.wait(3000)
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_View','#text#',Description);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
      // Assertion
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_View_Assertion','#text#',Date);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_View_Close');
    }
    archiveTask(Description){
        //archive_Contact
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Archive','#text#',Description);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion for popup
        cy.asserting_As_Xpath_Present('Tasks_Section_Archive_Assertion');
        
    }
    navigateToArchive(){
        cy.element_Click_based_on_inputXpath('Tasks_Section_Unarchivepage');
    }
    unArchiveTask(Description){
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Unarchive','#text#',Description);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion for popup
        cy.asserting_As_Xpath_Present('Tasks_Section_Unarchive_Assertion');
    }
    assertion(Description){
        //Assertion As Email present
        cy.Returning_String_after_Find_and_Replace('Taskpage_Taskadded_View','#text#',Description);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    }
    multipleArchive(Description1,Description2){
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_checkbox_Multiple','#text#',Description1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_checkbox_Multiple','#text#',Description2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_checkbox_Multiple_Archive');
        
    }
    multipleUnarchive(Description1,Description2){
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_checkbox_Multiple','#text#',Description1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_checkbox_Multiple','#text#',Description2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_checkbox_Multiple_Unarchive');
    }
    multipleAssertion(Description1,Description2){
        //Assertion As Email1 present
       cy.Returning_String_after_Find_and_Replace('Taskpage_Taskadded_View','#text#',Description1);
       cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
       //Assertion As Email2 present
       cy.Returning_String_after_Find_and_Replace('Taskpage_Taskadded_View','#text#',Description2);
       cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    }
    AddTag(Description,Tags){
       //Contact_Add_Tag
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Tag','#text#',Description);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Add_Tag',Tags);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Tag_Close');
    }
    RemoveTag(Description,Tags){
        //Contact_Add_Tag
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Tag','#text#',Description);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Remove_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_Tag_Close');
    }
    ViewTag(Description,Tags){
        //Contact_Add_Tag
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_View_Add_Tag','#text#',Description);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion 
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_View_Add_Tag_Assertion','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    } 
    multipleAddtag(Description1,Description2,Tags){
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_checkbox_Multiple','#text#',Description1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_checkbox_Multiple','#text#',Description2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_checkbox_Multiple_Tag');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Add_Tag',Tags);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Tag_Close');
    }
    multipleRemovetag(Description1,Description2,Tags){
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_checkbox_Multiple','#text#',Description1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_checkbox_Multiple','#text#',Description2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_checkbox_Multiple_Tag');
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Remove_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_Tag_Close');
    }
    completeTask(Description1){
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Complete','#text#',Description1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion as task completed
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Complete_Assertion','#text#',Description1);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Not_Present(convertedString));
    }
    notCompleteTask(Description1){
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Notcomplete','#text#',Description1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion as task not completed
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Notcomplete_Assertion','#text#',Description1);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Not_Present(convertedString));
    }
    skipTask(Description1){
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Skip','#text#',Description1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion as task completed
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Skip_Assertion','#text#',Description1);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Not_Present(convertedString));
    }
    undoSkipTask(Description1){
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Undoskip','#text#',Description1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        
    }
    filterTask(Type,Daterange,Tags,Status,Createdtype,RandomName){
        cy.element_Click_based_on_inputXpath('Tasks_Section_Filter');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Filter');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Filter_Sort_Descending');
        //cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Filter_Type',Type);
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Filter_Daterange',Daterange)
        //cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Filter_Tags',Tags);
        //cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Filter_Status',Status);
        //cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Filter_Createdtype',Createdtype);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Save_Filter');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Save_Filter_Name',RandomName);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Save_Filter');
        cy.scrollTo(500, 0)
        cy.element_Click_based_on_inputXpath('Tasks_Section_Saved_Filter');
        //Assertion
        cy.asserting_As_Xpath_Present('Tasks_Section_Save_Filter_Assertion');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Search_Filter',RandomName);
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_View_Saved_Filter','#text#',RandomName);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.wait(3000)
    } 
      searchTask(){
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Tasks_Section_Search','Ravi');
        //Assertion As Email1 present
        cy.Returning_String_after_Find_and_Replace('Taskpage_Task_View','#text#','Ravi krishna');
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Not_Present(convertedString));
    } 
    deleteTask(Description){
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_Delete','#text#',Description);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_Delete_Confirmation');
        cy.wait(3000)
        //Assertion As Email1 present
        //cy.Returning_String_after_Find_and_Replace('Taskpage_Taskadded_View','#text#',Description);
        //cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Not_Present(convertedString));
    }

    multipleDelete(Description1){
        cy.Returning_String_after_Find_and_Replace('Tasks_Section_checkbox_Multiple','#text#',Description1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Tasks_Section_checkbox_Multiple_Delete');
        cy.element_Click_based_on_inputXpath('Tasks_Section_Delete_Confirmation');
    }
} 