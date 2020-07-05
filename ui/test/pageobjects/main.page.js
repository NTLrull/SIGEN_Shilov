const Page = require("./page")

module.exports = class MainPage extends Page {
    get headerLogo()    { return $('.header__logo') } 
 }
