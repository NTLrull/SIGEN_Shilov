module.exports = class Page {
    //Общий класс для индикатора страницы, подключаются все методы базового класса
    get url()                   { return "" }  
    get pageIndicator()         { return $("body")}
 
    //проверка открытия страницы, у любой страницы есть боди и head - по ним и смотрим
    open() {
        browser.url(browser.options.baseUrl + this.url)
        this.isOpened()
    }
    isOpened() {
        this.pageIndicator.waitForExist(undefined, undefined, `Индикатор страницы "${this.pageIndicator}" не найден`)
    }
}