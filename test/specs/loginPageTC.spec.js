const loginPageMethod = require("../pages/loginPageMethods");
const CommonUtilities = require("../utilities/CommonUtilities");
const locators = require("../locators/loginPageLocators");
const LoginData = require('../testdata/LoginPageData');
//const loginPageMethods = require("../pages/loginPageMethods");

describe(" Login Page TestCases", async () => {
  it("Login_TC_01: Successfully Login using valid credentials", async () => {
    CommonUtilities.open();
    await loginPageMethod.enterEmail(LoginData.Login_TC_01.enterEmail);
    await loginPageMethod.enterPassword(LoginData.Login_TC_01.enterPassword);
    await loginPageMethod.login();
    await loginPageMethod.verifyLogin();
  });

  it("Login_TC_02:Verify whether the user is able to logout", async () => {
    await loginPageMethod.logout();
    await loginPageMethod.verifyLogout();
  });

  it("Login_TC_03:Verify whether the user is abel to login using invalid email-Id", async () => {
    await loginPageMethod.enterEmail(LoginData.Login_TC_03.enterEmail);
    await loginPageMethod.enterPassword(LoginData.Login_TC_03.enterPassword)
    await loginPageMethod.verifyInvalidEmail()
  });

  it('Login_TC_04:Verify whether the user is able to login with invalid password',async()=>{
    CommonUtilities.clearField(locators.emailField);
    await loginPageMethod.enterEmail(LoginData.Login_TC_04.enterEmail);
    CommonUtilities.clearField(locators.passwordField);
    await loginPageMethod.enterPassword(LoginData.Login_TC_04.enterPassword);
    await loginPageMethod.login()
    await loginPageMethod.invalidPassword()
  });

  it("Login_TC_05:Verify whether the user is able to login without username and password", async()=>{
    CommonUtilities.refreshPage()
    loginPageMethod.buttonEnabled();
  });

  it("Login_TC_06:Verify whether the user is abel to login without emailid",async ()=>{
    await loginPageMethod.enterPassword(LoginData.Login_TC_06.enterPassword);
    loginPageMethod.buttonEnabled();
  })

  it("Login_TC_07:verify whether the user is able to login without password",async()=>{
    await loginPageMethod.enterEmail(LoginData.Login_TC_07.enterEmail);
    CommonUtilities.clearField(locators.passwordField)
    loginPageMethod.buttonEnabled();
  })

  it("Login_TC_08:Verify whether error message is returned when invalid password is entered",async()=>{
    await loginPageMethod.enterPassword(LoginData.Login_TC_08.enterPassword)
    await loginPageMethod.invalidPasswordlessthan()
  })

  it('Login_TC_09:Verify login with new password',async ()=>{
    CommonUtilities.refreshPage()
    //CommonUtilities.clearField(locators.enterEmail)
    await loginPageMethod.enterEmail(LoginData.Login_TC_09.enterEmail)
    //CommonUtilities.clearField(locators.passwordField)
    await loginPageMethod.enterPassword(LoginData.Login_TC_09.enterPassword1)
    await loginPageMethod.login()
    await loginPageMethod.setCurrentPassword(LoginData.Login_TC_09.setCurrentPassword)
    await loginPageMethod.setNewPassword(LoginData.Login_TC_09.setNewPassword)
    await loginPageMethod.setConfirmPassword(LoginData.Login_TC_09.setConfirmPassword)
    await loginPageMethod.submit()
    await loginPageMethod.enterEmail(LoginData.Login_TC_09.enterEmail)
    await loginPageMethod.enterPassword(LoginData.Login_TC_09.enterPassword)
    await loginPageMethod.login()
    await loginPageMethod.verifyLogin()
  })

  it("Login_TC_10:Verify whether the user is able to revert back to old password",async ()=>{
    await loginPageMethod.setCurrentPassword(LoginData.Login_TC_10.setCurrentPassword)
    await loginPageMethod.setNewPassword(LoginData.Login_TC_10.setNewPassword)
    await loginPageMethod.setConfirmPassword(LoginData.Login_TC_10.setConfirmPassword)
    await loginPageMethod.submit()
    await loginPageMethod.enterEmail(LoginData.Login_TC_10.enterEmail)
    await loginPageMethod.enterPassword(LoginData.Login_TC_10.enterPassword)
    await loginPageMethod.login()
  })
  
  it("Login_TC_11:Verify whether the user is able to login using old password",async ()=>{
    await loginPageMethod.logout();
    await loginPageMethod.enterEmail(LoginData.Login_TC_11.enterEmail)
    await loginPageMethod.enterPassword(LoginData.Login_TC_11.enterPassword)
    await loginPageMethod.login()
    await loginPageMethod.invalidPassword()
  })

  it("Login_TC_12:Verify whether the user is able to login with unregistered email",async ()=>{
    CommonUtilities.refreshPage()
    await loginPageMethod.enterEmail(LoginData.Login_TC_12.enterEmail)
    await loginPageMethod.enterPassword(LoginData.Login_TC_12.enterPassword)
    await loginPageMethod.login()
    await loginPageMethod.unregisteredUser()
  })
});
