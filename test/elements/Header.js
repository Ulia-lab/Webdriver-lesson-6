const AbstractElement = require("./abstractElement");

class Header extends AbstractElement {
    constructor(){
        super('#chrome-header')
    }

    searchInput = new AbstractElement(`#chrome-search`, this);
    searchButton = new AbstractElement('button[type="submit"]', this);
    womenButton = new AbstractElement('a#women-floor', this)
    menButton = new AbstractElement('a#women-floor', this)
    myAccount = new AbstractElement('button[data-testid="myAccountIcon"]', this)
    signIn = new AbstractElement('a[data-testid="signin-link"]', this)
    welcomeText = new AbstractElement('span[class="tiqiyps"]', this)

    search(text) {
        this.searchInput.setValue(text);
        this.searchButton.click();
    }
}
module.exports = Header;