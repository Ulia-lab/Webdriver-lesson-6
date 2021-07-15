const AbstractElement = require('../elements/abstractElement');
const categoryPage = require('../pages/1_Category.page');


describe('Category page', () => {
    it('Category page should open', () => {
        categoryPage.open();
        // categoryPage.loginIcon().moveTo();
        // browser.pause(5000);
        // categoryPage.loginButton().click();
        //browser.pause(5000);
    });
    it ('Checking search and pause functionality', () => {
        const searchInput = new AbstractElement(`#chrome-search`);
        const searchButton = new AbstractElement('button[type="submit"]');
        searchInput.setValue('рубашка');
        browser.pause(1000)
        searchButton.click();

    });
    it ('Checking menu functionality', () => {
        const menuBar = new AbstractElement(`button[aria-controls="1020946c-8949-4e9c-9719-43435002bcd4"]`);
        const menuLink = new AbstractElement('//a[contains(text(),"Новинки")]');

        menuBar.click();
        menuLink.click();
        expect(categoryPage.categoryTitle()).toHaveTextContaining('Женские новинки');    
    });
    it ('Checking category page content', () => {
        categoryPage.filterOption().scrollIntoView();
        //categoryPage.productTitle().click();
    });
});

