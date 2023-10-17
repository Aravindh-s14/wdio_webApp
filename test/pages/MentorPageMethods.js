const find = require("../locators/MentorPageLocators");
const assert = require('assert');
const fs = require('fs');
const path = require('path');

class MentorPageMethod {
  async scrollToTop() {
    await browser.execute(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  async clickAccountManagement() {
    await find.accountmanagement.click();
    await find.mentormanagement.click();
  }
  
  async clickRegisterMentor() {
    await find.registermentor.click();
  }
  
  async enterFirstName(firstname) {
    await find.firstnamefield.setValue(firstname);
  }
  
  async firstNameClick(firstname) {
    await find.firstnamefield.click();
  }
  
  async enterLastName(lastname) {
    await find.lastnamefield.setValue(lastname);
  }



  async clickImportOrExportButton() {
    // await this.scrollToTop(); // Scroll to the top of the page
    await find.importorexportbutton.click();
  }
  async clickDownloadCSVButton() {
    await find.downloadcsvbutton.click();
  }
  async scrollToElement(element) {
    await browser.execute((elem) => {
      elem.scrollIntoView();
    }, element);
  }



  async verifyFileDownloaded() {
    const downloadPath = 'C:/webdriverIO/downloads'; // Set the download folder path
    const fileName="Mentor.csv"
    const filePath = path.join(downloadPath, fileName);

    // Wait for the file to be downloaded (you can implement a suitable wait here)

    // Check if the file exists
    const fileExists = fs.existsSync(filePath);
    assert.strictEqual(fileExists, true, `File "${fileName}" was not downloaded`);

    // // Read the file contents
    // const fileContent = fs.readFileSync(filePath, 'utf-8');

    // // Perform your verification on the file content
    // // Example: Assert that the file content contains a specific string
    // assert.ok(fileContent.includes('Expected content'), `File "${fileName}" does not contain the expected content`);
  }
  generateEmail() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let randomString = '';

    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      randomString += alphabet[randomIndex];
    }

    return `${randomString}@example.com`;
  }
  
  async enterEmail() {
    const generatedEmail = this.generateEmail();
    await find.emailfield.setValue(generatedEmail);
  }
  async enterInvalidEmail(email) {
    //const generatedEmail = email??this.generateEmail();
    await find.emailfield.setValue(email);
  }
  generateEmployeeID() {
    const randomID = Math.floor(Math.random() * 900000) + 100000; // Generates a random 6-digit number
    return randomID;
  }
  async enterEmployeeID() {
    const generatedID =this.generateEmployeeID();
    await find.employeeIDfield.setValue(generatedID);
  }
  async enterInvalidEmployeeID(employeeID) {
    //const generatedID = employeeID || this.generateEmployeeID();
    await find.employeeIDfield.setValue(employeeID);
  }

  async selectDepartent() {
    const dropdownElement = find.depdropdown;
    await dropdownElement.selectByVisibleText("QA");
  }
  

  async clickRegister() {
    await find.register.click();
  }
  async clickKebabMenu() {
    await find.kebabmenu.click();
  }
  async clickDeleteOption() {
    await find.deleteoption.click();
  }
  async clickCancelDelete() {
    await find.canceldelete.click();
  }
  async clickConfirmDelete() {
    await find.confirmdelete.click();
  }


  async clickEditOption() {
    await find.editoption.click();
  }


  async editFirstName(editfirstname) {
    await find.editfirstnamefield.setValue(editfirstname);
  }

  async editLastname(editlastname) {
    await find.lastnamefield.setValue(editlastname);
  }
  async editEmail(editemail) {
    await find.employeeIDfield.setValue(editemail);
  }
  async editEmployeeID(editmployeeID) {
    await find.employeeIDfield.setValue(editmployeeID);
  }
  async clickUpdate() {
    await find.update.click();
  }
  async clearFirstNameField() {
    await find.update.click();
  }
  async goToNextPageAndVerify() {
    const currentPage = await find.currentPage.getText();
    await find.nextPageButton.click();
    //await find.pageLoader.waitForDisplayed({ reverse: true }); // Wait for the page loader to disappear
  
    const nextPage = parseInt(currentPage) + 1;
    const updatedPage = await find.currentPage.getText();
  
    assert.strictEqual(updatedPage, "Page 2", "Next page is not displayed correctly");
  }
 


  //Verification Methods

  async verifyMentorRegistrationSuccess() { // Add assertion to validate the successful registration message
    const successMessage = await find.registersuccessfully.getText();
    assert.strictEqual(successMessage, 'Registered Successfully');
  }
  async verifyInvalidFirstName() { 
    const Message =await find.invalidfirstname.getText();
    assert.strictEqual(Message, 'Only alphabets and white spaces are allowed and white spaces are not allowed as the first and final character for input and not more than one space is allowed between words.');
  }
  async verifyInvalidLastName() { 
    const Message = await find.invalidlastname.getText();
    assert.strictEqual(Message, 'Only alphabets and white spaces are allowed and white spaces are not allowed as the first and final character for input and not more than one space is allowed between words.');
  }
  async verifyInvalidEmail() {
    const Message = await find.invalidemail.getText();
    assert.strictEqual(Message, 'Please enter a valid email');
  }
  async verifyInvalidEmployeeID() { // 
    const Message = await find.invalidemployeeid.getText();
    assert.strictEqual(Message, 'Employee ID should be in digits.');
  }
  async UpsatedSuccessfully() { // 
    const Message = await find.invalidemployeeid.getText();
    assert.strictEqual(Message, '');
  }
  async emptyFirstName() { // 
    const Message = await find.emptyfirstname.getText();
    assert.strictEqual(Message, 'First Name is required');
  }
  async verifyDelete() { // 
    const Message = await find.verifydelete.getText();
    assert.strictEqual(Message, 'Deleted successfully');
  }
  async verifyUpdate() { // 
    const Message = await find.verifyupdate.getText();
    assert.strictEqual(Message, 'Updated Successfully');
  }


  
}

module.exports = new MentorPageMethod();
