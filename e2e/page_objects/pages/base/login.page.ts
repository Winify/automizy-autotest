import {$, $$, browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {ApplicationPage} from "./application.page";
import {expect} from "../../../features/support/expect";
import {AutomizyPage} from "./automizy.page";
import {promise} from "selenium-webdriver";

export class LoginPage {

    private loginForm: ElementFinder;
    private loginSpan: ElementFinder;
    private createFreeAccountSpan: ElementFinder;
    private createNewAccountSpan: ElementFinder;

    private emailInputs: ElementArrayFinder;
    private passwordInputs: ElementArrayFinder;

    static get() {
        browser.get('https://login.automizy.com/');
        this.assertPage();

        return new LoginPage();
    }

    private static assertPage() {
        AutomizyPage.waitForElement(by.css('#automizy-gate-logo'));
        expect($('div.automizy-gate-login-normal').isDisplayed()).to.eventually.equal(true);
    }

    constructor() {
        this.loginForm = $('div.automizy-gate-login-normal');
        this.loginSpan = element(by.cssContainingText('a span.automizy-button-text', 'Login'));
        this.createFreeAccountSpan = element(by.cssContainingText('a span.automizy-button-text', 'Create my FREE account'));
        this.createNewAccountSpan = element(by.cssContainingText('a span.automizy-button-text', 'Create new account'));

        this.emailInputs = $$('input[name=email]');
        this.passwordInputs = $$('input[name=password]');
    }

    isLoginFormDisplayed(): promise.Promise<boolean> {
        return this.loginForm.isDisplayed();
    }

    createAccount(email: string) {
        this.createFreeAccountSpan.click();
        browser.sleep(500);

        this.getVisibleEmailInput().sendKeys(email);
        this.createNewAccountSpan.click();

        return new ApplicationPage();
    }

    login(email: string, password: string) {
        this.getVisibleEmailInput().sendKeys(email);
        this.getVisiblePasswordInput().sendKeys(password);

        this.loginSpan.click();

        ApplicationPage.assertPage();

        return new ApplicationPage();
    }


    private getVisibleEmailInput() {
        return AutomizyPage.getVisibleElementFrom(this.emailInputs);
    }

    private getVisiblePasswordInput() {
        return AutomizyPage.getVisibleElementFrom(this.passwordInputs);
    }
}