const MainPage = require("./main.page")

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
        this.loginInput.waitForDisplayed()
        this.loginInput.setValue(options.name)

        this.passwordInput.waitForDisplayed()
        this.passwordInput.setValue(options.password)

        this.loginButton.waitForDisplayed()
        this.loginButton.click()

        this.authDfa.waitForDisplayed()
        this.authDfa.setValue(options.param)

        this.loginDfa.waitForDisplayed()
        this.loginDfa.click()
    }
    
}
module.exports = new LandingPage();
