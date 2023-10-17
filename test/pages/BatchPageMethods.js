const find = require("../locators/BatchPageLocators");
const assert = require('assert');

class GroupPageMethod {
  async clickOnboarding() {
    await find.Onboardings.click();
  
  }
  async clickBatchPage() {
    await find.batch.click();
  }
  
  async clickAddGroup() {
    await find.create.click();
  }
  




  generateBatchName() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let randomString = '';
  
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      randomString += alphabet[randomIndex];
    }
  
    const batchName = 'Batch' + randomString.substring(0, 3); // Combines "Batch" with the first 3 characters of the random string
    return batchName;
  }
  
  async enterBatchName(batchName) {
    const generatedName = batchName || this.generateBatchName();
    await find.batchname.setValue(generatedName);
  }
    
  
  async clickAdd() {
    await find.Addbutton.click();
  }
  
  async clickClose() {
    await find.closebtn.click();
  }
  
  async clickNext() {
    await find.nextbtn.click();
  }
  
  async selectBatchName(batchName) {
    const dropdownElement = find.batchname;
    await dropdownElement.selectByVisibleText(batchName);
  }
  async clickKebabMenu() {
    await find.kebabmenu.click();
  }
  
  async clickEdit() {
    await find.edit.click();
  }
  async clickUpdate() {
    await find.updatebutton.click();
  }
  
  async selectEditBatch(batchName) {
    const dropdownElement = find.drpupdate;
    await dropdownElement.selectByVisibleText(batchName);
  }
  
  async clickUpdate() {
    await find.updatebutton.click();
  }
  
  async clickEllipsis() {
    await find.ellipsis.click();
  }
  
  async clickDelete() {
    await find.Deletebtn.click();
  }
  
  async clickConfirmDelete() {
    await find.confirmdelete.click();
  }
  async clickCancelDelete() {
    await find.canceldelete.click();
  }
  async clickSideMenu() {
    await find.side_menu.click();
  }
  
  async clickGroupList() {
    await find.grplist.click();
  }
  
  async selectBatchVisibility(batchName) {
    const dropdownElement = find.batch_vis;
    await dropdownElement.selectByVisibleText(batchName);
  }
  async searchFunction() {
    await find.Searchfield.click();
    await browser.keys(['ArrowDown', 'Enter']);
    await find.Searchbutton.click();
    await find.closesearch.click();
    await find.logo.click();
    await find.batch.click();
  }
  
  
  
  // Verification Methods
  
  async verifyGroupAddedSuccess() {
    const successMessage = await find.toastmsg.getText();
    assert.strictEqual(successMessage, 'Batch Added Successfully');
  }
  
  async verifyGroupUpdatedSuccess() {
    const successMessage = await find.toastmsg1.getText();
    assert.strictEqual(successMessage, 'Batch Updated Successfully');
  }
  async verifyInvalidBatchname() {
    const invalidbatchname = await find.invalidbatchname.getText();
    assert.strictEqual(invalidbatchname, 'Only alphabets and white spaces are allowed and white spaces are not allowed as the first and final character for input and not more than one space is allowed between words.');
  }
  
  // async verifyGroupDelete() {
  //   const successdelete = await find.successdelete.getText();
  //   const unsuccessdelete = await find.unsuccessdelete.getText();
  
  //   if (successdelete === 'Group deleted successfully') {
  //     assert.strictEqual(successdelete, 'Group deleted successfully');
  //   } else if (unsuccessdelete === 'Batch containing active groups so cannot be deleted') {
  //     assert.strictEqual(unsuccessdelete, 'Batch containing active groups so cannot be deleted');
  //     await find.unsuccessdeleteok.click(); // Assuming the "OK" button locator is find.unsuccessdeleteok
  //   } else {
  //     assert.fail('Unexpected message encountered');
  //   }
  // }


  async verifyGroupDelete() {
    try {
      await find.successdelete.waitForDisplayed();
      const successdelete = await find.successdelete.getText();
      assert.strictEqual(successdelete, 'Group deleted successfully');
    } catch (error) {
      try {
        await find.unsuccessdelete.waitForDisplayed();
        const unsuccessdelete = await find.unsuccessdelete.getText();
        assert.strictEqual(unsuccessdelete, 'Batch containing active groups so cannot be deleted');
        await find.unsuccessdeleteok.click(); // Assuming the "OK" button locator is find.unsuccessdeleteok
      } catch (error) {
        assert.fail('Unexpected message encountered');
      }
    }
  }
  
  
  
  
  
  async verifyGroupExists(groupName) {
    const groupElement = await $(`//div[text()='${groupName}']`);
    const exists = await groupElement.isExisting();
    assert.strictEqual(exists, true);
  }
  
  async verifyGroupNotExists(groupName) {
    const groupElement = await $(`//div[text()='${groupName}']`);
    const exists = await groupElement.isExisting();
    assert.strictEqual(exists, false);
  }
  async goToNextPageAndVerify() {
    const currentPage = await find.currentPage.getText();
    await find.nextPageButton.click();
    //await find.pageLoader.waitForDisplayed({ reverse: true }); // Wait for the page loader to disappear
  
    const nextPage = parseInt(currentPage) + 1;
    const updatedPage = await find.currentPage.getText();
  
    assert.strictEqual(updatedPage, "Page 2", "Next page is not displayed correctly");
  }
}

module.exports = new GroupPageMethod();
