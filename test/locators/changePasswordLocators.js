class changePasswordLocators{
    get profileName(){
        return $("//span[@class='profile-name']")
    }

    get changePasswordButton(){
        return $("//a[@href='/change_password']")
    }

    get currentPasswordField(){
        return $("//input[@placeholder='Enter your current password']")
    }

    get newPasswordField(){
        return $("//input[@placeholder='Enter your new password']")
    }

    get ConfirmPasswordField(){
        return $("//input[@placeholder='Confirm your new password']")
    }

    get submitButton(){
        return $("//button[text()=' Submit ']")
    }

    get chnagepasswordText(){
        return $("//span[@class='splash-description']")
    }

    get incorrectCurrentPassword(){
        return $("//div[@aria-label='Current password is not correct']")
    }

    get currentFieldValidation(){
        return $("//strong[text()='Password is required']")
    }

    get currentPasswordValidation(){
        return $("//strong[contains(text(),'Must contain atleast 1 capital letter, 1 small let')]")
    }

    get currentLessthan8(){
        return $("//strong[text()='Password must have 8 letters']")
    }

    get currentGreaterthan20(){
        return $("//strong[text()='Password must not exceed 20 charaters']")
    }

    get samepassword(){
        return $("//div[@aria-label='Entered password same as previous password']")
    }

    get successMessage(){
        return $("//div[@aria-label='Password successfully changed']")
    }


    /* -------------------------------------------------------------------------- */
    /*                               Login locators                               */
    /* -------------------------------------------------------------------------- */


    get emailField() {
        return $("//input[@name='email']");
    }

    get passwordField() {
        return $("//input[@type='password']");
    }

    get login() {
        return $("//button[text()='Login']");
    }
 
}

module.exports = new changePasswordLocators();