const BasePage = require("./BasePage");
const Header = require('../elements/Header')
const Footer = require('../elements/Footer');
const Login = require("../elements/Login");


class HomePage extends BasePage {

    constructor(){
        super('/ru/')
    }

    header = new Header();
    footer = new Footer();
    login = new Login();
}

module.exports = HomePage;