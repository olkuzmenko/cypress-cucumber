import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import SupportCenterPage from '../pages/supportCenterPage'
import MainPage from '../pages/mainPage'

Given("A web browser is at the support center page", () => {
MainPage.openMainPage('/')
MainPage.clickSupportCenter();
});

When("User types the request {string}", (request) => {
    SupportCenterPage.enterRequest(request);
});
Then("The relevant results are displayed and the message {string}", (message) =>{
    SupportCenterPage.searchResult.should('contains.text', message)
});

When("User types the incorrect request  {string}", (incorrectRequest) => {
    SupportCenterPage.enterRequest(incorrectRequest);
});
Then("The error message {string} is displayed", (errorMessage) =>{
    SupportCenterPage.searchResult.should('contains.text', errorMessage)
});

When("User types the request {string} and clicks cancel icon", (request) => {
    SupportCenterPage.enterRequest(request);
    SupportCenterPage.clearTextIconClick()
});
Then("The search field is empty", () =>{
    SupportCenterPage.searchInput.should('have.value', '')
});

When("User types the request {string} and clicks search icon", (request) => {
    SupportCenterPage.enterRequestClickSearchIcon(request)
});
Then("The message {string} is displayed", (message) =>{
    SupportCenterPage.searchResult.should('contains.text', message)
});

When("User focuses at social icons", () => {
    SupportCenterPage.facebookFocus();
    SupportCenterPage.linkedinFocus();
    SupportCenterPage.twitterFocus()
});
Then("The social icons have correct links on social media", () =>{
    SupportCenterPage.facebookIcon.should('have.attr', 'href').and('include', 'https://facebook.com/Telnyx/');
    SupportCenterPage.linkedinIcon.should('have.attr', 'href').and('include', 'https://linkedin.com/company/3349412/');
    SupportCenterPage.twitterIcon.should('have.attr', 'href').and('include', 'https://twitter.com/telnyx');
});

