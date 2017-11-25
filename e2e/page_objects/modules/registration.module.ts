import {$, $$, by, element, ElementFinder} from "protractor";
import {promise} from "selenium-webdriver";

export class RegistrationModule {
    private title: ElementFinder;

    private firstNameInput: ElementFinder;
    private lastNameInput: ElementFinder;
    private companyInput: ElementFinder;
    private passwordInput: ElementFinder;

    private finishedSpan: ElementFinder;

    constructor() {
        this.title = $$('h1').last();
        this.firstNameInput = $('input[name=firstname]');
        this.lastNameInput = $('input[name=lastname]');
        this.companyInput = $('input[name=organization]');
        this.passwordInput = $('input[name=new-password]');

        this.finishedSpan = element(by.cssContainingText('a span.automizy-button-text', 'Finished!'));
    }

    getTitle(): promise.Promise<string> {
        return this.title.getText();
    }

    register(firstName: string, lastName: string, company: string, password: string) {

    }
}