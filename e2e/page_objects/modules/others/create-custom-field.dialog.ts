import {$, by, ElementFinder} from "protractor";

export class CreateCustomFieldDialog {
    private thisDialog: ElementFinder;

    private typeSelector: ElementFinder;
    private fieldName: ElementFinder;
    private nextBtn: ElementFinder;
    private saveBtn: ElementFinder;

    constructor() {
        this.thisDialog = $('.automizy-dialog-box');

        this.typeSelector = this.thisDialog.element(by.css('#automizy-custom-field-manager-type-selector'));
        this.fieldName = this.thisDialog.element(by.css('input[type=text]'));

        this.nextBtn = this.thisDialog.element(by.cssContainingText('span', 'Next'));
        this.saveBtn = this.thisDialog.element(by.cssContainingText('span', 'Save'));
    }

    create(type: string, name: string) {
        this.typeSelector.element(by.cssContainingText('.automizy-custom-field-manager-list-element-title', type)).click();

        this.fieldName.sendKeys(name);
        this.nextBtn.click();

        this.saveBtn.click();
    }
}