class SupportCenterPage{
elements ={
    clearTextIcon: () => cy.get('.interface-icon'),
    searchInput: () => cy.get('input[type="text"]'),
    searchResult: () => cy.get('div .section__content'),
    searchIcon: () => cy.get('.search__submit'),
    headline: () => cy.get('.header__headline'),
    linkedinIcon: () => cy.get('.footer__link__linkedin a'),
    facebookIcon: () => cy.get('.footer__link__facebook a'),
    twitterIcon: () => cy.get('.footer__link__twitter a')
}
enterRequest(request){
    this.elements.searchInput().type(request).type('{enter}')
}
enterRequestClickSearchIcon(request){
    this.elements.searchInput().type(request)
    this.elements.headline().click()
    this.elements.searchIcon().click()   
}
clearTextIconClick(){
    this.elements.clearTextIcon().click()
}
linkedinFocus(){
    this.elements.linkedinIcon().focus()
}
facebookFocus(){
    this.elements.facebookIcon().focus()
}
twitterFocus(){
    this.elements.twitterIcon().focus()
}
}
module.exports = new SupportCenterPage()