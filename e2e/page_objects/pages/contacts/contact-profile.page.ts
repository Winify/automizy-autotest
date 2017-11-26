import {AutomizyPage} from "../base/automizy.page";
import {browser, by, element, ElementFinder} from "protractor";
import {expect} from "../../../features/support/expect";
import {CreateCustomFieldDialog} from "../../modules/others/create-custom-field.dialog";

export class ContactProfilePage {

    private newFieldBtn: ElementFinder;
    private createFieldDialog: CreateCustomFieldDialog;

    static assertPage() {
        AutomizyPage.waitForElement(by.css('#automizy-contact-profile-main-data-name'));

        expect(browser.getCurrentUrl()).to.eventually.contain('contactProfile');
    }

    constructor() {
        this.newFieldBtn = element(by.cssContainingText('span', 'New field'));

        this.createFieldDialog = new CreateCustomFieldDialog();
    }

    addNewField(type: string, fieldName: string) {
        this.newFieldBtn.click();
        AutomizyPage.waitForElement(by.css('.automizy-dialog-box'));

        this.createFieldDialog.create(type, fieldName);
        browser.sleep(250);
    }
}