const Page = require("../pageobjects/page")

module.exports = class MainPage extends Page {

    get pageIndicator()         { return $("//h1[contains(text(),' SIGEN.pro ')]")} 
/*    
    //пропишем класс main 
    get selectWell()        { return $(".subtitle-2")}  
    get dialog()            { return $(".v-dialog--active")}
    get demoResourcesBtn()  { return $("div[title='Company 1'] div")}
    get bacaCountryBtn()    { return $("div[title='Bristol Bay Borough'] div")}
    get demoWellBtn()       { return $("div[title='Well M1H'] div")}
    get openWellBtn()       { return $(".v-card__actions .v-btn__content")}
    // $ перый чартс, а $$ - это все чарты
    get firstChart()        { return $("div[id*=highcharts]")}

    // выбор Run
    get selectRun()         { return $("//div[label='RUN']")}
    get openRun()           { return $("//div[contains(text(),' RUN 1 ')]")}

    // выбор Section
    get selectSection()     { return $("//div[label='SECTION']")}
    get openSection()       { return $("//div[contains(text(),' SECTION: ')]")}

    // выбор Well в меню
    get openWellMenu()      { return $("//span[text()=' Well ']")}

    // выбор периода времени в меню
    get selectFromFilter()  { return $("button[title='Well time/depth filter']")}
    get clickOkBtn()        { return $("//span[@class='v-btn__content' and text()=' OK ']")}
    get dateFromBtn()       { return $("(//div[contains(@class,'v-text-field__slot')])[1]")}
    get selectFromDate()    { return $("//div[@class='v-btn__content' and text()='24']")}
    
    get datetoBtn()         { return $("//span[text()='Well finish']")}

    // Выбор юзера
    get selectProfile()     { return $("button[title='User profile']")}
    get switchthemeBtn()    { return $("(//div[contains(@class,'v-input--selection-controls__input')])[4]")}

    // Выбор юзера
    get logoutBtn()         { return $("(//div[contains(@class,'v-input--selection-controls__input')])[5]")}
*/

 }
