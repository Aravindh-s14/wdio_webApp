# Web Application Automation with WebDriverIO and Mocha

[![WebDriverIO](https://img.shields.io/badge/WebDriverIO-v8-blue.svg)](https://webdriver.io/)
[![Mocha](https://img.shields.io/badge/Mocha-v8-red.svg)](https://mochajs.org/)
[![Allure](https://img.shields.io/badge/Allure-Reporting-orange.svg)](http://allure.qatools.ru/)
[![Cross-Browser](https://img.shields.io/badge/Cross--Browser-Testing-green.svg)](https://webdriver.io/docs/crossbrowsertesting-service.html)
[![Parallel Execution](https://img.shields.io/badge/Parallel-Execution-yellow.svg)](https://webdriver.io/docs/parallel.html)

This repository is dedicated to the automation of a web application using WebDriverIO with the Mocha framework, JavaScript, and various advanced features. It includes data-driven testing, Allure reporting, cross-browser testing, and parallel execution.

## Features

- **WebDriverIO**: A powerful automation framework for web applications.
- **Mocha**: A versatile JavaScript test framework that provides robust testing capabilities.
- **Data-Driven Testing**: Test data is loaded from a .json file for parameterized testing.
- **Allure Reporting**: Generates detailed and interactive test reports with Allure.
- **Cross-Browser Testing**: Supports testing on multiple browsers for compatibility.
- **Parallel Execution**: Tests can be run in parallel for faster results.

## Modules Covered

The automation project covers the following modules of the web application:

- **Login Page**: Automated tests ensure the login functionality is working as expected, handling different scenarios and edge cases.

- **Change Password**: Tests verify that users can change their passwords securely, improving the application's security.

- **Batch Listing Page**: This module includes tests to ensure the batch listing page displays batch information accurately and allows for effective filtering and navigation.

- **Mentor Listing**: The automation includes tests for the mentor listing page, validating the display of mentor details and interactions with mentor profiles.

## Getting Started

Follow these steps to set up and run the automated tests:

### Prerequisites

- Node.js and npm must be installed on your system.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Aravindh-s14/webdriverIO_webApp

2. Install the project dependencies:
     ```bash
    cd your-repo
    npm install
     
3. Configure your test environment by modifying wdio.conf.js and other relevant configuration files.
4. Run the tests:
    ```bash
      npm test
    
## Usage
1. Place your test scripts in the ./test directory.
2. Define your test data in a .json file in the ./data directory.
3. Use Mocha and WebDriverIO to write your test cases.
4. Generate Allure reports using the following command:
  ```bash
  allure generate [allure_output_dir] && allure open
