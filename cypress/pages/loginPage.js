class LoginPage{
    elements ={
        emailInput : () => cy.get('div[name="login"] input[name="email"]'),
        passwordInput : () => cy.get('input[name="password"]'),
        loginButton : () => cy.get('button[class*="LoginForm"]'),
        signinTitle : () => cy.get('div[data-testid="login.signin.title"]'),
        phoneNumberInput : () => cy.get('input[class*="PhoneNumberField"]'),
        sendCodeButton : () => cy.get('button[type="submit"]'),
        successMessage : () => cy.get('div[type="success"]'),
        errorMessage : () => cy.get('div[type="error"]'),
        forgetPasswordhyperlink : () => cy.get('a[href="/#/login/password-reset"]'),
        resetPasswordEmail: () => cy.get('input[name="email"]'),
        submitButton: () => cy.get('button[type="submit"]'),
        resetText: () => cy.get('div[class*="PasswordReset__MessageCopy"]'),
        singleSignOn: () => cy.get('button[name="sso"]'),
        companyEmail: () => cy.get('div[name="sso"] input[name="email"]'),
        companyNameButton: () => cy.get('button[class*="SSOForm__ButtonLink"]'),
        continueButton: () => cy.get('button[class*="SSOForm__LoginButton"]'),
        businessNameInput: () => cy.get('input[name="short_name"]'),
        resendButton: () => cy.get('a[href="/#/login/resend-email"]'),
        resendEmailMessage: () => cy.get('div[class*="ResendEmail__MessageCopy"]'),
        resendEmailInput: () => cy.get('input[name="email"]'),
        RequiredCompanyMessage: () => cy.get('div[name="sso"] div[class*="TextField__ErrorMessage"]'),
        closeCookiesButton : () => cy.get('button[aria-label="close and deny"]')
    }
    closeCookies(){
        this.elements.closeCookiesButton().click()
    }
    openLoginPage(page){
        cy.visit(page)
    }
    enterAuthorizeEmail(email){
        this.elements.emailInput().type(email)
    }
    enterPassword(password){
        this.elements.passwordInput().type(password)
    }
    clickLogin(){
        this.elements.loginButton().click();   
    }
    enterPhone(phoneNumber){
        this.elements.phoneNumberInput().type(phoneNumber);
    }
    clickSendCode(){
        this.elements.sendCodeButton().click();
    }
    clickForgetPassword(){
        this.elements.forgetPasswordhyperlink().click()
    }
    resetPasswordTypeEmail(email){
        this.elements.resetPasswordEmail().type(email)
    }
    clickSubmitButton(){
        this.elements.submitButton().click()
    }
    clickSingleSignOn(){
        this.elements.singleSignOn().click()
    }
    enterCompanyEmail(email){
        this.elements.companyEmail().type(email)
    }
    clickCompanyNameButton(){
        this.elements.companyNameButton().click()
    }
    clickContinueButton(){
        this.elements.continueButton().click()
    }
    enterBusinessName(businessName){
        this.elements.businessNameInput().type(businessName)
    }
    clickResendButton(){
        this.elements.resendButton().click()
    }
    enterEmailForResend(email){
        this.elements.resendEmailInput().type(email)
    }
    clickCompanyEmailInput(){
        this.elements.companyEmail().click()
    }
    clickCompanyNameInput(){
        this.elements.businessNameInput().click()
    }
    }
    module.exports = new LoginPage();