import {ContactsPage} from "../../page_objects/pages/contacts/contacts.page";
import {expect} from "../support/expect";
import {$} from "protractor";

export = function registrationSteps() {

    const contactEmail = 'new.contact' + new Date().getTime() + '@gmail.com';

    let contactsPage: ContactsPage;

    this.Given(/^s?he sees the complete list of contacts$/,
        function () {
            return contactsPage = this.applicationPage.contactsMenu.chooseCompleteList();
        }
    );

    this.When(/^s?he adds a new contact$/,
        function () {
            return contactsPage.addNewContact(contactEmail);
        }
    );

    this.Then(/^s?he should see the new contact profile page$/,
        function () {
            expect($('#automizy-contact-profile-main-data-email').getText()).to.eventually.equal(contactEmail);
        }
    );

}