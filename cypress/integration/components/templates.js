export class Templates{

    navigateToTemplates(){
       cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
        cy.element_Click_based_on_inputXpath('Main_section_Templates_Link');
    }

    navigateToTeamTemplates(){
      cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
       cy.element_Click_based_on_inputXpath('Main_section_Templates_Link');
       cy.element_Click_based_on_inputXpath('Templates_Section_Type_Team');

   }

    createPersonalTemplate(Name,Subject,Tag,Body,PersonalSnippet,TeamSnippet,file){
        cy.element_Click_based_on_inputXpath('Templates_Section_Type_Personal');
        cy.element_Click_based_on_inputXpath('Templates_Section_Create_Button');
        cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Name',Name);
        cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Subject',Subject);
        cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Tag',Tag);
        cy.Returning_String_after_Find_and_Replace('Templates_Section_Select_Tag','#text#',Tag);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Body',Name);
        cy.element_Click_based_on_inputXpath('Templates_Section_Add_Snippet');
        cy.element_Send_Value_based_on_InputXpath('Templates_Section_Search_Snippet',PersonalSnippet)
        cy.Returning_String_after_Find_and_Replace('Templates_Section_Select_Snippet','#text#',PersonalSnippet);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
       //Assertion as snippet added
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Templates_Section_Add_Snippet_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
	    	cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Name).replace('#text_2#',PersonalSnippet));
	      });
        cy.element_Click_based_on_inputXpath('Templates_Section_Add_Snippet');
        cy.element_Click_based_on_inputXpath('Templates_Section_Team_Snippet');
        cy.element_Send_Value_based_on_InputXpath('Templates_Section_Search_Snippet',TeamSnippet)
        cy.Returning_String_after_Find_and_Replace('Templates_Section_Select_Snippet','#text#',TeamSnippet);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
       //Assertion as snippet added
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Templates_Section_Add_Snippets_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Name).replace('#text_2#',PersonalSnippet).replace('#text_3#',TeamSnippet));
        });
  
        cy.get('.wsywgi-form > .justify-between > .gap-2 > :nth-child(2) > .flex').should('not.be.disabled')
        cy.get('.gap-2 > :nth-child(3) > .flex').should('not.be.disabled')
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
        cy.get('#attachments').attachFile(file);
        //Assertion
        cy.element_Click_based_on_inputXpath('Templates_Section_Attachments');
        cy.Returning_String_after_Find_and_Replace('Templates_Section_Attachments_Assertion','#text#',file);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        cy.element_Click_based_on_inputXpath('Templates_Section_Attachments');
        cy.element_Click_based_on_inputXpath('Templates_Section_Create_Add');   
        //Assertion for Template created
        cy.asserting_As_Xpath_Present('Templatepage_Templateadded_Message');

        //Assertion wheather the created Template visible
        cy.Returning_String_after_Find_and_Replace('Templatepage_Templateadded_View','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    }
    createTeamTemplate(Name,Subject,Tag,Body,PersonalSnippet,TeamSnippet,file){
      cy.element_Click_based_on_inputXpath('Templates_Section_Type_Team');
      cy.element_Click_based_on_inputXpath('Templates_Section_Create_Button');
      cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Name',Name);
      cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Subject',Subject);
      cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Tag',Tag);
      cy.Returning_String_after_Find_and_Replace('Templates_Section_Select_Tag','#text#',Tag);
      cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
      cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Body',Name);
      cy.element_Click_based_on_inputXpath('Templates_Section_Add_Snippet');
      cy.element_Send_Value_based_on_InputXpath('Templates_Section_Search_Snippet',PersonalSnippet)
      cy.Returning_String_after_Find_and_Replace('Templates_Section_Select_Snippet','#text#',PersonalSnippet);
      cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
     //Assertion as snippet added
      cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Templates_Section_Add_Snippet_Assertion');
      cy.get('@XpathvalueString').then(xpathString => {
      cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Name).replace('#text_2#',PersonalSnippet));
      });
      cy.element_Click_based_on_inputXpath('Templates_Section_Add_Snippet');
      cy.element_Click_based_on_inputXpath('Templates_Section_Team_Snippet');
      cy.element_Send_Value_based_on_InputXpath('Templates_Section_Search_Snippet',TeamSnippet)
      cy.Returning_String_after_Find_and_Replace('Templates_Section_Select_Snippet','#text#',TeamSnippet);
      cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
     //Assertion as snippet added
      cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Templates_Section_Add_Snippets_Assertion');
      cy.get('@XpathvalueString').then(xpathString => {
      cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Name).replace('#text_2#',PersonalSnippet).replace('#text_3#',TeamSnippet));
      });
      cy.get('.wsywgi-form > .justify-between > .gap-2 > :nth-child(2) > .flex').should('not.be.disabled')
      cy.get('.gap-2 > :nth-child(3) > .flex').should('not.be.disabled')
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_Fname','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_Lname','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_Email','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_Phone','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_CIty','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_State','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Contact_Country','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Fullname','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Address','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Phone','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Website','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Noofemp','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Linkedin','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Twitter','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Facebook','{enter}');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables');
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts',);
      cy.element_Click_based_on_inputXpath('Templates_Section_Insert_Variables_Accounts_Industry','{enter}');
      cy.get('#attachments').attachFile(file);
      //Assertion
      cy.element_Click_based_on_inputXpath('Templates_Section_Attachments');
      cy.Returning_String_after_Find_and_Replace('Templates_Section_Attachments_Assertion','#text#',file);
      cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
      cy.element_Click_based_on_inputXpath('Templates_Section_Attachments');

      cy.element_Click_based_on_inputXpath('Templates_Section_Create_Add');   
      //Assertion for Template created
      cy.asserting_As_Xpath_Present('Templatepage_Templateadded_Message');

      //Assertion wheather the created Template visible
      cy.Returning_String_after_Find_and_Replace('Templatepage_Templateadded_View','#text#',Name);
      cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
  }
    updatedTemplateDetails(Name,Body){
        //Contact_Edit
        cy.Returning_String_after_Find_and_Replace('Templates_Section_Edit','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Templates_Section_Add_Body',Body);  
        cy.element_Click_based_on_inputXpath('Templates_Section_Edit_Update');   
       //Assertion
       cy.asserting_As_Xpath_Present('Templatepage_Templateedited_Message');
    }
    viewTemplate(Name,Body){
        //view
        cy.Returning_String_after_Find_and_Replace('Templates_Section_View','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
      // Assertion
        cy.Returning_String_after_Find_and_Replace('Templates_Section_View_Assertion','#text#',Body);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        cy.element_Click_based_on_inputXpath('Templates_Section_View_Close');
    }
    cloneTemplate(Name1){
      cy.Returning_String_after_Find_and_Replace('Templates_Section_Clone','#text#',Name1);
      cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
      cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Name','-Cloned');
      cy.element_Click_based_on_inputXpath('Templates_Section_Clone_Confirm')
      //Assertion As Email1 present
      cy.Returning_String_after_Find_and_Replace('Templatepage_Templatecloned_View','#text#',Name1);
      cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
       
    }
    AddTag(Name,Tags){
        //Contact_Add_Tag
        cy.Returning_String_after_Find_and_Replace('Templates_Section_Tag','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Extra_Tag',Tags);
        cy.Returning_String_after_Find_and_Replace('Templates_Section_Select_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Templates_Section_Tag_Close');
      }
    RemoveTag(Name,Tags){
        //Contact_Add_Tag
        cy.Returning_String_after_Find_and_Replace('Templates_Section_Tag','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Templates_Section_Remove_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Templates_Section_Tag_Close');
      }
      ViewTag(Name,Tags){
        //Contact_Add_Tag
        cy.Returning_String_after_Find_and_Replace('Templates_Section_View_Add_Tag','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion 
        cy.Returning_String_after_Find_and_Replace('Templates_Section_View_Add_Tag_Assertion','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
      } 
      multipleAddtag(Name1,Name2,Tags){
        cy.Returning_String_after_Find_and_Replace('Templates_Section_checkbox_Multiple','#text#',Name1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Templates_Section_checkbox_Multiple','#text#',Name2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Templates_Section_checkbox_Multiple_Tag');
        cy.element_Send_Value_based_on_InputXpath('Templates_Section_Add_Extra_Tag',Tags);
        cy.Returning_String_after_Find_and_Replace('Templates_Section_Select_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Templates_Section_Tag_Close');
      }
      multipleRemovetag(Name1,Name2,Tags){
        
        cy.Returning_String_after_Find_and_Replace('Templates_Section_checkbox_Multiple','#text#',Name1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Templates_Section_checkbox_Multiple','#text#',Name2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Templates_Section_checkbox_Multiple_Tag');
        cy.Returning_String_after_Find_and_Replace('Templates_Section_Remove_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Templates_Section_Tag_Close');
      }
      archiveAccount(Name){
        //archive_Contact
        cy.Returning_String_after_Find_and_Replace('Templates_Section_Archive','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion for popup
        cy.asserting_As_Xpath_Present('Templates_Section_Archive_Assertion');
    
    }
    navigateToArchive(){
        cy.wait(2000)
        cy.element_Click_based_on_inputXpath('Templates_Section_Unarchivepage');
    }
    unArchiveAccount(Name){
        cy.Returning_String_after_Find_and_Replace('Templates_Section_Unarchive','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion for popup
        cy.asserting_As_Xpath_Present('Templates_Section_Unarchive_Assertion');
    }
    assertion(Name){
        //Assertion As Email present
        cy.Returning_String_after_Find_and_Replace('Templatepage_Templateadded_View','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    }
    multipleArchive(Name1,Name2){
        cy.Returning_String_after_Find_and_Replace('Templates_Section_checkbox_Multiple','#text#',Name1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Templates_Section_checkbox_Multiple','#text#',Name2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Templates_Section_checkbox_Multiple_Archive');
        
    }
    multipleUnarchive(Name1,Name2){
        cy.Returning_String_after_Find_and_Replace('Templates_Section_checkbox_Multiple','#text#',Name1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Templates_Section_checkbox_Multiple','#text#',Name2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Templates_Section_checkbox_Multiple_Unarchive');
    }
    multipleAssertion(Name1,Name2){
        //Assertion As Email1 present
       cy.Returning_String_after_Find_and_Replace('Templatepage_Templateadded_View','#text#',Name1);
       cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
       //Assertion As Email2 present
       cy.Returning_String_after_Find_and_Replace('Templatepage_Templateadded_View','#text#',Name2);
       cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
   }
   deleteTemplate(Name){
    cy.Returning_String_after_Find_and_Replace('Templates_Section_Delete','#text#',Name);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Templates_Section_Delete_Confirmation');
    cy.wait(3000)
    //Assertion As Email1 present
    //cy.Returning_String_after_Find_and_Replace('Templatepage_Templateadded_View','#text#',Name);
    //cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Not_Present(convertedString));
  }
  multipleDelete(Name){
    cy.Returning_String_after_Find_and_Replace('Templates_Section_checkbox_Multiple','#text#',Name);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Templates_Section_checkbox_Multiple_Delete');
    cy.element_Click_based_on_inputXpath('Templates_Section_Delete_Confirmation');
  }
  uploadTemplate(file){
    cy.element_Click_based_on_inputXpath('Templates_Section_Upload');
    cy.get('#file-upload--input').attachFile(file);
    cy.wait(2000)
    cy.element_Click_based_on_inputXpath('Templates_Section_Upload_Next');
    cy.element_Click_based_on_inputXpath('Templates_Section_Upload_Confirm');
    cy.element_Click_based_on_inputXpath('Templates_Section_Upload_Complete');
    //Assertion
    cy.Returning_String_after_Find_and_Replace('Templatepage_Templateadded_View','#text#','Upload Template');
    cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    cy.element_Click_based_on_inputXpath('Templates_Section_Unarchivepage');
    cy.Returning_String_after_Find_and_Replace('Templatepage_Templateadded_View','#text#','Upload Template');
    cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    cy.element_Click_based_on_inputXpath('Templates_Section_Type_Team');
    cy.Returning_String_after_Find_and_Replace('Templatepage_Templateadded_View','#text#','Upload Template');
    cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    cy.element_Click_based_on_inputXpath('Templates_Section_Unarchivepage');
    cy.Returning_String_after_Find_and_Replace('Templatepage_Templateadded_View','#text#','Upload Template');
    cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));

}
}    