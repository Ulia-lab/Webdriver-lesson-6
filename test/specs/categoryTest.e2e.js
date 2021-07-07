const categoryPage = require('../pageobjects/assosCategory.page');

describe('Category page', () => {
    it('Category page should open', () => {
        categoryPage.open();
    });
    it ('Checking search functionality', () => {
        categoryPage.searchBar().setValue('рубашка');
        categoryPage.button().click();
    });
    it ('Checking menu functionality', () => {
        categoryPage.menuBar().click();
        categoryPage.menuLink().click();
        expect(categoryPage.categoryTitle()).toHaveTextContaining('Женские новинки');    
    });
    it ('Checking category page content', () => {
        categoryPage.filterOption().scrollIntoView();
        categoryPage.productTitle().click();
    });
    //utilities.takeScreenshot('ajax_with_request_capture1');
});

