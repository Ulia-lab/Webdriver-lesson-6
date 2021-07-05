
var chrome = require('selenium-webdriver/chrome');
const {Builder, By, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnK')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();