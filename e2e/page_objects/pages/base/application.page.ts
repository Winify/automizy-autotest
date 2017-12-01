import {RegistrationModal} from "../../modules/others/registration.modal";
import {$, browser, by, ElementFinder} from "protractor";
import {promise} from "selenium-webdriver";
import {expect} from "../../../features/support/expect";
import {AutomizyPage} from "./automizy.page";
import {ContactsMenu} from "../../modules/menus/contacts.menu";
import {LoginPage} from "./login.page";

export class ApplicationPage {

    private userProfile: ElementFinder;
    private logoutBtn: ElementFinder;

    registrationModal: RegistrationModal;
    contactsMenu: ContactsMenu;

    static assertPage() {
        AutomizyPage.waitForElement(by.css('#automizy-menu-logo-normal'));
        browser.sleep(500);

        expect(browser.getCurrentUrl()).to.eventually.contain('automationDashboardPage');
        expect($('#automizy-menu-logo-normal').isDisplayed()).to.eventually.equal(true);
    }

    constructor() {
        this.userProfile = $('#automizy-header-dropdown-user');
        this.logoutBtn = $('.fa.fa-power-off');

        this.registrationModal = new RegistrationModal();
        this.contactsMenu = new ContactsMenu();
    }

    registerAccount(firstName: string, lastName: string, company: string, password: string): promise.Promise<boolean> {
        this.registrationModal.register(
            firstName, lastName, company, password
        );

        return AutomizyPage.waitForElement(by.css('#automizy-instructions-notification'));
    }

    isUserProfileDisplayed() {
        return this.userProfile.isDisplayed();
    }

    logout() {
        this.userProfile.click();
        this.logoutBtn.click();

        return new LoginPage()
    }
}