const LandingPage = require('../pageobjects/landing.page')
const chai = require('chai')
const assert = chai.assert;

describe('Smoke набор тестов биржи', () => {
// скипнутый тест xit, не скипнутый it
    it('Ввод корректных данных', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 1");
        reporter.addTestId("Кейс 1");
        LandingPage.open()
        reporter.addStep("Открылась главная страница");
        LandingPage.pageAuth.click()
        browser.pause(1000)
        LandingPage.login({name:"shilov260786@gmail.com", password: "Vaso1231"})
        LandingPage.authDfa.setValue("Xt,ehfirf")
        LandingPage.loginDfa.click()
        LandingPage.isOpened()
//        browser.pause(1000)
     })

/*     it('Ввод некорректного имени пользователя', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 2");
        reporter.addTestId("Кейс 1");
        LoginPage.login({name:"user1@aidriller.com", password: "password"})
        reporter.addStep("Ввод некорретного логина пользователя");
        LoginPage.errorMsg.waitForDisplayed(undefined,undefined,"Сообщение об ошибке не появилось при неверном логине")
        reporter.addStep("Ждем появления окна о неверном вводе");
        assert.include(LoginPage.errorMsg.getText(),"Unknown username or password","Не появилось сообщение Unknown usermane or password")
        reporter.addStep("Сравниваем");
        browser.pause(1000)
    })

    it('Проверка красной рамки', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 3");
        reporter.addTestId("Кейс 1");
        LoginPage.open()
        LoginPage.loginInput.click()
        reporter.addStep("Нажимаем поле ввода логина");
        LoginPage.passwordInput.click()
        reporter.addStep("Нажимаем на поле ввода пароля");
        assert.equal(LoginPage.errorLoginBorder.getCSSProperty("color").parsed.hex,"#ff5252","Цвет loginInput рамки не стал красным")
        reporter.addStep("Ожидаем красную рамку");
    //      console.log(LoginPage.errorLoginBorder.getCSSProperty("color").parsed.hex)
        browser.pause(1000)
    })
    it('Выбор в меню Well', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 4");
        reporter.addTestId("Кейс 1");
        LoginPage.login(users.user)
        reporter.addStep("Залогиниваемся")
        DashboardPage.isOpened()
        reporter.addStep("Открываем Dashboard")
        DashboardPage.selectWell.click()
        reporter.addStep("Нажимаем на кнопку выбора скважины")
        DashboardPage.dialog.waitForDisplayed(undefined,undefined,"Диалог не открылся")
        reporter.addStep("Ждем что откроется окно выбора скважины")
        DashboardPage.demoResourcesBtn.click()
        DashboardPage.bacaCountryBtn.click()
        DashboardPage.demoWellBtn.click()
        reporter.addStep("Выбираем  Resource, County, Well")
        DashboardPage.openWellBtn.click()
        reporter.addStep("Выбираем скважину нажимая на кнопку Open")
        DashboardPage.firstChart.waitForDisplayed(undefined,undefined,"Первый чарт не загрузился")
        browser.pause(1000)
    })

    it('Проверка открытия вкладки Activities', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 5");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user)
//        reporter.addStep("Залогиниваемся")
        ActivitiesPage.open()
        reporter.addStep("Открываем меню Activities")
        ActivitiesPage.firstChart.waitForDisplayed(undefined,undefined,"Чарт активитис не загрузился")
        browser.pause(1000)
    })
    
    it('Проверка открытия вкладки Drilling Statistics', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 6");
        reporter.addTestId("Кейс 1");
        DrillingstatPage.open()
        reporter.addStep("Открываем меню Drilling Statistics")
        DrillingstatPage.firstChart.waitForDisplayed(undefined,undefined,"Чарт Drilling Statistics не загрузился")
        browser.pause(1000)
    })

    it('Проверка открытия вкладки Rotary Analysis', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 6");
        reporter.addTestId("Кейс 2");
        RotaryanalysisPage.open()
        reporter.addStep("Открываем меню Rotary Analysis")
        RotaryanalysisPage.firstChart.waitForDisplayed(undefined,undefined,"Чарт Rotary Analysis не загрузился")
        browser.pause(1000)
    })

    it('Проверка открытия вкладки Connections', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 7");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user)
//        reporter.addStep("Залогиниваемся")
        ConnectionsPage.open()
        reporter.addStep("Открываем меню Connections")
        ConnectionsPage.firstChart.waitForDisplayed(undefined,undefined,"Чарт Connections не загрузился")
        browser.pause(1000)
    })

    it('Проверка открытия вкладки Days vs Depth', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 8");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user)
//        reporter.addStep("Залогиниваемся")
        DaysvsdepthPage.open()
        reporter.addStep("Открываем меню Days vs Depth")
        DaysvsdepthPage.firstChart.waitForDisplayed(undefined,undefined,"Чарт Days vs Depth не загрузился")
        browser.pause(1000)
    })

    it('Проверка открытия вкладки Slidesheet', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 9");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user)
//        reporter.addStep("Залогиниваемся")
        SlidesheetPage.open()
        reporter.addStep("Открываем меню Slidesheet")
        SlidesheetPage.firstChart.waitForDisplayed(undefined,undefined,"Чарт Slidesheet не загрузился")
        browser.pause(2000)
    })

    it('Проверка открытия вкладки Surveys', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 10");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user)
//        reporter.addStep("Залогиниваемся")
        SurveysPage.open()
        reporter.addStep("Открываем меню Surveys")
        SurveysPage.firstChart.waitForDisplayed(undefined,undefined,"Таблица Surveys не загрузилась")
        browser.pause(2000)
    })

    it('Проверка открытия вкладки Plans', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 11");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user)
//        reporter.addStep("Залогиниваемся")
        PlansPage.open()
        reporter.addStep("Открываем меню Plans")
        PlansPage.firstChart.waitForDisplayed(undefined,undefined,"Таблица Plans не загрузилась")
        browser.pause(2000)
    })

    it('Проверка открытия вкладки Plan vs Actual', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 12");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user)
//        reporter.addStep("Залогиниваемся")
        PlanvsatualPage.open()
        reporter.addStep("Открываем меню Plan vs Actual")
        PlanvsatualPage.firstChart.waitForDisplayed(undefined,undefined,"Чарт Plan vs Actual не загрузился")
        browser.pause(2000)
    })

    it('Проверка открытия вкладки Deviation Analysis', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 13");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user)
//        reporter.addStep("Залогиниваемся")
        DeviationPage.open()
        reporter.addStep("Открываем меню Deviation Analysis")
        DeviationPage.firstChart.waitForDisplayed(undefined,undefined,"Чарт Deviation Analysis не загрузился")
        browser.pause(2000)
    })

    it('Проверка открытия вкладки Bild Walk', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 14");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user)
//        reporter.addStep("Залогиниваемся")
        BildwalkPage.open()
        reporter.addStep("Открываем меню Bild Walk")
        BildwalkPage.firstChart.waitForDisplayed(undefined,undefined,"Чарт Bild Walk не загрузился")
        browser.pause(2000)
    })

    it('Проверка открытия вкладки Separation', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 15");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user)
//        reporter.addStep("Залогиниваемся")
        SeparationPage.open()
        reporter.addStep("Открываем меню Separation")
        SeparationPage.firstChart.waitForDisplayed(undefined,undefined,"Чарт Separation не загрузился")
        browser.pause(2000)
    })
    
    it('Проверка открытия Companies', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 16");
        reporter.addTestId("Кейс 1");
        LoginPage.login(users.user)
        reporter.addStep("Залогиниваемся")
        CompaniesPage.open()
        reporter.addStep("Открываем меню Companies")
        CompaniesPage.firstChart.waitForDisplayed(undefined,undefined,"Чарт Companies не загрузился")
        browser.pause(3000)
    })

    it('Проверка открытия Users', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 17");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user) 5555
//        reporter.addStep("Залогиниваемся")
        UsersPage.open()
        reporter.addStep("Открываем меню Users")
        UsersPage.firstChart.waitForDisplayed(undefined,undefined,"Таблица Users не загрузилась")
        browser.pause(3000)
    })

    it('Проверка открытия Wells', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 18");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user)
//        reporter.addStep("Залогиниваемся")
        WellsPage.open()
        reporter.addStep("Открываем меню Wells")
        WellsPage.firstChart.waitForDisplayed(undefined,undefined,"Таблица Wells не загрузилась")
        browser.pause(3000)
    })

    it('Выбор в меню Run', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 19");
        reporter.addTestId("Кейс 1");
        LoginPage.login(users.user)
        reporter.addStep("Залогиниваемся")
        DashboardPage.isOpened()
        reporter.addStep("Открываем Dashboard")
        DashboardPage.selectRun.click()
        reporter.addStep("Нажимаем на кнопку Run")
        DashboardPage.openRun.click()
        reporter.addStep("Выбираем первый Run")
        DashboardPage.firstChart.waitForDisplayed(undefined,undefined,"Первый чарт не загрузился")
        browser.pause(2000)
    })

    it('Выбор в меню Section', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 20");
        reporter.addTestId("Кейс 1");
        LoginPage.login(users.user)
        reporter.addStep("Залогиниваемся")
        DashboardPage.isOpened()
        reporter.addStep("Открываем Dashboard")
        DashboardPage.selectSection.click()
        reporter.addStep("Нажимаем на кнопку Section")
        DashboardPage.openSection.click()
        reporter.addStep("Выбираем первый Section")
        DashboardPage.firstChart.waitForDisplayed(undefined,undefined,"Первый чарт не загрузился")
        browser.pause(2000)
    })

    it('Выбор в меню Well', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 21");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user)
//        reporter.addStep("Залогиниваемся")
        DashboardPage.isOpened()
        reporter.addStep("Открываем Dashboard")
        DashboardPage.openWellMenu.click()
        reporter.addStep("Выбираем в меню Well")
        DashboardPage.firstChart.waitForDisplayed(undefined,undefined,"Первый чарт не загрузился")
        browser.pause(2000)
    })

    it('Выбор фильтра по дате и времени', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 22");
        reporter.addTestId("Кейс 1");
        LoginPage.login(users.user)
        reporter.addStep("Залогиниваемся")
        DashboardPage.isOpened()
        reporter.addStep("Открываем Dashboard и фильтр")
        DashboardPage.selectFromFilter.click()
//        DashboardPage.dialog.waitForDisplayed(undefined,undefined,"Диалог не открылся")
//        reporter.addStep("Ждем что откроется окно выбора фильтра")
        DashboardPage.dateFromBtn.click()
        DashboardPage.selectFromDate.click()
        DashboardPage.clickOkBtn.click()
        reporter.addStep("Выбираем дату отличную от даты начала скважины")
        DashboardPage.firstChart.waitForDisplayed(undefined,undefined,"Первый чарт не загрузился")
        browser.pause(2000)
    })

    xit('Выбор в меню окончания периода скважины', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 23");
        reporter.addTestId("Кейс 1");
//        LoginPage.login(users.user)
//        reporter.addStep("Залогиниваемся")
        DashboardPage.isOpened()
        reporter.addStep("Открываем Dashboard")
        DashboardPage.selectTotime.click()
        reporter.addStep("Выбираем в меню начало скважины")
        DashboardPage.dialog.waitForDisplayed(undefined,undefined,"Диалог не открылся")
        reporter.addStep("Ждем что откроется окно выбора скважины")
        DashboardPage.datetoBtn.click()
        reporter.addStep("Выбираем старт well")
        DashboardPage.firstChart.waitForDisplayed(undefined,undefined,"Первый чарт не загрузился")
        browser.pause(2000)
    })

    it('Выбор в меню темной темы', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 24");
        reporter.addTestId("Кейс 1");
        DashboardPage.isOpened()
        reporter.addStep("Открываем Dashboard")
        DashboardPage.selectProfile.click()
        reporter.addStep("Выбираем в меню начало скважины")
        DashboardPage.switchthemeBtn.click()
        reporter.addStep("Перелогиниваемся")
        DashboardPage.firstChart.waitForDisplayed(undefined,undefined,"Первый чарт не загрузился")
        browser.pause(2000)
    })

    it('Выбор в меню логаута', () => {
        reporter.addFeature("Регресс");
        reporter.addStory(path.basename(__filename));
        reporter.addIssue("Задача 25");
        reporter.addTestId("Кейс 1");
//        DashboardPage.isOpened()
//        reporter.addStep("Открываем Dashboard")
        DashboardPage.switchthemeBtn.click()
//        DashboardPage.selectProfile.click()
        reporter.addStep("Выбираем логаут")
        DashboardPage.logoutBtn.click()
        reporter.addStep("Перелогиниваемся")
        LoginPage.pageIndicator.isClickable()
        browser.pause(2000)
    })
*/

})