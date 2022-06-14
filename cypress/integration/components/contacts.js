export class Contacts{

    navigateToContacts(){
        cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
        cy.element_Click_based_on_inputXpath('Main_section_Contacts_Link');
    }

    createContact(Firstname, Lastname,Email,Title,Street,City,State,Country,Code,Linkedin,Facebook,Twitter,Tags){
        cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Button');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Firstname',Firstname);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Lastname',Lastname);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Email',Email);
        cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Showmore');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Title',Title);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Street',Street);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_City',City);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_State',State);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Country',Country);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Code',Code);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Linkedin',Linkedin);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Facebook',Facebook);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Twitter',Twitter);
        //cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Tag',Tags);
       // cy.element_Click_based_on_inputXpath('Contacts_Section_Select_Tag');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Stage',"Cold");
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Type',"Customer");
        cy.element_Click_based_on_inputXpath('Contacts_Section_Submit');
        
        //Assertion for contact created
        cy.asserting_As_Xpath_Present('Contactpage_Contactadded_Message');

        //Assertion wheather the created contact visible
	    cy.Returning_String_after_Find_and_Replace('Contactpage_Contactadded_View','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    }
    invalidEmail(Email,Firstname, Lastname){
        cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Button');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Firstname',Firstname);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Email',Email);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Lastname',Lastname);        
        //Assertion for contact created
        cy.asserting_As_Xpath_Present('Contacts_Section_Invalid_Email_Message');
        cy.element_Click_based_on_inputXpath('Contacts_Section_Tag_Close');

    }
    updatedContactDetails(Email,Phone){
        //Contact_Edit
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Edit','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Phone',Phone);  
        cy.element_Click_based_on_inputXpath('Contacts_Section_Edit_Update');
        //Assertion
        cy.asserting_As_Xpath_Present('Contacts_Section_Edit_Assertion');
        cy.asserting_As_Xpath_Present('//div[text()="Contact updated successfully"]')
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contactpage_Contactedited_View');
	    cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Email).replace('#text_2#',Phone));
	    });
        
    }
    archiveContact(Email){
        //archive_Contact
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Archive','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion for popup
        cy.asserting_As_Xpath_Present('Contacts_Section_Archive_Assertion');
        
    }
    navigateToArchive(){
        cy.element_Click_based_on_inputXpath('Contacts_Section_Unarchivepage');
    }
    unArchiveContact(Email){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Unarchive','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion for popup
        cy.asserting_As_Xpath_Present('Contacts_Section_Unarchive_Assertion');
    }
    AddTag(Email,Tags){
        //Contact_Add_Tag
	    cy.Returning_String_after_Find_and_Replace('Contacts_Section_Tag','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
	    cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Add_Tag',Tags);
        cy.element_Click_based_on_inputXpath('Contacts_Section_Select_Tag');
        cy.element_Click_based_on_inputXpath('Contacts_Section_Tag_Close');
    }
    ViewTag(Email,Tags){
        //Contact_Add_Tag
	    cy.Returning_String_after_Find_and_Replace('Contacts_Section_View_Add_Tag','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
	    //Assertion 
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View_Add_Tag_Assertion','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    } 
    RemoveTag(Email,Tags){
        //Contact_Add_Tag
	    cy.Returning_String_after_Find_and_Replace('Contacts_Section_Tag','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Remove_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_Tag_Close');
    }
    viewContact(Email,Firstname,Lastname){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
	    cy.element_Click_based_on_inputXpath('Contactpage_Contactadded_View_Expand');
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View_Assertion','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View_Assertion','#text#',Firstname);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_View_Notes');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_View_Createnotes',Firstname);
        cy.element_Click_based_on_inputXpath('Contacts_Section_View_Savenotes');
        //Assertion Create note
        cy.asserting_As_Xpath_Present('Contacts_Section_View_Savenotes_Assertion');
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View_Editnotes','#text#',Firstname);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Contacts_Section_View_Editnotes_Data',Lastname);
        cy.element_Click_based_on_inputXpath('Contacts_Section_View_Editnotes_Ok');
        //Assertion Edit note
        cy.asserting_As_Xpath_Present('Contacts_Section_View_Editnotes_Ok_Assertion');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contacts_Section_View_Editednotes');
	    cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Lastname));
	    });
        cy.wait(3000)
        cy.element_Click_based_on_inputXpath('Contacts_Section_View_Deletenotes');
        //Assertion Delete note
        cy.asserting_As_Xpath_Present('Contacts_Section_View_Deletenotes_Assertion');
        cy.element_Click_based_on_inputXpath('Contactpage_Contactadded_View_Close');
    }
    selectContact(Email){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_checkbox_Multiple','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_checkbox_Multiple_Archive');
    }
    deleteContact(Email){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Delete','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_Delete_Confirmation');
        cy.wait(3000)
        //Assertion As Email1 present
        cy.Returning_String_after_Find_and_Replace('Contactpage_Contactadded_View','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Not_Present(convertedString));
    }
    multipleArchive(Email1,Email2){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_checkbox_Multiple','#text#',Email1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_checkbox_Multiple','#text#',Email2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_checkbox_Multiple_Archive');
        
    }
    multipleAssertion(Email1,Email2){
         //Assertion As Email1 present
        cy.Returning_String_after_Find_and_Replace('Contactpage_Contactadded_View','#text#',Email1);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        //Assertion As Email2 present
        cy.Returning_String_after_Find_and_Replace('Contactpage_Contactadded_View','#text#',Email2);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    }
    assertion(Email){
        //Assertion As Email present
        cy.Returning_String_after_Find_and_Replace('Contactpage_Contactadded_View','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    }
    multipleUnarchive(Email1,Email2){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_checkbox_Multiple','#text#',Email1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_checkbox_Multiple','#text#',Email2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_checkbox_Multiple_Unarchive');
    }
    multipleAddtag(Email1,Email2,Tags){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_checkbox_Multiple','#text#',Email1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_checkbox_Multiple','#text#',Email2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_checkbox_Multiple_Tag');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Add_Tag',Tags);
        cy.element_Click_based_on_inputXpath('Contacts_Section_Select_Tag');
        cy.element_Click_based_on_inputXpath('Contacts_Section_Tag_Close');
        cy.wait(2000)
    }
    multipleRemovetag(Email1,Email2,Tags){
        
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_checkbox_Multiple','#text#',Email1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_checkbox_Multiple','#text#',Email2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_checkbox_Multiple_Tag');
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Remove_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_Tag_Close');
    }
    multipleDelete(Email1){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_checkbox_Multiple','#text#',Email1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_checkbox_Multiple_Delete');
        cy.element_Click_based_on_inputXpath('Contacts_Section_Delete_Confirmation');
    }
    filterContact(Lastname,Title,State,Country,Tags,RandomName){
        cy.element_Click_based_on_inputXpath('Contacts_Section_Filter');
        cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Filter');
        cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Filter_Sortby');
       // cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Filter_Lastmodified');
        //cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_Tags',Tags);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_Title',Title);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_Stage',"Cold");
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_Type',"Customer");
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_State',State);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_Country',Country);
        //cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_Company',Company);
        cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Save_Filter');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Save_Filter_Name',RandomName);
        cy.element_Click_based_on_inputXpath('Contacts_Section_Save_Filter');
        cy.scrollTo(500, 0)
        cy.element_Click_based_on_inputXpath('Contacts_Section_Saved_Filter');
        //Assertion
        cy.asserting_As_Xpath_Present('Contacts_Section_Save_Filter_Assertion');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Search_Filter',RandomName);
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View_Saved_Filter','#text#',RandomName);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.wait(3000)
    }
    basics(){
        cy.element_Click_based_on_inputXpath('Landing_Page_Blubrd_Logo');
        cy.asserting_As_Xpath_Present('Dashboard_Section_Text_Dashboard');
        cy.element_Click_based_on_inputXpath('Main_Section_Dashboard_Link');
        cy.asserting_As_Xpath_Present('Dashboard_Section_Text_Dashboard');
        cy.element_Click_based_on_inputXpath('Main_section_Tasks_Link');
        cy.asserting_As_Xpath_Present('Tasks_Section_Text_Tasks');
        cy.element_Click_based_on_inputXpath('Main_section_Contacts_Link');
        cy.asserting_As_Xpath_Present('Contacts_Section_Text_Contacts');
        cy.element_Click_based_on_inputXpath('Main_section_Accounts_Link');
        cy.asserting_As_Xpath_Present('Accounts_Section_Text_Accounts');
        cy.element_Click_based_on_inputXpath('Main_section_Templates_Link');
        cy.asserting_As_Xpath_Present('Templates_Section_Text_Templates');
        cy.element_Click_based_on_inputXpath('Main_section_Snippets_Link');
        cy.asserting_As_Xpath_Present('Snippets_Section_Text_Snippets');
        cy.element_Click_based_on_inputXpath('Main_section_Sequences_Link');
        cy.asserting_As_Xpath_Present('Sequences_Section_Text_Sequences');
        cy.element_Click_based_on_inputXpath('Main_Section_Notification_Link');
        cy.asserting_As_Xpath_Present('Notification_Section_Text_Notification');
        cy.element_Click_based_on_inputXpath('Main_Section_Setting_Link');
        cy.asserting_As_Xpath_Present('Profile_Section_Text_Profile');
        cy.asserting_As_Xpath_Present('Profile_Section_Account_Name');
    }
}