const HomePage = require('../pages/HomePage')

describe('Category page', () => {

    it('T-Shirt page should open', () => {
        const homePage = new HomePage();
        homePage.open();
        homePage.header.search('t-shirt')
    });

    it('Women page should open', () => {

        const homePage = new HomePage();
        homePage.open()
        homePage.header.womenButton.click()
    });


});

