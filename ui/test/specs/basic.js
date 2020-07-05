const LandingPage = require('../pageobjects/landing.page')
const chai = require('chai')
const assert = chai.assert;
const {user} =  require('../testdata/users')

describe('Smoke набор тестов биржи', () => {
    it('Ввод корректных данных', () => {  // скипнутый тест xit, не скипнутый it
        LandingPage.open()
        LandingPage.pageAuth.waitForDisplayed()
        LandingPage.pageAuth.click()

        LandingPage.login(user)

        LandingPage.authDfa.waitForDisplayed()
        LandingPage.authDfa.setValue(user.param)

        LandingPage.loginDfa.waitForDisplayed()
        LandingPage.loginDfa.click()
        LandingPage.isOpened()
     })

})