import {browser, by, element, ElementFinder} from "protractor";
import {ContactsPage} from "../../pages/contacts/contacts.page";
import {CustomFieldsPage} from "../../pages/custom_fields/custom-fields.page";
import {SegmentsPage} from "../../pages/segments/segments.page";

export class ContactsMenu {

    private thisMenu: ElementFinder;
    private mainSpan: ElementFinder;

    constructor() {
        this.thisMenu = element(by.cssContainingText('div.automizy-menu-menuitem', 'Contacts'));
        this.mainSpan = this.thisMenu.element(by.css('div.automizy-menu-menuitem table span.automizy-menu-menuitem-content'));
    }

    chooseCompleteList() {
        this.clickOnSpan('Complete list');
        ContactsPage.assertPage();

        return new ContactsPage();
    }

    chooseSegments() {
        this.clickOnSpan('Segments');
        SegmentsPage.assertPage();

        return new SegmentsPage();
    }

    chooseCustomFields() {
        this.clickOnSpan('Custom fields');
        CustomFieldsPage.assertPage();

        return new CustomFieldsPage();
    }

    private clickOnSpan(text: string) {
        this.mainSpan.click();
        browser.sleep(500);
        this.thisMenu.element(by.cssContainingText('div.automizy-menu-submenuitem', text)).click();
    }
}