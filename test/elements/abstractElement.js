module.exports = class AbstractElement {
    constructor(selector, parent = null) {
        this.element = $(selector);
        this.locator = selector;
        this.parent = parent;
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
    //создается новый объект с ceлектором, нужно найти его на странице  
}
