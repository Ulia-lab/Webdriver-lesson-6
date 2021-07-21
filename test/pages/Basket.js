const BasePage = require("./BasePage");
const Header = require('../elements/Header')
const AbstractElement = require("../elements/abstractElement");


class BasketPage extends BasePage {

    constructor(){
        super('/ru/women/obuv/cat/?cid=4172&nlid=ww|обувь|сортировать+по+типу+продукта|смотреть+все')
    }

    header = new Header();

    filter = new AbstractElement(`li[data-dropdown-id="sort"]`, null);
    filterOption = new AbstractElement(`#plp_web_sort_price_high_to_low`, null);

    categoryDescription =  new AbstractElement(`button[data-auto-id="categoryReadMore]"`, null);
    shoesType = new AbstractElement(`li[data-auto-id="childLinksContainer"]`, null);

    productTitle = new AbstractElement(`article[data-auto-id="productTile"]`, null);
    likeButton = new AbstractElement(`button[data-auto-id="saveForLater"]`, null);
    productTileDescription = new AbstractElement(`div[data-auto-id="productTileDescription"]`, null);
    productTilePrice = new AbstractElement(`span[data-auto-id="productTilePrice"]`, null);

}

module.exports = BasketPage;