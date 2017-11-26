import {RegistrationModule} from "../modules/registration.module";
import {$, browser, by, ElementFinder} from "protractor";
import {promise} from "selenium-webdriver";
import {expect} from "../../features/support/expect";
import {AutomizyPage} from "./automizy.page";

export class ApplicationPage {

    private userProfile: ElementFinder;

    registrationModule: RegistrationModule;

    static assertPage() {
        AutomizyPage.waitForElement(by.css('#automizy-menu-logo-normal'));

        expect(browser.getCurrentUrl()).to.eventually.contain('automationDashboardPage');
        expect($('#automizy-menu-logo-normal').isDisplayed()).to.eventually.equal(true);
    }

    constructor() {
        this.userProfile = $('#automizy-header-dropdown-user');

        this.registrationModule = new RegistrationModule();
    }

    registerAccount(firstName: string, lastName: string, company: string, password: string): promise.Promise<boolean> {
        this.registrationModule.register(
            firstName, lastName, company, password
        );

        return AutomizyPage.waitForElement(by.css('#automizy-instructions-notification'));
    }

    isUserProfileDisplayed() {
        return this.userProfile.isDisplayed();
    }
}