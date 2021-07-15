const assosPage = require('./Page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CategoryPage extends assosPage {

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('women/');
    }

    // category elements

    categoryTitle () { return browser.$('h1[class="_1hVpqlz"]')};

    filterOption () { return browser.$('li[data-auto-id="attribute_10155"]')};

    productTitle () { return browser.$('#product-24264772')};
}

module.exports = new CategoryPage();
