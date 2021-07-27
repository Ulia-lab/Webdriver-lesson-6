const AbstractElement = require("./abstractElement");

class Dropdown extends AbstractElement {
    constructor(selector){
        super('div[@class="colour-size-select"]')
        //super('а здесь null???')
        this.selector = selector
    }

    dropdown = new AbstractElement (`${this.selector}`);

    selectOption (text) {
        return this.dropdown.selectByVisibleText(text)
    }
}

module.exports = Dropdown;