const AbstractElement = require("./abstractElement");

class Header extends AbstractElement {
    constructor(){
        super('#chrome-header')
    }

    searchInput = new AbstractElement(`#chrome-search`, this);
    searchButton = new AbstractElement('button[type="submit"]', this);
    womenButton = new AbstractElement('a#women-floor', this);
    menuButton = new AbstractElement('button[aria-controls="1020946c-8949-4e9c-9719-43435002bcd4"]', this)
    menuLink = new AbstractElement('//a[contains(text(),"Новинки")]', this)
    menButton = new AbstractElement('a#men-floor', this)
    myAccount = new AbstractElement('button[data-testid="myAccountIcon"]', this)
    signIn = new AbstractElement('a[data-testid="signin-link"]', this)
    welcomeText = new AbstractElement('span[class="tiqiyps"]', this)

    search(text) {
        this.searchInput.setValue(text);
        this.searchButton.click();
    }
}
module.exports = Header;