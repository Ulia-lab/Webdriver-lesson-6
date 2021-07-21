const CategoryPage = require('../pages/PLP')

describe('Category page', () => {

    it('Category content should be visible', () => {
        const categoryPage = new CategoryPage();
        categoryPage.open()
        categoryPage.categoryDescription.isDisplayed()
        categoryPage.shoesType.isDisplayed()
    });

    it('Filter should works', () => {
        const categoryPage = new CategoryPage();
        categoryPage.open();
        categoryPage.filter.scroll()
        categoryPage.filter.click()
        categoryPage.filterOption.click('Цена по убыванию')
        //написать проверку правильности сортировки цен
    });

    it('Product tile content checking', () => {
        const categoryPage = new CategoryPage();
        categoryPage.open();
        categoryPage.productTitle.scroll()
        categoryPage.likeButton.click()
        categoryPage.productTileDescription.isDisplayed()
        categoryPage.productTitle.click()
    });
});

