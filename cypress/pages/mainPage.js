class MainPage{
elements = {
    linkedIn: () => cy.get('a[href*="linkedin.com/company/telnyx/"]'),
    faceBook: () => cy.get('a[href*="facebook.com/Telnyx/"]'),
    twitter: () => cy.get('a[href*="twitter.com/telnyx"]'),
    supportCenter: () => cy.get('a[href="https://support.telnyx.com/en/"]').eq(0),
    closeCookiesButton : () => cy.get('button[aria-label="close and deny"]')
}
closeCookies(){
    this.elements.closeCookiesButton().click();
}
openMainPage(page){
    cy.visit(page)
}
scrollToFooter(){
    this.elements.linkedIn().scrollIntoView();
}
clickLinkedIn(){
    this.elements.linkedIn().focus();
}
clickFaceBook(){
    this.elements.faceBook().focus();
}
clickTwitter(){
    this.elements.twitter().focus()
}
clickSupportCenter(){
    this.elements.supportCenter().click({force: true})
}
}
module.exports = new MainPage();