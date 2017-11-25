import {RegistrationModule} from "../modules/registration.module";
import {$, browser, by, ElementFinder} from "protractor";
import {promise, until} from "selenium-webdriver";

export class ApplicationPage {

    private userProfile: ElementFinder;

    registrationModule: RegistrationModule;

    constructor() {
        this.userProfile = $('#automizy-header-dropdown-user');

        this.registrationModule = new RegistrationModule();
    }

    registerAccount(firstName: string, lastName: string, company: string, password: string): promise.Promise<boolean> {
        this.registrationModule.register(
            firstName, lastName, company, password
        );

        let driver = browser.driver;
        return driver.wait(until.elementLocated(by.css('#automizy-instructions-notification')), 60 * 1000)
            .then(function (element) {
                    return driver.wait(until.elementIsVisible(element), 10 * 1000)
                }
            );
    }

    isUserProfileDisplayed() {
        return this.userProfile.isDisplayed();
    }
}