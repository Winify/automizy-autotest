import {$, browser, by, element, ElementFinder} from "protractor";
import {RegisterPage} from "./register.page";
import {LoginPage} from "./login.page";
import {ApplicationPage} from "./application.page";

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