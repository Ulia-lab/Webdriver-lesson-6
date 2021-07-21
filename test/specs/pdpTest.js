const ProductPage = require('../pages/PDP')

describe('Product page', () => {

    it('Product page content should be visible', () => {
        const productPage = new ProductPage();
        productPage.open()
        productPage.productImage.isDisplayed()
        productPage.imageArrow.click()

        productPage.productDescribe.isDisplayed()
        productPage.productPrice.isDisplayed()
        productPage.productDelivery.isDisplayed()
        productPage.productColor.isDisplayed()
    });

    it('Unhappy path - Add product to basket', () => {
        const productPage = new ProductPage();
        productPage.open()
        productPage.addToBasket.click()
        productPage.selectSizeError.isDisplayed()
    });

    it('Happy path - Add product to basket', () => {
        const productPage = new ProductPage();
        productPage.open()
        productPage.productSize.selectOption('EU 41')
        productPage.likeButton.click()
        productPage.addToBasket.click()
    });

    it('Product info checking', () => {
        const productPage = new ProductPage();
        productPage.open()
        productPage.showMore.scroll()
        productPage.productInfo.isDisplayed()
        productPage.footer.scroll()
    });
});
