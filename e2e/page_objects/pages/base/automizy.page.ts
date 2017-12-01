import {$, browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {RegisterPage} from "./register.page";
import {LoginPage} from "./login.page";
import {ApplicationPage} from "./application.page";
import {By, promise, until} from "selenium-webdriver";

export class AutomizyPage {
    private freeTrialLink: ElementFinder;
    private loginLink: ElementFinder;

    private emailInput: ElementFinder;
    private submit: ElementFinder;

    static get() {
        browser.get('/');
        return new AutomizyPage();
    }

    static switchTabsTo(tabNumber: number) {
        browser.getAllWindowHandles().then(function (handles) {
            browser.close();
            browser.switchTo().window(handles[tabNumber]);
        });
    }

    static waitForElement(locator: By): promise.Promise<boolean> {
        let driver = browser.driver;
        return driver.wait(until.elementLocated(locator), 60 * 1000)
            .then(function (element) {
                    return driver.wait(until.elementIsVisible(element), 10 * 1000)
                }
            );
    }

    static waitForElementToContain(locator: By, text: string): promise.Promise<boolean> {
        let driver = browser.driver;
        return driver.wait(until.elementLocated(locator), 60 * 1000)
            .then(function (element) {
                    return driver.wait(until.elementTextContains(element, text), 10 * 1000)
                }
            );
    }

    static getVisibleElementFrom(elementArray: ElementArrayFinder): ElementFinder {

        return elementArray.filter(function (element) {
            return element.isDisplayed().then(function (displayed) {
                return displayed === true;
            })
        }).first();
    }

    constructor() {
        this.freeTrialLink = element(by.cssContainingText('a', 'Free Trial'));
        this.loginLink = element(by.cssContainingText('a', 'Login'));

        this.emailInput = $('[type=email]');
        this.submit = $('input.register-button.cta-button');
    }

    seeFreeTrialOptions() {
        this.freeTrialLink.click();
        AutomizyPage.switchTabsTo(1);

        return new RegisterPage();
    }


    clickLogin() {
        this.loginLink.click();
        AutomizyPage.switchTabsTo(1);

        return new LoginPage();
    }

    applyForFreeTrial(email: string) {
        this.emailInput.sendKeys(email);
        this.submit.click();

        return new ApplicationPage();
    }
}