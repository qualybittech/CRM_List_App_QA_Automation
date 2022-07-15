
export class Contacts{

    navigateToContacts(){
        cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
        cy.element_Click_based_on_inputXpath('Main_section_Contacts_Link');

    }

    createContact(Firstname, Lastname,Email,Phone,Account,Title,Street,City,State,Country,Code,Linkedin,Facebook,Twitter,Tags){
        cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Button');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Firstname',Firstname);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Lastname',Lastname);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Email',Email);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Phone',Phone);  
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Account',Account);
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Select_Account','#text#',Account);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
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
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Tag',Tags);
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Select_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Stage',"Cold");
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Type',"Customer");
        cy.element_Click_based_on_inputXpath('Contacts_Section_Submit');
        
        //Assertion for contact created
        cy.asserting_As_Xpath_Present('Contactpage_Contactadded_Message');
        cy.wait(2000)
        //Assertion wheather the created contact visible
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contactpage_Contact_Name_View');
	    cy.get('@XpathvalueString').then(xpathString => {
            cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Firstname).replace('#text_2#',Lastname));
            });    
	    cy.Returning_String_after_Find_and_Replace('Contactpage_Contactadded_View','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contactpage_Contactedited_View');
	    cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Email).replace('#text_2#',Phone));
	    });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contactpage_Account_View');
	    cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Email).replace('#text_2#',Account));
	    });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contactpage_Contactedited_View');
	    cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Email).replace('#text_2#',City));
	    });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contactpage_Contactedited_View');
	    cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Email).replace('#text_2#',State));
	    });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contactpage_Contactedited_View');
	    cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Email).replace('#text_2#',Country));
	    });
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
    duplicateEmail(Email,Firstname,Lastname){
        cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Button');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Firstname',Firstname);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Email',Email);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Lastname',Lastname);        
        cy.element_Click_based_on_inputXpath('Contacts_Section_Submit');
        //Assertion for contact created
        cy.asserting_As_Xpath_Present('Contacts_Section_Duplicate_Email_Message');
        cy.element_Click_based_on_inputXpath('Contacts_Section_Tag_Close');

    }
    updatedContactDetails(Email,Phone,City,State,Country){
        //Contact_Edit
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Edit','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Contacts_Section_Create_Phone',Phone);
        cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Showmore')  
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Contacts_Section_Create_City',City);
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Contacts_Section_Create_State',State);
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Contacts_Section_Create_Country',Country);
        cy.element_Click_based_on_inputXpath('Contacts_Section_Edit_Update');
        //Assertion
        cy.asserting_As_Xpath_Present('Contacts_Section_Edit_Assertion');
        cy.asserting_As_Xpath_Present('//div[text()="Contact updated successfully"]')
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contactpage_Contactedited_View');
	    cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Email).replace('#text_2#',Phone));
	    });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contactpage_Contactedited_View');
	    cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Email).replace('#text_2#',City));
	    });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contactpage_Contactedited_View');
	    cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Email).replace('#text_2#',State));
	    });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contactpage_Contactedited_View');
	    cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Email).replace('#text_2#',Country));
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
        cy.wait(2000)
        cy.element_Click_based_on_inputXpath('Contacts_Section_Unarchivepage');
        cy.wait(2000)
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
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Select_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
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
        cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
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
        //cy.Returning_String_after_Find_and_Replace('Contactpage_Contactadded_View','#text#',Email);
        //cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Not_Present(convertedString));
    }
    multipleArchive(Email1,Email2){
        cy.wait(2000);
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
        cy.wait(2000)
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_checkbox_Multiple','#text#',Email2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_checkbox_Multiple','#text#',Email1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_checkbox_Multiple_Tag');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Add_Tag',Tags);
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Select_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_Tag_Close');
        
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
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Create_Filter_Sortby','#text#','Last Modified');
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));    
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_Tags',Tags);
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Filter_Select_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));    
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_Title',Title);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_Stage',"Cold");
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_Type',"Customer");
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_State',State);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_Country',Country);
        //cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Filter_Company',Company);
        cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Save_Filter');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Save_Filter_Name',RandomName);
        cy.element_Click_based_on_inputXpath('Contacts_Section_Save_Filter');
        //cy.element_Click_based_on_inputXpath('Contacts_Section_Saved_Filter');
        //Assertion
        cy.asserting_As_Xpath_Present('Contacts_Section_Save_Filter_Assertion');
        cy.element_Click_based_on_inputXpath('Contacts_Section_Filter');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Search_Filter',RandomName);
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View_Saved_Filter','#text#',RandomName);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Edit
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Edit_Saved_Filter','#text#',RandomName);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_Edit_Filter')
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Create_Filter_Sortby','#text#','Created ');
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_Update_Filter');
        cy.element_Click_based_on_inputXpath('Contacts_Section_Filter_Update');
    
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
        /*cy.element_Click_based_on_inputXpath('Main_Section_Notification_Link');
        cy.asserting_As_Xpath_Present('Notification_Section_Text_Notification');
        cy.element_Click_based_on_inputXpath('Main_Section_Setting_Link');
        cy.asserting_As_Xpath_Present('Profile_Section_Text_Profile');
        cy.asserting_As_Xpath_Present('Profile_Section_Account_Name');*/
    }
    viewAddToSequences(Email,Seqname){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
	    cy.element_Click_based_on_inputXpath('Contactpage_Contactadded_View_Expand');
        cy.element_Click_based_on_inputXpath('Contacts_Section_Add_To_Sequence');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Assign_Sequence',Seqname);
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Select_Sequences','#text#',Seqname);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_Submit');
        cy.asserting_As_Xpath_Present('Contacts_Section_Added_Sequences_Assertion');
        cy.element_Click_based_on_inputXpath('Contacts_Section_View_Sequences');
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Sequences_Assertion','#text#',Seqname);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        cy.element_Click_based_on_inputXpath('Contactpage_Contactadded_View_Close');
    }
    viewSendEmail(Email,Email_Sub,Description,PersonalSnippet,TeamSnippet,PersonalTemplate,TeamTemplate,file){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
	    cy.element_Click_based_on_inputXpath('Contactpage_Contactadded_View_Expand');
	    cy.element_Click_based_on_inputXpath('Contacts_Section_View_Send_Email');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Emailsub',Email_Sub);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Emailbody',Description);
        //Templates
       cy.element_Click_based_on_inputXpath('Contacts_Section_Add_Template');
       cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Search_Template',PersonalTemplate)
       cy.Returning_String_after_Find_and_Replace('Contacts_Section_Select_Template','#text#',PersonalTemplate);
       cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
       cy.element_Click_based_on_inputXpath('Contacts_Section_Add_Template');
       //Assertion
       /*cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contacts_Section_Add_Template_Assertion');
       cy.get('@XpathvalueString').then(xpathString => {
           cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Description).replace('#text_2#',PersonalTemplate));
         });*/
       cy.element_Click_based_on_inputXpath('Contacts_Section_Team_Template');
       cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Search_Template',TeamTemplate)
       cy.Returning_String_after_Find_and_Replace('Contacts_Section_Select_Template','#text#',TeamTemplate);
       cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
       //Snippet
        cy.element_Click_based_on_inputXpath('Contacts_Section_Add_Snippet');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Search_Snippet',PersonalSnippet)
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Select_Snippet','#text#',PersonalSnippet);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Contacts_Section_Add_Snippet');
        cy.element_Click_based_on_inputXpath('Contacts_Section_Team_Snippet');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Search_Snippet',TeamSnippet)
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Select_Snippet','#text#',TeamSnippet);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contacts_Section_Add_Template_Snippet_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
            cy.asserting_As_Xpath_Present(xpathString.replace('#text#',PersonalSnippet).replace('#text_2#',TeamSnippet).replace('#text_3#',TeamTemplate).replace('#text_4#',PersonalSnippet).replace('#text_5#',TeamSnippet));
          });
          cy.get(':nth-child(1) > button.text-2xl').attachFile(file);
          //Assertion
         // cy.element_Click_based_on_inputXpath('Templates_Section_Attachments');
          cy.Returning_String_after_Find_and_Replace('Templates_Section_Attachments_Assertion','#text#',file);
          cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
          cy.element_Click_based_on_inputXpath('Templates_Section_Attachments');
          cy.get('.wsywgi-form > .justify-between > .gap-2 > :nth-child(2) > .flex').should('not.be.disabled')
          cy.get('.gap-2 > :nth-child(3) > .flex').should('not.be.disabled')
  
        cy.element_Click_based_on_inputXpath('Contacts_Section_Email_Send');
        cy.asserting_As_Xpath_Present('Contacts_Section_Email_Send_Message');
        cy.element_Click_based_on_inputXpath('Contacts_Section_View_Emails');
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View_Email_Send','#text#',Email_Sub);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
        cy.element_Click_based_on_inputXpath('Contactpage_Contactadded_View_Close');

    }
    viewAddTask(Email,Date,Description,Name){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
	    cy.element_Click_based_on_inputXpath('Contactpage_Contactadded_View_Expand');
        cy.element_Click_based_on_inputXpath('Contacts_Section_View_Add_Task');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Date',Date);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create');
        cy.element_Send_Value_based_on_InputXpath('Tasks_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Tasks_Section_Create_Add');  
        cy.asserting_As_Xpath_Present('Taskpage_Taskadded_Message'); 
        cy.element_Click_based_on_inputXpath('Contactpage_Contactadded_View_Close');
        cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
        cy.element_Click_based_on_inputXpath('Main_section_Tasks_Link');
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Tasks_Section_Search',Name);
        //Assertion As Email1 present
        cy.Returning_String_after_Find_and_Replace('Taskpage_Task_View','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Not_Present(convertedString));
        cy.element_Click_based_on_inputXpath('Main_section_Contacts_Link');
        cy.element_Click_based_on_inputXpath('Main_section_Expand_link');

    }
    uploadContact(file){
        cy.element_Click_based_on_inputXpath('Contacts_Section_Upload');
        cy.get('#file-upload--input').attachFile(file);
        cy.wait(2000)
        cy.element_Click_based_on_inputXpath('Contacts_Section_Upload_Next');
        cy.element_Click_based_on_inputXpath('Contacts_Section_Upload_Confirm');
        //Assertion
        cy.Returning_String_after_Find_and_Replace('Contactpage_Contactadded_View','#text#','a@gmail.com');
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));

    }
    insertContactVariables(Firstname,Lastname,Email,Phone,City,State,Country ){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
	    cy.element_Click_based_on_inputXpath('Contactpage_Contactadded_View_Expand');
	    cy.element_Click_based_on_inputXpath('Contacts_Section_View_Send_Email');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_Fname');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_Lname');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_Email');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_Phone');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_CIty');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_State');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_Country');

        cy.element_Click_based_on_inputXpath('Contacts_Section_Email_Preview');
        //Assertion
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Contacts_Section_Insert_Variables_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
            cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Firstname).replace('#text_2#',Lastname).replace('#text_3#',Email)
            .replace('#text_4#',Phone).replace('#text_5#',City).replace('#text_6#',State).replace('#text_7#',Country));
          });

    }
    insertAccountVariables(Email,Fullname,Address,Phone,Random_Website,No_Of_Employee,Linkedin,Twitter,Facebook,Industry){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
	    cy.element_Click_based_on_inputXpath('Contactpage_Contactadded_View_Expand');
	    cy.element_Click_based_on_inputXpath('Contacts_Section_View_Send_Email');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Fullname');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Address');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Phone');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Website');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Noofemp');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Linkedin');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Twitter');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Facebook');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
        cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Industry');

        cy.element_Click_based_on_inputXpath('Contacts_Section_Email_Preview');
        //Assertion
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Accounts_Section_Insert_Variables_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
            cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Fullname).replace('#text_2#',Address).replace('#text_3#',Phone).replace('#text_4#',Random_Website).
            replace('#text_5#',No_Of_Employee).replace('#text_6#',Linkedin).replace('#text_7#',Twitter).replace('#text_8#',Facebook).replace('#text_9#',Industry));
          });

    }
}