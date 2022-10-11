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

