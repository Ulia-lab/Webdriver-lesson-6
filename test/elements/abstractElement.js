module.exports = class AbstractElement {
    constructor(selector, parent = null) {
        this.locator = selector;
        this.parent = parent;
    
    }
    
    get element(){
        if (this.parent){
            return this.parent.$(this.locator)
        }
        /**
         * @this {WebdriverIO.Element}
         */
        return browser.$(this.locator);
    }
    isDisplayed () {
        return this.element.isDisplayed()
    }

    click () { 
        return this.element.click()
    }

    hover () {
        return this.element.moveTo()
    }

    findElement () {
        return browser.$(`${this.locator}`)
    }

    findAllElements () {
        return browser.$$(`${this.locator}`)
    }

    getText () {
        return this.element.getText()
    }

    getValue () {
        return this.element.getValue()
    }

    setValue (text) {
        return this.element.setValue(text)
    }

    screenshot () {
        return this.element.saveScreenshot('./test/screenshots/elemScreenshot.png');
    }

    scroll () {
        return this.element.scrollIntoView();
    }

    selectOption (text) {
        return this.element.selectByVisibleText(text)
    }

    /**
     * 
     * @param {string} selector 
     * @returns {WebdriverIO.Element}
     */
    $(selector){
        return this.element.$(selector)
    }

    $$(selector){
        return this.element.$$(selector)
    }
}
