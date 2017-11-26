import {$, by, ElementFinder} from "protractor";
import {ApplicationPage} from "./application.page";

export class RegisterPage {
    private registerForm: ElementFinder;
    private emailInput: ElementFinder;
    private submit: ElementFinder;

    constructor() {
        this.registerForm = $('#trial-form');

        this.emailInput = this.registerForm.element(by.css('[name=email]'));
        this.submit = this.registerForm.element(by.css('[type=submit]'));
    }

    signUp(email: string) {
        this.emailInput.sendKeys(email);
        this.submit.click();

        return new ApplicationPage();
    }
}