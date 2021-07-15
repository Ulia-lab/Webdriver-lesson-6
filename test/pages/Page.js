const methods = require('../elements/methods');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class MainPage extends methods {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.asos.com/ru/${path}`)
    }

    login () {
        //this.open('identity/login?signin=f0355d27785757a6ea1cc4fab70644bc');
        super.typeText('input[id="EmailAddress"]', 'iuliia.chupina@epam.com');
        super.typeText('input[type="password"]', '87654321epam');
        super.clickButton('input[id="signin"]');
    }

    //header 
        //main logo
    mainLogo () {return browser.$('a[data-testid="asoslogo"]')};
        //login 
            //hover
    loginIcon () { return browser.$('span[type="accountUnfilled"]')};
            //click
    loginButton () { return browser.$('a[class="_1336dMe _1uUU2Co _1336dMe _1uUU2Co"]')};
        //miniBasket
    miniBasket () { return browser.$('a[data-testid="miniBagIcon"]')};
        //search
    searchInput () { return browser.$('#chrome-search')};

    searchButton () { return browser.$('button[type="submit"]')};
        //megamenu
    menuBar () { return browser.$('button[aria-controls="1020946c-8949-4e9c-9719-43435002bcd4"]')};

    menuLink () { return browser.$('//a[contains(text(),"Новинки")]')};
        //banner
    headerBanner () {return browser.$('a[aria-describedby="globalBannerTooltip-0"]')};

}
