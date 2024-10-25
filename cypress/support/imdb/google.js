import pages from "./pages";
import imdb from "./imdb";

export default {
    visitHomePage() {
        cy.visit('https://www.google.com/');
        this.acceptCookies();
    },

    acceptCookies() {
        pages.googleCookieWindowAccept().click();
        this.cookieWindowNotVisible();
    },

    cookieWindowNotVisible() {
        pages.googleCookieWindow().should('not.be.visible');
    },

    searchForInput(searchInput) {
        pages.googleSearchInput().type(`${searchInput}{enter}`);
    },

    clickImdbLink() {
        pages.imdbLink().click();
        imdb.acceptCookies();
    },
}