const Page = require("../pageobjects/page")

module.exports = class MainPage extends Page {
    get headerLogo()    { return $('.header__logo') } 
 }
