const BasePage = require("./BasePage");
const Header = require('../elements/Header')
const Footer = require('../elements/Footer');
const Dropdown = require('../elements/Dropdown');
const AbstractElement = require("../elements/abstractElement");


class ProductPage extends BasePage {

    constructor(){
        super('/ru/fila/krossovki-svetlogo-ineonovo-zheltogo-tsvetov-fila-heroics/prd/23577402?clr=gardenia&colourwayid=60495051&cid=4172')
    }

    header = new Header();
    footer = new Footer();
    dropdown = new Dropdown('select[data-id="sizeSelect"]');
    //productSize = new AbstractElement(`select[data-id="sizeSelect"]`, this.productElement);
    // new drop down(selector для productSize)

    addProduct () {
        this.dropdown.selectOption('EU 41')
        this.addToBasket.click()
    }

    productElement = new AbstractElement('//div[@class="layout-width"]')

    productImage = new AbstractElement(`div[@class="product-gallery"]`, this.productElement);
    imageArrow = new AbstractElement(`button[@class="arrow-button arrow-button-right"]`, null);

    productDescribe = new AbstractElement(`div[@class="product-hero"]`)
    productPrice = new AbstractElement(`span[data-id="current-price"]`, null);
    productDelivery = new AbstractElement(`span[@class="product-delivery-text"]`, null); 
    productColor = new AbstractElement(`span[@class="product-colour"]`, null); 
    
    likeButton = new AbstractElement(`button[@class="save-button"]`, null); 
    addToBasket = new AbstractElement(`button[data-test-id="add-button"]`, this.productElement);
    selectSizeError = new AbstractElement(`#selectSizeError`, null);

    showMore = new AbstractElement(`a[@class="show"]`, null);
    productInfo = new AbstractElement(`div[@class="product-description"]`, null);

}

module.exports = ProductPage;