<<<<<<< HEAD
# Cypress + cucumber project with pipeline and deployed allure report 
This project include:
* [Page-object model](https://github.com/olkuzmenko/cypress-cucumber/tree/main/cypress/pages);
* Allure report integration;
* [Telnyx testcases](https://docs.google.com/spreadsheets/d/1txkUXqcgYBMX_Fvzjs5kO6ucp9So8Man/edit?usp=sharing&ouid=103157245924113355391&rtpof=true&sd=true);
* Different config files for tests
* Pipeline in github actions

## 💻 Before start
1. Clone the repository 
   ```sh
   git clone https://github.com/olkuzmenko/cypress-cucumber.git
   ```
2. Install NPM packages
    ```sh
   npm install
   ```
## 🚀 Run tests
Open the terminal and run:
```sh
   npx cypress run 
   ```
For using another configuration file:
```sh
   npm run cy:exampleconfig  
   ```
## 🚀 Report example 
<a href="https://ibb.co/0sTT2pn"><img src="https://i.ibb.co/xFWWLK2/allure-report.png" alt="allure-report" width="300"></a>

Allure report is located at [github pages](https://olkuzmenko.github.io/cypress-cucumber/)
=======
# Cypress cucumber tests for Telnyx.com

Testcases: [Telnyx testcases](https://docs.google.com/spreadsheets/d/1txkUXqcgYBMX_Fvzjs5kO6ucp9So8Man/edit?usp=sharing&ouid=103157245924113355391&rtpof=true&sd=true);

Specs: [feature](https://github.com/olkuzmenko/cypress-cucumber/tree/main/cypress/e2e/features), [step_definitions](https://github.com/olkuzmenko/cypress-cucumber/tree/main/cypress/e2e/step_definitions);

Pipeline: [End-to-end tests](https://github.com/olkuzmenko/cypress-cucumber/actions/runs/3174615297/jobs/5171624790);

Allure report: [Allure result](https://olkuzmenko.github.io/cypress-cucumber/1/);


>>>>>>> 52e77cacfaa7022c15e121a761b8a1c880a89287
