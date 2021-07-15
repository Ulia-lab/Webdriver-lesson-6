const AbstractElement = require('../elements/abstractElement');
const productPage = require('../pages/2_Product.page');

describe('Product page', () => {
    it('Product page should open', () => {
        productPage.open();
    });
    it ('Checking search bar', () => {
        const searchInput = new AbstractElement(`#chrome-search`);
        searchInput.isDisplayed();
        //screenshots
        searchInput.screenshot();
        browser.saveScreenshot('./test/screenshots/elemScreenshot1.png');
    });
    it ('Checking menu bar', () => {
        const menuBar = new AbstractElement(`button[aria-controls="1020946c-8949-4e9c-9719-43435002bcd4"]`);
        const headerBanner = new AbstractElement('a[aria-describedby="globalBannerTooltip-0"]');
        menuBar.isDisplayed(); 
        headerBanner.hover();
    });
    it ('Checking product page content', () => { 
       productPage.productImage().isDisplayed();
       productPage.sizeSelect().selectByVisibleText('EU 34');
       productPage.addToBasket().click();
       browser.pause(5000);
    });
    //utilities.takeScreenshot('ajax_with_request_capture1');
});

