const AbstractElement = require("./abstractElement");

class Footer extends AbstractElement {
    constructor(){
        super('footer[data-testid="footer"]')
    }

    socialLink = new AbstractElement('ul[data-testid="social-links-bar"]', this)
    socialLinkFB = new AbstractElement('a[data-testid="social-link"][aria-label="Facebook"]', this)
    footerLinks = new AbstractElement('section[data-testid="footer-links"]')
    legalBar = new AbstractElement('div[data-testid="legalbar"]')
}
module.exports = Footer;