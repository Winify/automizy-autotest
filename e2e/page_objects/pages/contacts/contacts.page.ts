import {AutomizyPage} from "../base/automizy.page";
import {$, $$, browser, by, ElementArrayFinder, ElementFinder} from "protractor";
import {expect} from "../../../features/support/expect";
import {CreateContactDialog} from "../../modules/others/create-contact.dialog";
import {promise} from "selenium-webdriver";

export class ContactsPage {

    private addContactBtn: ElementFinder;
    private createContactDialog: CreateContactDialog;
    private emails: ElementArrayFinder;

    static assertPage() {
        AutomizyPage.waitForElement(by.css('#automizy-page-contacts'));

        expect($('#automizy-page-contacts-title').getText()).to.eventually.equal('Complete list of contacts');
        expect(browser.getCurrentUrl()).to.eventually.contain('contactsPage');
    }

    constructor() {
        this.addContactBtn = $('#automizy-contacts-new-contact-button');
        this.emails = $$('#automizy-table-contacts tr:not(.automizy-table-header) td.automizy-main-cell');

        this.createContactDialog = new CreateContactDialog();
    }

    addNewContact(contactEmail: string, firstName = 'Contact', lastName = 'New') {
        this.addContactBtn.click();
        AutomizyPage.waitForElement(by.css('.automizy-dialog-box'));

        this.createContactDialog.create(contactEmail, firstName, lastName);
        AutomizyPage.waitForElement(by.css('#automizy-contact-profile-main-data'));

        browser.sleep(250);
    }

    getEmails(): promise.Promise<string> {
        return this.emails.getText();
    }
}