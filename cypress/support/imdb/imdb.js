import pages from "./pages";

export default {
    acceptCookies() {
        pages.imdbCookieWindowAccept().click();
        this.cookieWindowNotVisible();
    },

    cookieWindowNotVisible() {
        pages.imdbCookieWindow().should('not.exist');
    },

    openMenu() {
        pages.menuButton().click();
        pages.menuPanel().should('have.attr', 'aria-hidden', 'false');
    },

    checkMenuCategoryName(categoryName) {
        pages.menuPanelCategoryName().contains(categoryName);
    },

    clickMenuCategorySubItem(itemName) {
        pages.menuPanelCategoryWrapper().find('.ipc-list-item__text').contains(itemName).click();
    },

    navigateToSubCategory(itemName) {
        this.clickMenuCategorySubItem(itemName)
    },

    // Celebrity page
    checkCelebrityListVisible() {
        pages.celebrityList().should('be.visible');
    },

    printCelebrities(celebritiesAmount) {
        pages.celebritySummaryName().then(($celebrities) => {
            const names = Array.from($celebrities).slice(0, celebritiesAmount).map(el => el.innerText);
            
            console.log('First celebrities born today from list:', names);
            cy.log('First celebrities born today from list: ' + names.join(', '));
        });
    },
}