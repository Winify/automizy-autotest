import {$, $$, browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {ApplicationPage} from "./application.page";
import {expect} from "../../../features/support/expect";
import {AutomizyPage} from "./automizy.page";

export class LoginPage {
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
        expect($('#automizy-gate-logo').isDisplayed()).to.eventually.equal(true);
    }

    constructor() {
        this.loginSpan = element(by.cssContainingText('a span.automizy-button-text', 'Login'));
        this.createFreeAccountSpan = element(by.cssContainingText('a span.automizy-button-text', 'Create my FREE account'));
        this.createNewAccountSpan = element(by.cssContainingText('a span.automizy-button-text', 'Create new account'));

        this.emailInputs = $$('input[name=email]');
        this.passwordInputs = $$('input[name=password]');
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

        return this.emailInputs.filter(function (element) {
            return element.isDisplayed().then(function (displayed) {
                return displayed === true;
            })
        }).first();
    }

    private getVisiblePasswordInput() {

        return this.passwordInputs.filter(function (element) {
            return element.isDisplayed().then(function (displayed) {
                return displayed === true;
            })
        }).first();
    }
}