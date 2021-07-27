const BasketPage = require('../pages/BasketPage')
const ProductPage = require('../pages/PDP')

describe('Basket page', () => {

    it('Basket page content should be visible', () => {
        const productPage = new ProductPage();
        productPage.open()
        productPage.addProduct()
        const basketPage = new BasketPage();
        basketPage.open()
        basketPage.basket.isDisplayed()
        basketPage.basketPrice.isDisplayed()
        basketPage.basketImage.isDisplayed()
        basketPage.basketName.isDisplayed()

        basketPage.basketSelectSize.selectOption('EU 41')
        basketPage.basketSelectCount.selectOption('2')

        basketPage.basketButtonRemove.click()
    });
})