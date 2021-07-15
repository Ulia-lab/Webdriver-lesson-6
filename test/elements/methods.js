module.exports = class methods {
    typeText (selector, text) {
        return browser.$(selector).isDisplayed().setValue(text);
    }

    clickButton (selector) {
        browser.url(selector).click();
    }

    // header
    headerAccontIcon () { return browser.$('button[data-testid="myAccountIcon"]')}
    headerSingIn () {return browser.$('a[data-testid="signin-link"]')}
}