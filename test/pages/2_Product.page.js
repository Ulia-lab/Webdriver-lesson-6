const assosPage = require('./Page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends assosPage {

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('topshop/raznotsvetnoe-chajnoe-plate-mini-so-sborkami-i-tsvetochnym-printom-topshop/prd/24264772?clr=mnogotsvetnyj&colourwayid=60552724&cid=27108');
    }

    // product elements

    productImage () { return browser.$('div[class="image-container zoomable"]')};

    sizeSelect () { return browser.$('select[data-id="sizeSelect"]')};

    addToBasket () { return browser.$('button[aria-label="Добавить в корзину"]')};

    productPrice () { return browser.$('div[id="product-price"]')};
}

module.exports = new ProductPage();