const BasePage = require("./BasePage");
const Header = require('../elements/Header')
const Login = require("../elements/Login");
const AbstractElement = require("../elements/abstractElement");


class BasketPage extends BasePage {

    constructor(){
        super('/ru/bag')
    }

    header = new Header();
    login = new Login();

    basket = new AbstractElement(`div[class="bag-contents-wrapper"]`, null);

    basketPrice = new AbstractElement(`div[class="bag-item-price-holder"]`, null);
    basketImage =  new AbstractElement(`img[class="bag-item-image-img"]`, null);
    basketName = new AbstractElement(`p[class="bag-item-name"]`, null);

    basketSelectSize = new AbstractElement(`#select2-ttmt-container`, null);
    basketSelectCount = new AbstractElement(`span[data-select2-id="5"]`, null);

    basketButtonRemove = new AbstractElement(`button[class="bag-item-remove"]`, null);
}

module.exports = BasketPage;