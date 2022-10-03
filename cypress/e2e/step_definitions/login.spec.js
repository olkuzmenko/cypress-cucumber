import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pages/loginPage'

Given("A web browser is at the telnyx login page", () => {
    LoginPage.openLoginPage(Cypress.env('loginPageUrl'));
});

When("A user enters the invalid email {string}, the password {string}, and clicks on the login button", (email,password) => {
    LoginPage.enterAuthorizeEmail(email);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();
});
Then("The login error message {string} is displayed", (errorMessage) =>{
    LoginPage.elements.errorMessage().should('be.visible').and('contains.text', errorMessage)
});

When("A user enters the email {string}, the invalid password {string}, and clicks on the login button", (email,password) => {
    LoginPage.enterAuthorizeEmail(email);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();
});
Then("User sees the error message {string}", (Message) =>{
    LoginPage.elements.errorMessage().should('be.visible').and('contains.text', Message)
});

When("A user clicks forgot password button, enters email {string}, clicks reset password", (email) => {
    LoginPage.clickForgetPassword();
    LoginPage.resetPasswordTypeEmail(email);
    LoginPage.clickSubmitButton()
});
Then("A user sees message {string}", (Message) =>{
    LoginPage.elements.resetText().should('be.visible').and('contains.text', Message)
});

When("A user clicks forgot password button, enters invalid email {string}, clicks reset password", (email) => {
    LoginPage.clickForgetPassword();
    LoginPage.resetPasswordTypeEmail(email);
    LoginPage.clickSubmitButton()
});
Then("A user sees success message {string}", (Message) =>{
    LoginPage.elements.resetText().should('be.visible').and('contains.text', Message)
});

When("A user clicks Single Sign-On, enters invalid company email {string}, clicks continue", (email) => {
    LoginPage.clickSingleSignOn();
    LoginPage.enterCompanyEmail(email);
    LoginPage.clickContinueButton()
});
Then("A user sees error message that {string}", (Message) =>{
    LoginPage.elements.errorMessage().should('be.visible').and('contains.text', Message)
});

When("A user clicks Single Sign-On, clicks company name, enters invalid company name {string}, clicks continue", (companyName) => {
    LoginPage.clickSingleSignOn();
    LoginPage.clickCompanyNameButton();
    LoginPage.enterBusinessName(companyName);
    LoginPage.clickContinueButton();
});
Then("A user sees the error message that {string}", (Message) =>{
    LoginPage.elements.errorMessage().should('be.visible').and('contains.text', Message)
});

When("A user clicks Single Sign-On, clicks company name, lives empty company name, clicks continue", () => {
    LoginPage.clickSingleSignOn();
    LoginPage.clickCompanyNameButton();
    LoginPage.clickCompanyNameInput()
    LoginPage.clickContinueButton();
});
Then("A user sees error message at company name field {string}", (Message) =>{
    LoginPage.elements.RequiredCompanyMessage().should('be.visible').and('contains.text', Message)
});

When("A user clicks Single Sign-On, lives empty company email, clicks continue", () => {
    LoginPage.clickSingleSignOn();
    LoginPage.clickCompanyEmailInput();
    LoginPage.clickContinueButton();
});
Then("A user sees error message at company email field {string}", (Message) =>{
    LoginPage.elements.RequiredCompanyMessage().should('be.visible').and('contains.text', Message)
});

When("A user clicks resend button, enters valid email {string}, clicks submit button", (email) => {
    LoginPage.click
    LoginPage.clickResendButton();
    LoginPage.enterEmailForResend(email)
    LoginPage.clickSubmitButton()
});
Then("A user sees the message {string}", (Message) =>{
    LoginPage.elements.resendEmailMessage().should('be.visible').and('contains.text', Message)
});

When("A user clicks resend button, enters invalid email {string}, clicks submit button", (randomSymbols) => {
    LoginPage.click
    LoginPage.clickResendButton();
    LoginPage.enterEmailForResend(randomSymbols)
    LoginPage.clickSubmitButton()
});
Then("A user sees the message that contains {string}", (Message) =>{
    LoginPage.elements.resendEmailMessage().should('be.visible').and('contains.text', Message)
});
