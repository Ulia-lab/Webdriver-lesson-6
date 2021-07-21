
class BasePage {
    constructor(url){
        this.url = url
    }

    open() {
        return browser.url(this.url);
    }
    
    refresh(){
        return browser.refresh();
    }

    waitPageLoad() {
        return browser.waitUntil(() => this.isOpened());
    }

    isOpened() {
        return browser.getUrl().includes(this.url);
    }

}

module.exports = BasePage;