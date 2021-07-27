const AbstractElement = require("./abstractElement");

class Login extends AbstractElement {
    constructor(){
        super('#main')
    }

    loginInput = new AbstractElement('#EmailAddress', this)
    passwordInput = new AbstractElement('#Password', this)
    singInButton = new AbstractElement('#signin', this)

    login(login, password) {
        this.loginInput.setValue(login);
        this.passwordInput.setValue(password);
        this.singInButton.click()
    }
}
module.exports = Login;