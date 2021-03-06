const HomePage = require('../pages/HomePage')

describe('HomePage', () => {

    it('T-Shirt page should open', () => {
        const homePage = new HomePage();
        homePage.open();
        homePage.header.search('t-shirt')
    });

    it('Menu should works', () => {
        const homePage = new HomePage();
        homePage.open();
        homePage.header.womenButton.click();
        homePage.header.menuButton.click();
        homePage.header.menuLink.click();
    });

    it('Customer should be able to login', () => {
        const homePage = new HomePage();
        homePage.open()
        homePage.header.myAccount.hover()
        //homePage.header.signIn.waitUntil()
        //browser.pause(1000)
        homePage.header.signIn.click()
        homePage.login.login('iuliia.chupina@epam.com', '87654321epam');
        browser.pause(6000)
        homePage.header.myAccount.hover()
        expect(homePage.header.welcomeText).toHaveTextContaining('Привет Юлия')
    });

    it('Footer content should be visible', () => {
        const homePage = new HomePage();
        homePage.open()
        homePage.footer.scroll()
        homePage.footer.socialLink.isDisplayed()
        homePage.footer.socialLinkFB.isDisplayed()
        homePage.footer.footerLinks.isDisplayed()
        homePage.footer.legalBar.isDisplayed()
    });
});

