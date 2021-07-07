/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class MainPage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.asos.com/ru/${path}`)
    }

    //common elements

    searchBar () { return browser.$('#chrome-search')};

    button () { return browser.$('button[type="submit"]')};

    menuBar () { return browser.$('button[aria-controls="1020946c-8949-4e9c-9719-43435002bcd4"]')};

    menuLink () { return browser.$('//a[contains(text(),"Новинки")]')};

    // category elements

    categoryTitle () { return browser.$('h1[class="_1hVpqlz"]')};

    filterOption () { return browser.$('li[data-auto-id="attribute_10155"]')};

    productTitle () { return browser.$('#product-24264772')};

    // product elements

    productImage () { return browser.$('div[class="image-container zoomable"]')};

    sizeSelect () { return browser.$('select[data-id="sizeSelect"]')}

    addToBasket () { return browser.$('button[aria-label="Добавить в корзину"]')}
}
