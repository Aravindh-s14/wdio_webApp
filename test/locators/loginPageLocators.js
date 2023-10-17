class loginPageLocators {

    get emailField() {
        return $("//input[@id='email']");
    }

    get passwordField() {
        return $("//input[@type='password']");
    }

    get login() {
        return $("//button[text()='Login']");
    }

    get dashboardText(){
        return $("//h2[text()='Dashboard']");
    }

    get profileName(){
        return $("//span[text()='QA ']")
    }

    get logoutButton(){
        return $("//a[text()='Logout']")
    }

    get invalidEmailValidation(){
        return $("//span//strong")
    }

    get invalidPassword(){
        return $("//div[@aria-label='Password is wrong']")
    }

    get invalidPasswordLessthan(){
        return $("//span//strong")
    }

    get changePasswordButton(){
        return $("//a[text()='Change Password']")
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

    get invalidUser(){
        return $("//div[@aria-label='User not found']")
    }

}

module.exports = new loginPageLocators();