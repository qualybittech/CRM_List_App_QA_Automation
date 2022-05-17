export class Sequences{
    navigateToSequences(){
        //cy.element_Click_based_on_inputXpath('Main_section_Expand_link');
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
    createEmailSteps(Description,Email_Sub,Step){
        cy.element_Click_based_on_inputXpath('Sequences_Section_Create_First_Step');
        //Email step
        cy.element_Click_based_on_inputXpath('Sequences_Section_Step_Next');
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Emailsub',Email_Sub);
        cy.element_Send_Value_based_on_InputXpath('Sequences_Section_Emailbody',Description);
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
        cy.element_Click_based_on_inputXpath('Sequences_Section_Back');
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
        //cy.asserting_As_Xpath_Present('Sequences_Deactivate_Assertion');

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
    }
    
    removeContacts(Firstname,Lastname){
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
    deleteSequences(Seq_Name){
        cy.element_Click_based_on_inputXpath('Sequences_Section_Back');
        cy.Returning_XPATH_value_based_on_XpathKey_Supplied('Sequences_Section_Delete');
        cy.get('@XpathvalueString').then(xpathString => {
		cy.element_Click_based_on_inputXpath(xpathString.replace('#text#',Seq_Name));
        cy.element_Click_based_on_inputXpath('Sequences_Section_Remove_Confirmation');
	    });
    }
}