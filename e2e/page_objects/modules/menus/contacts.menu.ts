import {browser, by, element, ElementFinder} from "protractor";
import {ContactsPage} from "../../pages/contacts/contacts.page";

export class ContactsMenu {

    private thisMenu: ElementFinder;
    private mainSpan: ElementFinder;

    constructor() {
        this.thisMenu = element(by.cssContainingText('div.automizy-menu-menuitem', 'Contacts'));
        this.mainSpan = this.thisMenu.element(by.css('div.automizy-menu-menuitem table span.automizy-menu-menuitem-content'));
    }

    chooseCompleteList(){
        this.clickOnSpan('Complete list');
        ContactsPage.assertPage();

        return new ContactsPage();
    }

    private clickOnSpan(text: string) {
        this.mainSpan.click();
        browser.sleep(500);
        this.thisMenu.element(by.cssContainingText('div.automizy-menu-submenuitem', text)).click();
    }
}