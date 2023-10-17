const BatchpageMethod = require('../pages/BatchPageMethods');
const CommonUtilities = require('../utilities/CommonUtilities');
const BatchpageData = require('../testdata/BatchPageData');
const fs = require('fs');

describe('Batch Page Test Cases', function () 
{
   // Move the login and setup actions to the 'before' hook
    before(() => {
        CommonUtilities.open();
        CommonUtilities.login();
    });


    it('Batch_TC_01: Open the batch page', async function () {
        await BatchpageMethod.clickOnboarding();
        await BatchpageMethod.clickBatchPage();

    });

    it('Batch_TC_02: Search with Valid search key', async function () {
        await BatchpageMethod.searchFunction();

    });


    it('Batch_TC_03: cancel Delete batch', async function () {
        await BatchpageMethod.clickEllipsis();
        await BatchpageMethod.clickDelete();
        await BatchpageMethod.clickCancelDelete();
    });
    it('Batch_TC_04: Delete batch', async function () {
        await BatchpageMethod.clickEllipsis();
        await BatchpageMethod.clickDelete();
        await BatchpageMethod.clickConfirmDelete();
        await BatchpageMethod.verifyGroupDelete();
    });


    it('Batch_TC_05: Edit batch', async function () {
        await BatchpageMethod.clickEllipsis();
        await BatchpageMethod.clickEdit();
        //await BatchpageMethod.enterBatchName();
        await BatchpageMethod.clickUpdate();
        await BatchpageMethod.verifyGroupUpdatedSuccess();
    });
    it('Batch_TC_06: Create batch with valid credentials', async function () {
        await BatchpageMethod.clickAddGroup();
        await BatchpageMethod.enterBatchName();
       // await BatchpageMethod.selectBatch();
        await BatchpageMethod.clickAdd();
        await BatchpageMethod.verifyGroupAddedSuccess();
    });
    
    it('Batch_TC_07: cancel batch creation', async function () {
        await BatchpageMethod.clickAddGroup();
        await BatchpageMethod.enterBatchName();
       // await BatchpageMethod.selectBatch();
        await BatchpageMethod.clickClose();
    });

    it('Batch_TC_08: Create batch with special characters', async function () {
        await BatchpageMethod.clickAddGroup();
        await BatchpageMethod.enterBatchName(BatchpageData.Batch_TC_08.enterBatchName);
       //await BatchpageMethod.selectBatch();
        //await BatchpageMethod.clickAdd();
        await BatchpageMethod.verifyInvalidBatchname();
        await BatchpageMethod.clickClose();
    });

    it('Batch_TC_09: edit batch with special characters', async function () {
        await BatchpageMethod.clickKebabMenu();
        await BatchpageMethod.clickEdit();
        await pause(2000);
        //CommonUtilities.clearField("//input[@id='batchName']");
        await BatchpageMethod.enterBatchName(BatchpageData.Batch_TC_09.enterBatchName); 
       //await BatchpageMethod.selectBatch();
       // await BatchpageMethod.clickAdd();
        await BatchpageMethod.verifyInvalidBatchname();
        await BatchpageMethod.clickClose();
    });
    it('Batch_TC_10: edit batch with valid data', async function () {
        await BatchpageMethod.clickKebabMenu();
        await BatchpageMethod.clickEdit();
        await BatchpageMethod.enterBatchName();
       //await BatchpageMethod.selectBatch();
        await BatchpageMethod.clickAdd();
        await BatchpageMethod.verifyGroupAddedSuccess();
    });

    it('Batch_TC_11: move to next page', async function () {
        await BatchpageMethod.goToNextPageAndVerify();
    });
});

