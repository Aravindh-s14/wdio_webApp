class MentorPageLocators {

    get accountmanagement() {
        return $("//span[normalize-space()='Account Management']");
    }

    get mentormanagement() {
        return $("//a[normalize-space()='Mentor Management']");
    }

    get registermentor() {
        return $("//button[normalize-space()='Register Mentor']");
    } 

    get firstnamefield(){
        return $("//input[@placeholder='Enter First Name']");
    }  
    get lastnamefield(){
        return $("//input[@placeholder='Enter Last Name']");
    }
    get emailfield(){
        return $("//input[@placeholder='Enter Email ID']");
    }
    get employeeIDfield(){
        return $("//div[@class='form-group']//input[@placeholder='Enter Employee ID']");
    }
    get depdropdown(){
        return $("//select[@id='exampleFormControlSelect1']");
    }
    get register(){
        return $("//button[normalize-space()='Register']");
    }



    get kebabmenu(){
        return $("(//a[@role='button' and @class='dropdown-toggle'])[1]");
    }
    get deleteoption(){
        return $("//a[@class='dropdown-item' and text()='Delete']");
    }
    get confirmdelete(){
        return $("//button[normalize-space()='Delete']");
    }
    get canceldelete(){
        return $("//button[normalize-space()='Cancel']");
    }

    get editoption(){
        return $("(//a[@class='dropdown-item' and contains(text(), 'Edit')])[1]");
    }

    get editfirstnamefield(){
        return $("//input[@placeholder='Enter First Name']");
    }  
    get editlastnamefield(){
        return $("//input[@placeholder='Enter Last Name']");
    }
    get editemailfield(){
        return $("//input[@placeholder='Enter Email ID']");
    }
    get editemployeeIDfield(){
        return $("//div[@class='form-group']//input[@placeholder='Enter Employee ID']");
    }
    get editdepdropdown(){
        return $("//select[@id='exampleFormControlSelect1']");
    }
    get update(){
        return $("//button[normalize-space()='Update']");
    }
    get currentPage() {
        return $("//label[@id='paginationInputLabel']")
    }
    get nextPage() {
        return $("//label[@id='paginationInputLabel']")
    }
    get nextPageButton() {
        return $("//span[normalize-space()='»']")
    }
    get importorexportbutton() {
        return $("//div[contains(text(),'Import/ Export Mentors')]")
    }

    get downloadcsvbutton() {
        return $("//span[@class='zmdi zmdi-cloud-download']")
    }
    get heading() {
        return $("//h2[normalize-space()='Mentor Management']")
    }


//Verification messages

get registersuccessfully(){
    return $("//div[@aria-label='Registered Successfully']");
}
get verifydelete(){
    return $("//div[@aria-label='Deleted successfully']");
}
get verifyupdate(){
    return $("//div[@aria-label='Updated Successfully']");
}
get invalidfirstname(){
    return $("//span[text()='Only alphabets and white spaces are allowed and white spaces are not allowed as the first and final character for input and not more than one space is allowed between words.']");
}
get emptyfirstname(){
    return $("//span[normalize-space()='First Name is required']");
}
get invalidlastname(){
    return $("//span[text()='Only alphabets and white spaces are allowed and white spaces are not allowed as the first and final character for input and not more than one space is allowed between words.']");
}
get invalidemployeeid(){
    return $("//span[normalize-space()='Employee ID should be in digits.']");
}
get invalidemail(){
    return $("//span[normalize-space()='Please enter a valid email']");
}
get deleted(){
    return $("//div[contains(text(), 'Deleted successfully')]");
}


}

module.exports = new MentorPageLocators();