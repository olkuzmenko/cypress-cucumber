class SupportCenterPage{

get clearTextIcon() {
    return cy.get('.interface-icon')
}
get searchInput() {
    return cy.get('input[type="text"]')
}
get searchResult() {
    return cy.get('div .section__content')
}
get searchIcon() {
    return cy.get('.search__submit')
}
get headline() {
    return cy.get('.header__headline')
}
get linkedinIcon() {
    return cy.get('.footer__link__linkedin a')
}
get facebookIcon() {
    return cy.get('.footer__link__facebook a')
}
get twitterIcon() {
    return cy.get('.footer__link__twitter a')
}
enterRequest(request){
    this.searchInput.type(request).type('{enter}')
}
enterRequestClickSearchIcon(request){
    this.searchInput.type(request)
    this.headline.click()
    this.searchIcon.click()   
}
clearTextIconClick(){
    this.clearTextIcon.click()
}
linkedinFocus(){
    this.linkedinIcon.focus()
}
facebookFocus(){
    this.facebookIcon.focus()
}
twitterFocus(){
    this.twitterIcon.focus()
}
}
module.exports = new SupportCenterPage()