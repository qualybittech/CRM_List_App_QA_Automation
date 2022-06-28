export class Sequences{
    navigateToSequences(){
        cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
        cy.element_Click_based_on_inputXpath('Main_section_Sequences_Link');

    }
    createSequences(Seq_Name){
        cy.element_Click_based_on_inputXpath('Sequences_Section_Create_Button');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Sequences_Type');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Create_First_Step');
        cy.asserting_As_Xpath_Present('Sequences_Section_Name_Required');
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Sequences_Name',Seq_Name);
    }
    editSequences(Seq_Name){
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Edit_Name',Seq_Name);
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Sequences_Section_Edit',Seq_Name);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Back');

    }
    createEmailSteps(Description,Email_Sub,Step,PersonalTemplate,TeamTemplate,PersonalSnippet,TeamSnippet,file){
        cy.element_Click_based_on_inputXpath('Sequences_Section_Create_First_Step');
        //Email step
        cy.element_Click_based_on_inputXpath('Sequences_Section_Step_Next');
       // cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Emailsub',Email_Sub);
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Emailbody',Description);
       // cy.element_Click_based_on_inputXpath('Sequences_Section_Step_Add');
         //Templates
       cy.element_Click_based_on_inputXpath('Contacts_Section_Add_Template');
       cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Search_Template',PersonalTemplate)
       cy.Returning_String_after_Find_and_Replace('Contacts_Section_Select_Template','#text#',PersonalTemplate);
       cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
       cy.element_Click_based_on_inputXpath('Contacts_Section_Add_Template');
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
          cy.get('#attachments').attachFile(file);          
          //Assertion
          cy.element_Click_based_on_inputXpath('Templates_Section_Attachments');
          cy.Returning_String_after_Find_and_Replace('Templates_Section_Attachments_Assertion','#text#',file);
          cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
          cy.element_Click_based_on_inputXpath('Templates_Section_Attachments');
          cy.get('.wsywgi-form > .justify-between > .gap-2 > :nth-child(2) > .flex').should('not.be.disabled')
          cy.get('.gap-2 > :nth-child(3) > .flex').should('not.be.disabled')
          cy.element_Click_based_on_inputXpath('Sequences_Section_Step_Add');

          //Assertion
        cy.asserting_As_Xpath_Present('Sequences_Section_Added_Assertion');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Email_Sub).replace('#text_2#',Step));
	    });
    }
    createCallSteps(Description,Step){
        // Call step
        cy.element_Click_based_on_inputXpath('Sequences_Section_Create_Step');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Call_Step');
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Step_Add');
        //Assertion
        cy.asserting_As_Xpath_Present('Sequences_Section_Step_Added_Assertion');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
    }
    createLinkedinSteps(Description,Linkedin,Step){
        // Linkedin step
        cy.element_Click_based_on_inputXpath('Sequences_Section_Create_Step');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Linkedin_Step');
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Linkedin_Touchtype',Linkedin);
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Step_Add');
        //Assertion
        cy.asserting_As_Xpath_Present('Sequences_Section_Step_Added_Assertion');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
    }
    createSmsSteps(Description,Step){
        // SMS step
        cy.element_Click_based_on_inputXpath('Sequences_Section_Create_Step');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Sms_Step');
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Step_Add');
        //Assertion
        cy.asserting_As_Xpath_Present('Sequences_Section_Step_Added_Assertion');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
    }
    createTwitterSteps(Description,Twitter,Step){
        // Twitter step
        cy.element_Click_based_on_inputXpath('Sequences_Section_Create_Step');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Twitter_Step');
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Linkedin_Touchtype',Twitter);
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Step_Add');
        //Assertion
        cy.asserting_As_Xpath_Present('Sequences_Section_Step_Added_Assertion');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
    }
    createWhatsappSteps(Description,Step){
        // Whatsapp step
        cy.element_Click_based_on_inputXpath('Sequences_Section_Create_Step');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Whatsapp_Step');
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Step_Add');
        //Assertion
        cy.asserting_As_Xpath_Present('Sequences_Section_Step_Added_Assertion');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
    }
    createMeetingSteps(Description,Step){
        // Meeting step
        cy.element_Click_based_on_inputXpath('Sequences_Section_Create_Step');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Meeting_Step');
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Description',Description);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Step_Add');
        //Assertion
        cy.asserting_As_Xpath_Present('Sequences_Section_Step_Added_Assertion');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
        
    }
    editEmailSteps(Description,Step,Editeddescription){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Edit_Step');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Step_Next');
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Sequences_Section_Emailbody',Editeddescription);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit_Update');
        //Assertion
        cy.asserting_As_Xpath_Present('Sequences_Section_Step_Edited_Assertion');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
    }
    editCallSteps(Description,Step,Editeddescription){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Edit_Step');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit');
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Sequences_Section_Description',Editeddescription);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit_Update');
        //Assertion
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Editeddescription).replace('#text_2#',Step));
	    });
    }
    editLinkedinSteps(Description,Step,Editeddescription){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Edit_Step');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit');
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Sequences_Section_Description',Editeddescription);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit_Update');
        //Assertion
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Editeddescription).replace('#text_2#',Step));
        })
    }
    editSmsSteps(Description,Step,Editeddescription){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Edit_Step');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit');
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Sequences_Section_Description',Editeddescription);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit_Update');
        //Assertion
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Editeddescription).replace('#text_2#',Step));
        })
    }
    editTwitterSteps(Description,Step,Editeddescription){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Edit_Step');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit');
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Sequences_Section_Description',Editeddescription);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit_Update');
        //Assertion
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Editeddescription).replace('#text_2#',Step));
        })
    }
    editWhatsappSteps(Description,Step,Editeddescription){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Edit_Step');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit');
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Sequences_Section_Description',Editeddescription);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit_Update');
        //Assertion
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Editeddescription).replace('#text_2#',Step));
        })
    }
    editMeetingSteps(Description,Step,Editeddescription){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Edit_Step');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit');
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Sequences_Section_Description',Editeddescription);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Edit_Update');
        //Assertion
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Step_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Editeddescription).replace('#text_2#',Step));
        })
    }
    deleteEmailSteps(Description,Step){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Edit_Step');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
        cy.element_Click_based_on_inputXpath('Sequences_Section_Delete');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Delete_Confirm');
    }
    deleteCallSteps(Description,Step){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Edit_Step');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Description).replace('#text_2#',Step));
	    });
        cy.element_Click_based_on_inputXpath('Sequences_Section_Delete');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Delete_Confirm');
    }
    activateSequences(Seq_Name){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Activate');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Seq_Name));
        })
        cy.asserting_As_Xpath_Present('Sequences_Activate_Assertion');
    }
    deactivateSequences(Seq_Name){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Deactivate');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Seq_Name));
        })
        cy.asserting_As_Xpath_Present('Sequences_Deactivate_Assertion');

    }
    selectSequences(Seq_Name){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Select');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Seq_Name));
        })
    }
    assignContacts(Firstname,Lastname){
        cy.element_Click_based_on_inputXpath('Sequences_Section_Contacts')
        cy.element_Click_based_on_inputXpath('Sequences_Section_Add_Contact')
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Assign_Contact',Lastname)
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Select_Contact');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Firstname).replace('#text_2#',Lastname));
	    });
        cy.element_Click_based_on_inputXpath('Sequences_Section__Assign_Contact_Add')
        cy.asserting_As_Xpath_Present('Sequences_Section_Assign_Contact_Message')
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Assign_Contact_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Firstname).replace('#text_2#',Lastname));
	    });
        cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
    }
    viewContactSeq(Firstname,Lastname,Seq_Name){
        cy.element_Click_based_on_inputXpath('Sequences_Section_Contacts')
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Contact_View');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Firstname).replace('#text_2#',Lastname));
        })
	    cy.element_Click_based_on_inputXpath('Contactpage_Contactadded_View_Expand');
        cy.element_Click_based_on_inputXpath('Contacts_Section_View_Sequences');
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_Sequences_Assertion','#text#',Seq_Name);
        cy.get('@convertedString').then(convertedString => cy.asserting_As_Xpath_Present(convertedString));
        cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
        cy.element_Click_based_on_inputXpath('Contactpage_Contactadded_View_Close');

    }
    taskSequencesPresent(Contact,Seq_Name,d2,d3,d4,d5,d6,d7){
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Tasks_Section_Search',Contact);
        //Assertion As Seq name present
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Seq_Name');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Seq_Name));
        })
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Description');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Present(xpathString.replace('#text#',d2));
        });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Description');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Present(xpathString.replace('#text#',d3));
        });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Description');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Present(xpathString.replace('#text#',d4));
        });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Description');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Present(xpathString.replace('#text#',d5));
        });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Description');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Present(xpathString.replace('#text#',d6));
        });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Description');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Present(xpathString.replace('#text#',d7));
        });

    }
    taskSequencesAbsent(Contact,Seq_Name,d2,d3,d4,d5,d6,d7){
        cy.element_Clear_And_Send_Value_based_on_InputXpath('Tasks_Section_Search',Contact);
        /*Assertion As Seq name present
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Seq_Name');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Not_Present(xpathString.replace('#text#',Seq_Name));
        })
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Description');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Not_Present(xpathString.replace('#text#',d2));
        });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Description');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Not_Present(xpathString.replace('#text#',d3));
        });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Description');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Not_Present(xpathString.replace('#text#',d4));
        });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Description');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Not_Present(xpathString.replace('#text#',d5));
        });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Description');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Not_Present(xpathString.replace('#text#',d6));
        });
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Task_Description');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Not_Present(xpathString.replace('#text#',d7));
        });*/
        cy.asserting_As_Xpath_Present('Sequences_Section_No_Data');

    }
    completeTaskSequences(d3,d2,Seq_Name,Firstname,Lastname){
        //Complete linked in task
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Complete');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',d3));
        });
        //Assertion linked in completed
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Complete_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Present(xpathString.replace('#text#',d3));
        });
        //Assertion call skipped
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Skip_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Present(xpathString.replace('#text#',d2));
        });
        cy.element_Click_based_on_inputXpath('Main_section_Sequences_Link');
        //Select Seq
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Select');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Seq_Name));
        })
    
        //Contact
        cy.element_Click_based_on_inputXpath('Sequences_Section_Contacts')
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Update_Task');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Firstname).replace('#text_2#',Lastname));
        })

    }
    notCompleteTaskSequences(d3,d2,Seq_Name,Firstname,Lastname){
        //Complete linked in task
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Notcomplete');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',d3));
        });
        //Assertion linked in completed
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Notcomplete_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Present(xpathString.replace('#text#',d3));
        });
        //Undoskip
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Undoskip');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',d2));
        });

        //Assertion Undo skip
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Undoskip_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
         cy.asserting_As_Xpath_Present(xpathString.replace('#text#',d2));
        });
        cy.element_Click_based_on_inputXpath('Main_section_Sequences_Link');
        //Select Seq
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Select');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Seq_Name));
        })
    
        //Contact
        cy.element_Click_based_on_inputXpath('Sequences_Section_Contacts')
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Updated_Task');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Firstname).replace('#text_2#',Lastname));
        })
        
    }
    outBox(Email,Seq_Name){
        cy.element_Click_based_on_inputXpath('Main_Section_Outbox_Link');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequence_Section_Outbox_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
        cy.asserting_As_Xpath_Present(xpathString.replace('#text#',Email).replace('#text_2#',Seq_Name));
        })

    }
    removeContacts(Firstname,Lastname){
        cy.element_Click_based_on_inputXpath('Sequences_Section_Contacts')
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Select_Assigned_Contact');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Firstname).replace('#text_2#',Lastname));
	    });
        cy.element_Click_based_on_inputXpath('Sequences_Section_Remove_Contact');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Remove_Confirmation');
        cy.asserting_As_Xpath_Present('Sequences_Section_Remove_Assertion');
    }
    settingsSequences(Time){
        cy.element_Click_based_on_inputXpath('Sequences_Section_Settings');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Settings_Sun');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Settings_Sat');
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Settings_Time',Time);
        cy.element_Click_based_on_inputXpath('Sequences_Section_Settings_Reply_To_Email');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Settings_Save');
        cy.asserting_As_Xpath_Present('Sequences_Section_Settings_Assertion')

    }
    cloneSequences(Seq_Name){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Clone_Sequence');
       cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Seq_Name));
       });
       cy.element_Click_based_on_inputXpath('Sequences_Section_Remove_Confirmation');
      //Assertion
       cy.asserting_As_Xpath_Present('Sequences_Section_Clone_Sequence_Assertion')
       cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Cloned_Sequence');
       cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Seq_Name));
       });

    }
    deleteSequences(Seq_Name){
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Delete_Sequence');
       cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Seq_Name));
        cy.element_Click_based_on_inputXpath('Sequences_Section_Remove_Confirmation');
	    });
      //Assertion
      cy.asserting_As_Xpath_Present('Sequences_Section_Delete_Sequence_Assertion')

    }
    Email(Email,Email_Sub,Description,PersonalSnippet,TeamSnippet,PersonalTemplate,TeamTemplate,file){
        cy.Returning_String_after_Find_and_Replace('Contacts_Section_View','#text#',Email);
        cy.get('@convertedString').then(convertedString => cy.element_Click_based_on_inputXpath(convertedString));
	    cy.element_Click_based_on_inputXpath('Contactpage_Contactadded_View_Expand');
	    cy.element_Click_based_on_inputXpath('Contacts_Section_View_Send_Email');
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Emailsub',Email_Sub);
        cy.element_Send_Value_based_on_InputXpath('Contacts_Section_Emailbody',Description);
    }
    uploadContact(file){
        cy.element_Click_based_on_inputXpath('Sequences_Section_Upload_Contact');
        cy.get('#file-upload--input').attachFile(file);
        cy.wait(2000)
        cy.element_Click_based_on_inputXpath('Contacts_Section_Upload_Next');
        cy.element_Click_based_on_inputXpath('Sequences_Section_Upload_Confirm');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Assign_Contact_Assertion');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.asserting_As_Xpath_Present(xpathString.replace('#text#','1').replace('#text_2#','a'));
	    });

    }
}