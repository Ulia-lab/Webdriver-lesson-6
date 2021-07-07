const { Browser } = require('selenium-webdriver');
const productPage = require('../pageobjects/assosProduct.page');

describe('Product page', () => {
    it('Product page should open', () => {
        productPage.open();
    });
    it ('Checking search bar', () => {
        productPage.searchBar().isDisplayed();
    });
    it ('Checking menu bar', () => {
        productPage.menuBar().isDisplayed(); 
    });
    it ('Checking product page content', () => {
       productPage.productImage().isDisplayed();
       productPage.sizeSelect().selectByVisibleText('EU 34');
       productPage.addToBasket().click();
       browser.pause(5000);
    });
    //utilities.takeScreenshot('ajax_with_request_capture1');
});

