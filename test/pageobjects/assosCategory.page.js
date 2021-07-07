const assosPage = require('./assosPage');

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
}

module.exports = new CategoryPage();
