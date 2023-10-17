const CommonUtilities = require('../utilities/CommonUtilities')
const changePasswordMethods = require('../pages/changePasswordmethods');
const changePasswordLocators = require('../locators/changePasswordLocators');
const changePasswordmethods = require('../pages/changePasswordmethods');
const ChangePasswordData =require('../testdata/ChangePasswordData');

describe('Change Password Page Test Cases',()=>{
    before(() => {
        CommonUtilities.open()
        CommonUtilities.login()
    });
    it('CP_TC_01:Whether the user is abel to navigate to change password',async()=>{
        await changePasswordMethods.navigateToChangePassword()
    })

    it('CP_TC_02:Whether user able to change password by inputing incorrect password',async()=>{
        await changePasswordMethods.inputCurrentPassword(ChangePasswordData.CP_TC_2.inputCurrentPassword)
        await changePasswordMethods.inputNewPassword(ChangePasswordData.Mentor_TC_2.inputNewPassword)
        await changePasswordMethods.inputConfirmPassword(ChangePasswordData.Mentor_TC_2.inputConfirmPassword)
        await changePasswordMethods.submitButton()
        await changePasswordMethods.incorrectCurrentPasswordValidation()
    })

    it('CP_TC_03: Verify that user not able to send the request without current password',async()=>{
        CommonUtilities.clearField("//input[@placeholder='Enter your current password']")
        await changePasswordMethods.submitButton()
        await changePasswordMethods.incorrectCurrentPasswordValidation()
    })

    it('CP_TC_04:Verify whether able to change password with invalid password in new password field',async()=>{
        await changePasswordMethods.inputCurrentPassword(ChangePasswordData.CP_TC_4.inputCurrentPassword)
        await changePasswordMethods.inputNewPassword(ChangePasswordData.CP_TC_4.inputNewPassword)
        await changePasswordMethods.inputConfirmPassword(ChangePasswordData.CP_TC_4.inputConfirmPassword)
        await changePasswordMethods.invalidcurrentvalidation()
    })

    it('CP_TC_05:Verify whether pass accepts less than 8 characters',async ()=>{
        await changePasswordMethods.inputNewPassword(ChangePasswordData.CP_TC_5.inputNewPassword)
        await changePasswordMethods.currentLessthan8()
    })

    it('CP_TC_06:Verify whether the user is able to input more than 20 characters to new password',async()=>{
        await changePasswordMethods.inputNewPassword(ChangePasswordData.CP_TC_6.inputNewPassword)
        await changePasswordMethods.currentGreaterthan20()
    })

    it('CP_TC_07:Verify whether the user is able to use the same password again',async()=>{
        await changePasswordMethods.inputNewPassword(ChangePasswordData.CP_TC_7.inputNewPassword)
        await changePasswordMethods.inputConfirmPassword(ChangePasswordData.CP_TC_7.inputConfirmPassword)
        await changePasswordMethods.submitButton()
        await changePasswordMethods.samePassword()
    })

    it('CP_TC_08:Verify whether confirmpassword accepts invalid password',async()=>{
        await changePasswordMethods.inputConfirmPassword(ChangePasswordData.CP_TC_8.inputConfirmPassword)
        await changePasswordMethods.currentLessthan8()
    })

    it('CP_TC_09:Verify whether the usr is able to input more than 20 values in confirm fiekd',async()=>{
        await changePasswordMethods.inputConfirmPassword(ChangePasswordData.CP_TC_9.inputConfirmPassword)
        await changePasswordMethods.currentGreaterthan20()
    })

    it('CP_TC_10:Verify whether the user is abel to to change password succesfully, redirection',async()=>{
        await changePasswordMethods.inputNewPassword(ChangePasswordData.CP_TC_10.inputNewPassword)
        await changePasswordMethods.inputConfirmPassword(ChangePasswordData.CP_TC_10.inputConfirmPassword)
        await changePasswordMethods.submitButton()
        await changePasswordMethods.successVerify()
    })

    // it('CP_TC_11:Verify whether the user is able to login using the old password',async()=>{
    //     await changePasswordMethods.inputUserName(ChangePasswordData.CP_TC_11.inputUserName)
    //     await changePasswordmethods.inputPassword(ChangePasswordData.CP_TC_11.inputPassword)
    //     await changePasswordMethods.login()
    // })

    it('CP_TC_12:Verify whether the user is able to login using the new password',async()=>{
        await changePasswordMethods.inputUserName(ChangePasswordData.CP_TC_12.inputConfirmPassword)
        await changePasswordMethods.inputPassword(ChangePasswordData.CP_TC_12.inputPassword)
        await changePasswordMethods.login()
    })

    it('CP_TC_13:changeback to old password',async()=>{
        await changePasswordMethods.navigateToChangePassword()
        await changePasswordMethods.inputCurrentPassword(ChangePasswordData.CP_TC_13.inputCurrentPassword)
        await changePasswordMethods.inputNewPassword(ChangePasswordData.CP_TC_13.inputNewPassword)
        await changePasswordMethods.inputConfirmPassword(ChangePasswordData.CP_TC_13.inputConfirmPassword)
        await changePasswordMethods.submitButton()
        await changePasswordMethods.successVerify()
    })

})