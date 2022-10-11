class MainPage{
get supportCenter() {
    return cy.get('a[href="https://support.telnyx.com/en/"]').eq(0)
}
get closeCookiesButton() {
    return cy.get('button[aria-label="close and deny"]')
}
closeCookies(){
    this.closeCookiesButton.click();
}
openMainPage(page){
    cy.visit(page)
}
clickSupportCenter(){
    this.supportCenter.click({force: true})
}
}
module.exports = new MainPage();