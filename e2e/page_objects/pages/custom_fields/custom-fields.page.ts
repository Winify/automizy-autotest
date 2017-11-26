import {$, $$, browser, by, ElementArrayFinder, ElementFinder} from "protractor";
import {AutomizyPage} from "../base/automizy.page";
import {expect} from "../../../features/support/expect";
import {CreateCustomFieldDialog} from "../../modules/others/create-custom-field.dialog";

export class CustomFieldsPage {
    private addCustomFieldBtn: ElementFinder;
    private fieldNames: ElementArrayFinder;
    private createCustomFieldDialog: CreateCustomFieldDialog;

    static assertPage() {
        AutomizyPage.waitForElement(by.css('#automizy-page-customfields'));

        expect($('#automizy-page-customfields-title').getText()).to.eventually.equal('Custom Fields');
        expect(browser.getCurrentUrl()).to.eventually.contain('customFieldsPage');
    }

    constructor() {
        this.addCustomFieldBtn = $('#automizy-newCustomField-button');
        this.fieldNames = $$('tr td.automizy-main-cell:nth-child(2)');

        this.createCustomFieldDialog = new CreateCustomFieldDialog();
    }

    addNewCustomField(type: string, name: string) {
        this.addCustomFieldBtn.click();
        AutomizyPage.waitForElement(by.css('.automizy-dialog-box'));

        this.createCustomFieldDialog.create(type, name);

        browser.sleep(250);
    }

}