import {AutomizyPage} from "../base/automizy.page";
import {$, $$, browser, by, ElementArrayFinder, ElementFinder} from "protractor";
import {expect} from "../../../features/support/expect";
import {CreateContactDialog} from "../../modules/others/create-contact.dialog";
import {ContactProfilePage} from "./contact-profile.page";

export class ContactsPage {

    private addContactBtn: ElementFinder;
    private contactsTable: ElementFinder;

    private lookAtBtns: ElementArrayFinder;
    private deleteBtns: ElementArrayFinder;

    private createContactDialog: CreateContactDialog;

    static assertPage() {
        AutomizyPage.waitForElement(by.css('#automizy-page-contacts'));

        expect($('#automizy-page-contacts-title').getText()).to.eventually.equal('Complete list of contacts');
        expect(browser.getCurrentUrl()).to.eventually.contain('contactsPage');

        AutomizyPage.waitForElementToContain(by.css('#automizy-page-contacts .automizy-table-entries-box'), 'Showing');
    }

    constructor() {
        this.addContactBtn = $('#automizy-contacts-new-contact-button');
        this.contactsTable = $('#automizy-table-contacts');

        this.lookAtBtns = $$('#automizy-table-contacts .fa.fa-eye');
        this.deleteBtns = $$('#automizy-table-contacts .fa.fa-trash');

        this.createContactDialog = new CreateContactDialog();
    }

    addNewContact(contactEmail: string, firstName = 'Contact', lastName = 'New') {
        this.addContactBtn.click();
        AutomizyPage.waitForElement(by.css('.automizy-dialog-box'));

        this.createContactDialog.create(contactEmail, firstName, lastName);
        ContactProfilePage.assertPage();

        browser.sleep(250);
    }

    selectContact(contact: string) {
        this.contactsTable.element(by.cssContainingText('td', contact)).click();
        browser.sleep(500);

        this.getVisibleLookAtBtn().click();
        ContactProfilePage.assertPage();

        return new ContactProfilePage();
    }

    private getVisibleLookAtBtn(): ElementFinder {
        return AutomizyPage.getVisibleElementFrom(this.lookAtBtns);
    }
}