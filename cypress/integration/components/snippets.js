export class Snippets{

    navigateToSnippets(){
        cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
        cy.element_Click_based_on_inputXpath('Main_section_Snippets_Link');

    }
    navigateToSnippetsTeam(){
      cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
      cy.element_Click_based_on_inputXpath('Main_section_Snippets_Link');
      cy.element_Click_based_on_inputXpath('Snippets_Section_Type_Team');
  }
    createPersonalSnippet(Name,Tag,Body){
        cy.element_Click_based_on_inputXpath('Snippets_Section_Type_Personal');
        cy.element_Click_based_on_inputXpath('Snippets_Section_Create_Button');
        cy.element_Send_Value_based_on_InputXpath('Snippets_Section_Add_Name',Name);
        cy.element_Send_Value_based_on_InputXpath('Snippets_Section_Add_Tag',Tag);
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_Select_Tag','#text#',Tag);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Send_Value_based_on_InputXpath('Snippets_Section_Add_Body',Name);
        cy.element_Click_based_on_inputXpath('Snippets_Section_Create_Add');   
        //Assertion for Snippet created
        cy.asserting_As_Xpath_Present('Snippetpage_Snippetadded_Message');

        //Assertion wheather the created Snippet visible
	      cy.Returning_String_after_Find_and_Replace('Snippetpage_Snippetadded_View','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
      }
      createTeamSnippet(Name,Tag,Body){
        cy.element_Click_based_on_inputXpath('Snippets_Section_Type_Team');
        cy.element_Click_based_on_inputXpath('Snippets_Section_Create_Button');
        cy.element_Send_Value_based_on_InputXpath('Snippets_Section_Add_Name',Name);
        cy.element_Send_Value_based_on_InputXpath('Snippets_Section_Add_Tag',Tag);
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_Select_Tag','#text#',Tag);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Send_Value_based_on_InputXpath('Snippets_Section_Add_Body',Name);
        cy.element_Click_based_on_inputXpath('Snippets_Section_Create_Add');   
        //Assertion for Snippet created
        cy.asserting_As_Xpath_Present('Snippetpage_Snippetadded_Message');

        //Assertion wheather the created Snippet visible
	      cy.Returning_String_after_Find_and_Replace('Snippetpage_Snippetadded_View','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
      }
    updatedSnippetDetails(Name,Body){
        //Contact_Edit
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_Edit','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Snippets_Section_Add_Body',Body);  
        cy.element_Click_based_on_inputXpath('Snippets_Section_Edit_Update');
        
    }
    viewSnippet(Name,Body){
        //view
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_View','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
      // Assertion
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_View_Assertion','#text#',Body);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        cy.element_Click_based_on_inputXpath('Snippets_Section_View_Close');
    }
    AddTag(Name,Tags){
        //Contact_Add_Tag
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_Tag','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Send_Value_based_on_InputXpath('Snippets_Section_Add_Extra_Tag',Tags);
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_Select_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //cy.element_Click_based_on_inputXpath('Snippets_Section_Select_Tag');
        cy.element_Click_based_on_inputXpath('Snippets_Section_Tag_Close');
      }
    RemoveTag(Name,Tags){
        //Contact_Add_Tag
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_Tag','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_Remove_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Snippets_Section_Tag_Close');
      }
      ViewTag(Name,Tags){
        //Contact_Add_Tag
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_View_Add_Tag','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.wait(2000)
        //Assertion 
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_View_Add_Tag_Assertion','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_View_Add_Tag','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
      } 
      multipleAddtag(Name1,Name2,Tags){
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_checkbox_Multiple','#text#',Name1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_checkbox_Multiple','#text#',Name2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Snippets_Section_checkbox_Multiple_Tag');
        cy.element_Send_Value_based_on_InputXpath('Snippets_Section_Add_Extra_Tag',Tags);
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_Select_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));        cy.element_Click_based_on_inputXpath('Snippets_Section_Tag_Close');
      }
      multipleRemovetag(Name1,Name2,Tags){
        
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_checkbox_Multiple','#text#',Name1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_checkbox_Multiple','#text#',Name2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Snippets_Section_checkbox_Multiple_Tag');
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_Remove_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Snippets_Section_Tag_Close');
      }
      archiveSnippet(Name){
        //archive_Contact
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_Archive','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion for popup
        cy.asserting_As_Xpath_Present('Snippets_Section_Archive_Assertion');
        cy.wait(2000)
    }
    navigateToArchive(){
        cy.element_Click_based_on_inputXpath('Snippets_Section_Unarchivepage');
    }
    unArchiveSnippet(Name){
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_Unarchive','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion for popup
        cy.asserting_As_Xpath_Present('Snippets_Section_Unarchive_Assertion');
    }
    assertion(Name){
        //Assertion As Email present
        cy.Returning_String_after_Find_and_Replace('Snippetpage_Snippetadded_View','#text#',Name);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    }
    multipleArchive(Name1,Name2){
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_checkbox_Multiple','#text#',Name1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_checkbox_Multiple','#text#',Name2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Snippets_Section_checkbox_Multiple_Archive');
        cy.wait(2000)

        
    }
    multipleUnarchive(Name1,Name2){
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_checkbox_Multiple','#text#',Name1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Snippets_Section_checkbox_Multiple','#text#',Name2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Snippets_Section_checkbox_Multiple_Unarchive');
    }
    multipleAssertion(Name1,Name2){
        //Assertion As Email1 present
       cy.Returning_String_after_Find_and_Replace('Snippetpage_Snippetadded_View','#text#',Name1);
       cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
       //Assertion As Email2 present
       cy.Returning_String_after_Find_and_Replace('Snippetpage_Snippetadded_View','#text#',Name2);
       cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    }
    cloneSnippet(Name1){
      cy.Returning_String_after_Find_and_Replace('Snippets_Section_Clone','#text#',Name1);
      cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
      cy.element_Send_Value_based_on_InputXpath('Snippets_Section_Add_Name','-Cloned');
      cy.element_Click_based_on_inputXpath('Snippets_Section_Clone_Confirm')
      //Assertion As Email1 present
      cy.Returning_String_after_Find_and_Replace('Snippetpage_Snippetcloned_View','#text#',Name1);
      cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
       
    }
    deleteSnippet(Name){
    cy.Returning_String_after_Find_and_Replace('Snippets_Section_Delete','#text#',Name);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Snippets_Section_Delete_Confirmation');
    cy.wait(3000)
    //Assertion As Email1 present
    //cy.Returning_String_after_Find_and_Replace('Snippetpage_Snippetadded_View','#text#',Name);
    //cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Not_Present(convertedString));
  }
  multipleDelete(Name){
    cy.Returning_String_after_Find_and_Replace('Snippets_Section_checkbox_Multiple','#text#',Name);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Snippets_Section_checkbox_Multiple_Delete');
    cy.element_Click_based_on_inputXpath('Snippets_Section_Delete_Confirmation');
  }
  uploadSnippet(file){
    cy.element_Click_based_on_inputXpath('Snippets_Section_Upload');
    cy.get('#file-upload--input').attachFile(file);
    cy.wait(2000)
    cy.element_Click_based_on_inputXpath('Snippets_Section_Upload_Next');
    cy.element_Click_based_on_inputXpath('Snippets_Section_Upload_Confirm');
    cy.element_Click_based_on_inputXpath('Snippets_Section_Upload_Complete');
    //Assertion
    cy.Returning_String_after_Find_and_Replace('Snippetpage_Snippetadded_View','#text#','Upload Snippet');
    cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    cy.element_Click_based_on_inputXpath('Snippets_Section_Unarchivepage');
    cy.Returning_String_after_Find_and_Replace('Snippetpage_Snippetadded_View','#text#','Upload Snippet');
    cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    cy.element_Click_based_on_inputXpath('Snippets_Section_Type_Team');
    cy.Returning_String_after_Find_and_Replace('Snippetpage_Snippetadded_View','#text#','Upload Snippet');
    cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    cy.element_Click_based_on_inputXpath('Snippets_Section_Unarchivepage');
    cy.Returning_String_after_Find_and_Replace('Snippetpage_Snippetadded_View','#text#','Upload Snippet');
    cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));

}
}