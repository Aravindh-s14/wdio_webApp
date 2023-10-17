class BatchPageLocators {

    get Onboardings() {
    return $("//span[normalize-space()='Onboardings']");
}
get batch() {
    return $("//a[normalize-space()='Batch Management']");
}
get Searchfield() {
    return $("//input[@placeholder='Enter Batch Name']");
}
get Searchbutton() {
    return $("//button[normalize-space()='Search']");
}
get closesearch() {
    return $("//i[@aria-label='Close']");
}
get logo() {
    return $("//img[@alt='logo']");
}
get drp1() {
    return $("//select[@class='mb-3 text-c dropdownn form-select ng-untouched ng-pristine ng-valid']");
}

get create() {
    return $("//button[normalize-space()='Add Batch']");
}
get batchname() {
    return $("//input[@id='batchName']");
}

get Addbutton() {
    return $("//button[@type='submit']");
}

get closebtn() {
    return $("//span[normalize-space()='×']");
}

get nextbtn() {
    return $("//li[@class='pagination-next']//a[1]");
}
get kebabmenu(){
    return $("(//a[@role='button' and @class='dropdown-toggle'])[1]");
}

get Editbtn() {
    return $("//ul[@class='dropdown-menu dropdown-menu-right show']//div[@class='dropdown-item'][normalize-space()='Edit']");
}

get updatebutton() {
    return $("//button[text()=' Update ']");
}

get edit() {
    return $("(//a[text()='Edit'])[1]");
}

get drpupdate() {
    return $("//select[@formcontrolname='batch']");
}

get toastmsg() {
    return $("//div[@aria-label='Batch Added Successfully']");
}

get toastmsg1() {
    return $("//div[@aria-label='Batch Updated Successfully']");
}

get successdelete() {
    return $("//div[@aria-label='Batch deleted successfully']");
}
get unsuccessdelete() {
    return $("//*[@id='swal2-html-container']");
}
get unsuccessdeleteok() {
    return $("//button[normalize-space()='Ok']");
}

get ellipsis() {
    return $("(//span[@class='icon zmdi zmdi-more'])[1]");
}

get Deletebtn() {
    return $("(//a[text()='Delete'])[1]");
}

get confirmdelete() {
    return $("//button[normalize-space()='Delete']");
}
get  canceldelete(){
return $("//button[normalize-space()='Cancel']");
}
get side_menu() {
    return $("//div[@class='left-sidebar-content']");
}

get grplist() {
    return $("//div[text()='Group List']");
}
get invalidbatchname() {
    return $("//span[contains(@class, 'warn-msg') and contains(@class, 'ng-star-inserted')]");
}
get currentPage() {
    return $("//label[@id='paginationInputLabel']")
}
get nextPageButton() {
    return $("//span[normalize-space()='»']")
}
}
module.exports = new BatchPageLocators();
