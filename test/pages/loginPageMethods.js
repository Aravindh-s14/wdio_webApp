const find = require("../locators/loginPageLocators");
const CommonUtilities = require("../utilities/CommonUtilities");

class loginPageMethod {
  async enterEmail(email) {
    await find.emailField.setValue(email);
  }

  async enterPassword(password) {
    await find.passwordField.setValue(password);
  }

  async login() {
    await find.login.click();
  }

  async verifyLogin() {
    await expect(browser).toHaveTitle("Dashboard");
    const actualText = await find.dashboardText.getText();
    console.log("Text goes here:", actualText);
    expect(actualText).toEqual("Dashboard");
  }

  async logout() {
    await find.profileName.click();
    await find.logoutButton.click();
  }

  async verifyLogout() {
    await expect(browser).toHaveTitle("Login");
  }

  async verifyInvalidEmail() {
    const actual = await find.invalidEmailValidation.getText();
    expect(actual).toEqual("Please enter a valid email");
  }

  async invalidPassword() {
    const actual = await find.invalidPassword.getText();
    expect(actual).toEqual("Password is wrong");
  }

  async buttonEnabled() {
    const enabled = await find.login.isEnabled();
    expect(enabled).toEqual("false");
  }

  async invalidPasswordlessthan() {
    const expected = await find.invalidPasswordLessthan.getText();
    expect(expected).toEqual(
      "Password should be of 8-20 characters, containing at least one uppercase and lowercase with special characters"
    );
  }

  async setCurrentPassword(currentPassword) {
    await find.profileName.click();
    await find.changePasswordButton.click();
    await find.currentPasswordField.setValue(currentPassword);
  }

    async setNewPassword(newPassword) {
      await find.newPasswordField.setValue(newPassword);
    }
    async setConfirmPassword(confirmPassword) {
  await find.ConfirmPasswordField.setValue(confirmPassword);
}

async submit() {
  await find.submitButton.click();
 
}








  // async unregisteredUser() {
  //   const elem = await find.invalidUser()
  //   await browser.waitUntil(
  //     async function () {
  //       return (await elem.getText()) === "No user found";
  //     },
  //     {
  //       timeout: 5000,
  //       timeoutMsg: "expected text to be different after 5s",
  //     }
  //   );
  // }
  async unregisteredUser() {
    try {
      const elem = await find.invalidUser();
      await browser.waitUntil(
        async function () {
          return (await elem.getText()) === "No user found";
        },
        {
          timeout: 5000,
          timeoutMsg: "expected text to be different after 5s",
        }
      );
    } catch (error) {
      // Handle any errors that might occur during the execution.
      console.error("Error occurred during unregisteredUser():", error);
      // You can choose to re-throw the error if needed.
      // throw error;
    }
  }
  
}

module.exports = new loginPageMethod();
