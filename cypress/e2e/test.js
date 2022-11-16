import { Account } from "./components/accounts";
import { Util } from "./components/util";

describe('Account module ', () => {

  const accounts = new Account();

	before(function() {
    cy.exec("npm run refresh_Json_Test_data");	  
  })
  it('To validate the create account feature with valid datas ', function (){
    cy.request('GET', 'https://sales-qa-server.herokuapp.com/automation/deleteUser?email=0209harrypotter@gmail.com')
   cy.request({
    method: 'POST',
    url: 'https://sales-qa-server.herokuapp.com/v2/auth/register', // baseUrl is prepend to URL
    form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    body: {
        "firstname":'harry',
        "lastname":'potter',
        "email":'0209harrypotter@gmail.com',
        "password":'Haaaashini@98'
  },
  
})
})
it('To validate the create account feature with existing website', function (){
  cy.fixture('./JSON_TestData/Accounts_Testdata.json').then((json_TestDataData) => {
    for  (var jsonindex in json_TestDataData){
      accounts.emails()
 }
 })
})

})
