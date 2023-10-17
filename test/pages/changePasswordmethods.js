const changePasswordLocators = require('../locators/changePasswordLocators')

class changePasswordMethods{

    async navigateToChangePassword(){
        await changePasswordLocators.profileName.click()
        await changePasswordLocators.changePasswordButton.click()
        const actual = await changePasswordLocators.chnagepasswordText.getText()
        expect(actual).toEqual('Please change your password.')
    }

    async inputCurrentPassword(currentpassword){
        await changePasswordLocators.currentPasswordField.setValue(currentpassword)
    }

    async inputNewPassword(newpassword){
        await changePasswordLocators.newPasswordField.setValue(newpassword)
    }

    async inputConfirmPassword(confirmPassword){
        await changePasswordLocators.ConfirmPasswordField.setValue(confirmPassword)
    }

    async submitButton(){
        await changePasswordLocators.submitButton.click()
    }

    async incorrectCurrentPasswordValidation(){
        const actual = await changePasswordLocators.incorrectCurrentPassword.getText()
        expect(actual).toEqual('Current password is not correct')
        console.log(actual)
    }

    async noCurrentPassword(){
        const actual = await changePasswordLocators.currentFieldValidation.getText()
        expect(actual).toEqual('Password is requiredd')
        console.log(actual)
        const actual1 = await changePasswordLocators.submitButton.isEnabled()
        console.log(actual1)
        expect(actual1).toEqual('false')
    }

    async invalidcurrentvalidation(){
        const actual = await changePasswordLocators.currentPasswordValidation.getText()
        expect(actual).toEqual('Must contain atleast 1 capital letter, 1 small letter, number , special symbol etc.')
    }

    async currentLessthan8(){
        const actual = await changePasswordLocators.currentLessthan8.getText()
        expect(actual).toEqual('Password must have 8 letters')
    }

    async currentGreaterthan20(){
        const actual = await changePasswordLocators.currentGreaterthan20.getText()
        expect(actual).toEqual('Password must not exceed 20 charaters')
    }

    async samePassword(){
        const actual = await changePasswordLocators.samepassword.getText()
        expect(actual).toEqual('Entered password same as previous password')
    }

    async successVerify(){
        const actual = await changePasswordLocators.successMessage.getText()
        expect(actual).toEqual('Password successfully changed')
        const urlActual = await browser.getUrl()
        expect(urlActual).toEqual("https://buddy-management-prod.innovaturelabs.com/login")
    }

    async verifyLogin(){
        const urlActual = await browser.getUrl()
        expect(urlActual).toEqual('https://buddy-management-prod.innovaturelabs.com/dashboard')
    }



    /* -------------------------------------------------------------------------- */
    /*                                Login Method                                */
    /* -------------------------------------------------------------------------- */

    async inputUserName(email){
        await changePasswordLocators.emailField.setValue(email)
    }

    async inputPassword(password){
        await changePasswordLocators.passwordField.setValue(password)
    }

    async login(){
        await changePasswordLocators.login()
    }
}

module.exports = new changePasswordMethods()