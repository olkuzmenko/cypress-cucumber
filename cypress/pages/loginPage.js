class LoginPage{
    get emailInput() {
        return cy.get('div[name="login"] input[name="email"]')
    }
    get passwordInput() {
        return cy.get('input[name="password"]')
    }
    get loginButton() {
        return cy.get('button[class*="LoginForm"]')
    }
    get signinTitle() {
        return cy.get('div[data-testid="login.signin.title"]')
    }
    get phoneNumberInput() {
        return cy.get('input[class*="PhoneNumberField"]')
    }
    get sendCodeButton() {
        return cy.get('button[type="submit"]')
    }
    get successMessage() {
        return cy.get('div[type="success"]')
    }
    get errorMessage() {
        return cy.get('div[type="error"]')
    }
    get forgetPasswordhyperlink () {
        return cy.get('a[href="/#/login/password-reset"]')
    }
    get resetPasswordEmail() {
        return cy.get('input[name="email"]')
    }
    get submitButton() {
        return cy.get('button[type="submit"]')
    }
    get resetText() {
        return cy.get('div[class*="PasswordReset__MessageCopy"]')
    }
    get singleSignOn() {
        return cy.get('button[name="sso"]')
    }
    get companyEmail() {
        return cy.get('div[name="sso"] input[name="email"]')
    }
    get companyNameButton() {
        return cy.get('button[class*="SSOForm__ButtonLink"]')
    }
    get continueButton() {
        return cy.get('button[class*="SSOForm__LoginButton"]')
    }
    get businessNameInput() {
        return cy.get('input[name="short_name"]')
    }
    get resendButton() {
        return cy.get('a[href="/#/login/resend-email"]')
    }
    get resendEmailMessage() {
        return cy.get('div[class*="ResendEmail__MessageCopy"]')
    }
    get resendEmailInput() {
        return cy.get('input[name="email"]')
    }
    get RequiredCompanyMessage() {
        return cy.get('div[name="sso"] div[class*="TextField__ErrorMessage"]')
    }
    get closeCookiesButton () {
        return cy.get('button[aria-label="close and deny"]')
    }   
    closeCookies(){
        this.closeCookiesButton().click()
    }
    openLoginPage(page){
        cy.visit(page)
    }
    enterAuthorizeEmail(email){
        this.emailInput.type(email)
    }
    enterPassword(password){
        this.passwordInput.type(password)
    }
    clickLogin(){
        this.loginButton.click();   
    }
    enterPhone(phoneNumber){
        this.phoneNumberInput.type(phoneNumber);
    }
    clickSendCode(){
        this.sendCodeButton.click();
    }
    clickForgetPassword(){
        this.forgetPasswordhyperlink.click()
    }
    resetPasswordTypeEmail(email){
        this.resetPasswordEmail.type(email)
    }
    clickSubmitButton(){
        this.submitButton.click()
    }
    clickSingleSignOn(){
        this.singleSignOn.click()
    }
    enterCompanyEmail(email){
        this.companyEmail.type(email)
    }
    clickCompanyNameButton(){
        this.companyNameButton.click()
    }
    clickContinueButton(){
        this.continueButton.click()
    }
    enterBusinessName(businessName){
        this.businessNameInput.type(businessName)
    }
    clickResendButton(){
        this.resendButton.click()
    }
    enterEmailForResend(email){
        this.resendEmailInput.type(email)
    }
    clickCompanyEmailInput(){
        this.companyEmail.click()
    }
    clickCompanyNameInput(){
        this.businessNameInput.click()
    }
    }
    module.exports = new LoginPage();