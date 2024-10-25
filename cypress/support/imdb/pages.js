export default {
    // Google
    googleSearchInput() {
        return cy.get('.a4bIc');
    },

    googleCookieWindow() {
        return cy.get('.KxvlWc');
    },

    googleCookieWindowAccept() {
        return this.googleCookieWindow().find('#L2AGLb');
    },

    imdbLink() {
        return cy.get('a[href="https://www.imdb.com/"]');
    },

    // Imdb
    imdbCookieWindow() {
        return cy.get('[data-testid="consent-banner"]');
    },

    imdbCookieWindowAccept() {
        return this.imdbCookieWindow().find('[data-testid="accept-button"]');
    },

    menuButton() {
        return cy.get('#imdbHeader-navDrawerOpen');
    },

    menuPanel() {
        return cy.get('[data-testid="panel"]');
    },

    menuPanelCategoryWrapper() {
        return cy.get('.navlinkcat__targetWrapper');
    },

    menuPanelCategoryName() {
        return this.menuPanelCategoryWrapper().find('.navlinkcat__itemTitle');
    },

    // Born today page
    celebrityList() {
        return cy.get('.ipc-metadata-list');
    },

    celebritySummary() {
        return cy.get('.ipc-metadata-list-summary-item');
    },

    celebritySummaryName() {
        return this.celebritySummary().find('.ipc-title__text');
    },
};