class CommonUtilities {
  open() {
    browser.url("https://buddy-management-prod.innovaturelabs.com/login");
    browser.maximizeWindow();
  }

  clearField(locator) {
     $(locator).clearValue();
  }
  
  refreshPage(){
    browser.refresh();
  }

  async login(){
    await $("//input[@name='email']").setValue('qa.buddymanagement@gmail.com')
    await $("//input[@type='password']").setValue('BuddyBuddyBuddy@1234')
    await $("//button[text()='Login']").click()
    
    const wait = await $("//span[@class='profile-name']")
    await wait.waitForDisplayed()
  }
}
module.exports = new CommonUtilities();
