export class Accounts{

    navigateToAccounts(){
        cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
        cy.element_Click_based_on_inputXpath('Main_section_Accounts_Link');

    }

    createAccount(Fullname,Phone,Website,Tags,Address,City,State,Code,Country,Industry,About,Linkedin,Facebook,Twitter,Num_Of_Employee){
        cy.element_Click_based_on_inputXpath('Accounts_Section_Create_Button');
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Fullname',Fullname);
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Phone',Phone);
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Website',Website);
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Tags',Tags);
        cy.Returning_String_after_Find_and_Replace('Accounts_Section_Select_Tag','#text#',Tags);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Account_Owner',Account_Owner);
        cy.element_Click_based_on_inputXpath('Accounts_Section_Create_Showmore');
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Address',Address);
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_City',City);
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_State',State);
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Code',Code);
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Country',Country);
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Industry',Industry);
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_About',About);
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Linkedin',Linkedin);
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Facebook',Facebook);
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Twitter',Twitter);
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_No_Of_Employee',Num_Of_Employee);
        cy.element_Click_based_on_inputXpath('Accounts_Section_Create_Add');
        //Assertion for contact created
        cy.asserting_As_Xpath_Present('Accountpage_Accountadded_Message');

        //Assertion wheather the created contact visible
        cy.Returning_String_after_Find_and_Replace('Accountpage_Accountadded_View','#text#',Website);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString))
    }
    invalidWebsite(Fullname,Phone,Website){
      cy.element_Click_based_on_inputXpath('Accounts_Section_Create_Button');
      cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Fullname',Fullname);
      cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Website',Website);
      cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Phone',Phone);
      //Assertion for contact created
      cy.asserting_As_Xpath_Present('Accounts_Section_Invalid_Website_Message');
      cy.element_Click_based_on_inputXpath('Accounts_Section_Tag_Close');

    }
    viewAccount(Website,Fullname,State){
        cy.Returning_String_after_Find_and_Replace('Accounts_Section_View','#text#',Website);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
	      cy.element_Click_based_on_inputXpath('Accountpage_Accountadded_View_Expand');
        cy.Returning_String_after_Find_and_Replace('Accounts_Section_View_Assertion','#text#',Website);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        cy.Returning_String_after_Find_and_Replace('Accounts_Section_View_Assertion','#text#',Fullname);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        cy.element_Click_based_on_inputXpath('Accounts_Section_View_Notes');
        cy.element_Send_Value_based_on_InputXpath('Accounts_Section_View_Createnotes',Fullname);
        cy.element_Click_based_on_inputXpath('Accounts_Section_View_Savenotes');
        //Assertion Create note
        cy.asserting_As_Xpath_Present('Accounts_Section_View_Savenotes_Assertion');
        cy.Returning_String_after_Find_and_Replace('Accounts_Section_View_Editnotes','#text#',Fullname);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Accounts_Section_View_Editnotes_Data',State);
        cy.element_Click_based_on_inputXpath('Accounts_Section_View_Editnotes_Ok');
        //Assertion Edit note
        cy.asserting_As_Xpath_Present('Accounts_Section_View_Editnotes_Ok_Assertion');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Accounts_Section_View_Editednotes');
	      cy.get('@XpathvalueString').then(xpathString => {
		    cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',State));
	    });
        cy.wait(3000)
        cy.element_Click_based_on_inputXpath('Accounts_Section_View_Deletenotes');
        //Assertion Delete note
        cy.asserting_As_Xpath_Present('Accounts_Section_View_Deletenotes_Assertion');
        cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
        cy.element_Click_based_on_inputXpath('Accountpage_Accountadded_View_Close');


    }
    viewAddContact(Website){
      cy.Returning_String_after_Find_and_Replace('Accounts_Section_View','#text#',Website);
      cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
     cy.wait(2000)
      cy.element_Click_based_on_inputXpath('Accountpage_Accountadded_View_Expand');
      cy.element_Click_based_on_inputXpath('Accounts_Section_View_Add_Contact');
    }
    updatedAccountDetails(Website,Phone){
        //Contact_Edit
        cy.Returning_String_after_Find_and_Replace('Accounts_Section_Edit','#text#',Website);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Accounts_Section_Create_Phone',Phone);  
        cy.element_Click_based_on_inputXpath('Accounts_Section_Edit_Update');
        //Assertion
        cy.asserting_As_Xpath_Present('Accounts_Section_Edit_Assertion');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Accountpage_Accountedited_View');
	      cy.get('@XpathvalueString').then(xpathString => {
		    cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Website).replace('#text_2#',Phone));
	     });        
    }
    archiveAccount(Website){
        //archive_Contact
        cy.Returning_String_after_Find_and_Replace('Accounts_Section_Archive','#text#',Website);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion for popup
        cy.asserting_As_Xpath_Present('Accounts_Section_Archive_Assertion');
        
    }
    navigateToArchive(){
        cy.wait(2000)
        cy.element_Click_based_on_inputXpath('Accounts_Section_Unarchivepage');
        
    }
    unArchiveAccount(Website){
        cy.Returning_String_after_Find_and_Replace('Accounts_Section_Unarchive','#text#',Website);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        //Assertion for popup
        cy.asserting_As_Xpath_Present('Accounts_Section_Unarchive_Assertion');
    }
    assertion(Website){
        //Assertion As Email present
        cy.Returning_String_after_Find_and_Replace('Accountpage_Accountadded_View','#text#',Website);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    }
    multipleArchive(Website1,Website2){
        cy.Returning_String_after_Find_and_Replace('Accounts_Section_checkbox_Multiple','#text#',Website1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Accounts_Section_checkbox_Multiple','#text#',Website2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Accounts_Section_checkbox_Multiple_Archive');
        
    }
    multipleUnarchive(Website1,Website2){
        cy.Returning_String_after_Find_and_Replace('Accounts_Section_checkbox_Multiple','#text#',Website1);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.Returning_String_after_Find_and_Replace('Accounts_Section_checkbox_Multiple','#text#',Website2);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
        cy.element_Click_based_on_inputXpath('Accounts_Section_checkbox_Multiple_Unarchive');
    }
    multipleAssertion(Website1,Website2){
        //Assertion As Email1 present
       cy.Returning_String_after_Find_and_Replace('Accountpage_Accountadded_View','#text#',Website1);
       cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
       //Assertion As Email2 present
       cy.Returning_String_after_Find_and_Replace('Accountpage_Accountadded_View','#text#',Website2);
       cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
   }
   AddTag(Email,Tags){
    //Contact_Add_Tag
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_Tag','#text#',Email);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Add_Tag',Tags);
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_Select_Tag','#text#',Tags);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Accounts_Section_Tag_Close');
  }
  RemoveTag(Email,Tags){
    //Contact_Add_Tag
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_Tag','#text#',Email);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_Remove_Tag','#text#',Tags);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Accounts_Section_Tag_Close');
  }
  ViewTag(Email,Tags){
    //Contact_Add_Tag
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_View_Add_Tag','#text#',Email);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    //Assertion 
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_View_Add_Tag_Assertion','#text#',Tags);
    cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
  } 
  multipleAddtag(Email1,Email2,Tags){
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_checkbox_Multiple','#text#',Email1);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_checkbox_Multiple','#text#',Email2);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Accounts_Section_checkbox_Multiple_Tag');
    cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Add_Tag',Tags);
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_Select_Tag','#text#',Tags);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Accounts_Section_Tag_Close');
  }
  multipleRemovetag(Email1,Email2,Tags){
    
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_checkbox_Multiple','#text#',Email1);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_checkbox_Multiple','#text#',Email2);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Accounts_Section_checkbox_Multiple_Tag');
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_Remove_Tag','#text#',Tags);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Accounts_Section_Tag_Close');
  }
  filterAccount(Tags,No_Of_Employee,Industry,State,Country,RandomName,ENo_Of_Employee){
    cy.element_Click_based_on_inputXpath('Accounts_Section_Filter');
    cy.element_Click_based_on_inputXpath('Accounts_Section_Create_Filter');
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_Create_Filter_Sortby','#text#','Last Modified');
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Filter_Tags',Tags);
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_Filter_Select_Tag','#text#',Tags);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Clear_And_Send_Value_based_on_InputXpath('Accounts_Section_Create_Filter_Noofemp',No_Of_Employee)
    cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Filter_Industry',Industry);
    cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Filter_State',State);
    cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Filter_Country',Country);
    cy.element_Click_based_on_inputXpath('Accounts_Section_Create_Save_Filter');
    cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Save_Filter_Name',RandomName);
    cy.element_Click_based_on_inputXpath('Accounts_Section_Save_Filter');
    //Assertion
    cy.asserting_As_Xpath_Present('Accounts_Section_Save_Filter_Assertion');
    /*cy.element_Click_based_on_inputXpath('Accounts_Section_Filter');
    cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Search_Filter',RandomName);
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_View_Saved_Filter','#text#',RandomName);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.wait(3000)
    //Edit
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_Edit_Saved_Filter','#text#',RandomName);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Accounts_Section_Edit_Filter')
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_Create_Filter_Sortby','#text#','Created ');
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Clear_And_Send_Value_based_on_InputXpath('Accounts_Section_Create_Filter_Noofemp',ENo_Of_Employee);
    cy.element_Click_based_on_inputXpath('Accounts_Section_Update_Filter');
    cy.element_Click_based_on_inputXpath('Accounts_Section_Filter_Update');*/
    //Delete
    cy.element_Click_based_on_inputXpath('Accounts_Section_Filter');
    cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Search_Filter',RandomName);
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_Edit_Saved_Filter','#text#',RandomName);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Accounts_Section_Delete_Filter')
    cy.asserting_As_Xpath_Present('Accounts_Section_Delete_Filter_Assertion');


  }  
  deleteAccount(Website){
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_Delete','#text#',Website);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Accounts_Section_Delete_Confirmation');
    cy.wait(3000)
    
  }
  multipleDelete(Website1){
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_checkbox_Multiple','#text#',Website1);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Click_based_on_inputXpath('Accounts_Section_checkbox_Multiple_Delete');
    cy.element_Click_based_on_inputXpath('Accounts_Section_Delete_Confirmation');
  }
  searchAccount(Fullname){
    cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Search',Fullname)
    cy.wait(2000)
    //Assertion wheather the created contact visible
    cy.Returning_String_after_Find_and_Replace('Accounts_Section_Search_Assertion','#text#',Fullname);
    cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString))
  }
  createContact(Firstname, Lastname,Email,Title,Street,City,State,Country,Code,Linkedin,Facebook,Twitter,Tags,Fullname){
    //cy.element_Click_based_on_inputXpath('Contacts_Section_Create_Button');
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
    cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Tag',Tags);
    cy.Returning_String_after_Find_and_Replace('Contacts_Section_Select_Tag','#text#',Tags);
    cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
    cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Stage',"Cold");
    cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Create_Type',"Customer");
    cy.element_Click_based_on_inputXpath('Contacts_Section_Submit');
    
    //Assertion for contact created
    cy.asserting_As_Xpath_Present('Contactpage_Contactadded_Message');
    cy.element_Click_based_on_inputXpath('Accountpage_Accountadded_View_Close');
    cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
    cy.element_Click_based_on_inputXpath('Main_section_Contacts_Link');
    //Assertion wheather the created contact visible
    cy.Returning_String_after_Find_and_Replace('Contactpage_Contactadded_View','#text#',Email);
    cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    cy.element_Click_based_on_inputXpath('Main_section_Accounts_Link');
    //Assertion wheather the created contact with account visible
    cy.Returning_String_after_Find_and_Replace('Contacts_Section_Account_View','#text#',Fullname);
    cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
    cy.element_Click_based_on_inputXpath('Main_section_Accounts_Link');
    
  }
  existingWebsite(Fullname,Phone,Website){
    cy.element_Click_based_on_inputXpath('Accounts_Section_Create_Button');
    cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Fullname',Fullname);
    cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Website',Website);
    cy.element_Send_Value_based_on_InputXpath('Accounts_Section_Create_Phone',Phone);
    cy.element_Click_based_on_inputXpath('Accounts_Section_Create_Add');
    //Assertion for contact created
    cy.asserting_As_Xpath_Present('Accounts_Section_Already_Exist_Message');
    cy.wait(2000)
    cy.element_Click_based_on_inputXpath('Accounts_Section_Tag_Close');
  }
}
