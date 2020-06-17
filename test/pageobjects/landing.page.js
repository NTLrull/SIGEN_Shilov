const MainPage = require("../pageobjects/main.page")

class LandingPage extends MainPage {
    //пропишем класс дашборда 
    get url()                   { return "/landing" }  
    get pageIndicator()         { return $("//h1[contains(text(),' SIGEN.pro ')]")} 
    get pageAuth()              { return $("(//button[contains(text(),' Авторизация ')])[1]")}
    get loginInput()            { return $("input[type=email]")}
    get passwordInput()         { return $("input[type=password]")}
    get loginButton()           { return $("//button[contains(text(),' Дальше ')]")}
    get authDfa()               { return $("input[placeholder='Введите полученный код']")}
    get loginDfa()              { return $("//button[contains(text(),' Войти ')]")}

    login(options){
        this.loginInput.setValue(options.name)
        this.passwordInput.setValue(options.password)
        browser.pause(1000)
        this.loginButton.click()
        browser.pause(1000)
        this.authDfa.setValue(options.param)
        this.loginDfa.click()
    }
    
}
module.exports = new LandingPage();
