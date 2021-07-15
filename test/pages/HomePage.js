const BasePage = require("./BasePage");
const Header = require('../elements/Header')

class HomePage extends BasePage {

    constructor(){
        super('/')
        console.log('instance of home')
    }

    header = new Header();
}

module.exports = HomePage;