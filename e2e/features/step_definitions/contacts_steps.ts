import {ContactsPage} from "../../page_objects/pages/contacts/contacts.page";
import {ContactProfilePage} from "../../page_objects/pages/contacts/contact-profile.page";
import {expect} from "../support/expect";
import {$, by, element} from "protractor";

export = function contactsSteps() {

    const contactEmail = 'new.contact' + new Date().getTime() + '@gmail.com';
    const fieldName = 'Profile Field ' + new Date().getTime();

    let contactsPage: ContactsPage;
    let contactProfilePage: ContactProfilePage;

    this.Given(/^s?he sees the complete list of contacts$/,
        function () {
            return contactsPage = this.applicationPage.contactsMenu.chooseCompleteList();
        }
    );

    this.Given(/^s?he selects an active contact$/,
        function () {
            return contactProfilePage = contactsPage.selectContact('wince.graics@gmail.com');
        }
    );

    this.When(/^s?he adds a new contact$/,
        function () {
            return contactsPage.addNewContact(contactEmail);
        }
    );

    this.When(/^s?he adds a new field to the contact$/,
        function () {
            return contactProfilePage.addNewField('Text', fieldName);
        }
    );

    this.Then(/^s?he should see the new contact profile page$/,
        function () {
            expect($('#automizy-contact-profile-main-data-email').getText()).to.eventually.equal(contactEmail);
        }
    );

    this.Then(/^s?he should see it added to the profile$/,
        function () {
            expect(element(by.cssContainingText('label', fieldName)).isDisplayed()).to.eventually.equal(true);
        }
    );

}