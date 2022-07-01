import { Register } from "./components/register";

describe('Testing Successful login in Application', () => {

    const register = new Register();

    before(function() {
        cy.exec("npm run refresh_Json_Test_data");	  
      })
      beforeEach(()=>{
        cy.fixture('./JSON_TestData/Register_Testdata.json').then((json_TestDataData) => {
          for  (var jsonindex in json_TestDataData){
            cy.launch_Application();
            cy.asserting_As_Xpath_Present("Register_Section_Login_Text")
       }
       })
    })
      it('Sign up with email id & password', function (){
        cy.fixture('./JSON_TestData/Register_Testdata.json').then((json_TestDataData) => {
        for  (var jsonindex in json_TestDataData){
            register.Api();
            register.signupUsingEmailid(json_TestDataData[jsonindex].Firstname,json_TestDataData[jsonindex].Lastname,
                json_TestDataData[jsonindex].Emailid,json_TestDataData[jsonindex].Password);
            register.signupUsingEmailid(json_TestDataData[jsonindex].Firstname,json_TestDataData[jsonindex].Lastname,
                json_TestDataData[jsonindex].Msft,json_TestDataData[jsonindex].Password);
    
        }
        })
      })
})