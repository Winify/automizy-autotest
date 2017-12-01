import {$, $$, by, ElementArrayFinder, ElementFinder} from "protractor";
import {AutomizyPage} from "../../pages/base/automizy.page";

export class SetSegmentValueDialog {

    private thisDialog: ElementFinder;
    private typeSelect: ElementFinder;
    private optionsBox: ElementArrayFinder;
    private valueInput: ElementFinder;
    private okBtn: ElementFinder;

    constructor() {
        this.thisDialog = $('.automizy-string-filter');

        this.typeSelect = this.thisDialog.element(by.css('.automizy-select-tr'));
        this.optionsBox = $$('.automizy-select-option-box');

        this.valueInput = this.thisDialog.element(by.css('input'));

        this.okBtn = this.thisDialog.element(by.cssContainingText('a span.automizy-button-text', 'Ok'));
    }

    setValue(matchType: string, value: string) {
        this.typeSelect.click();
        this.getVisibleOptionBox().element(by.cssContainingText('td', matchType)).click();
        this.valueInput.sendKeys(value);

        this.okBtn.click();
    }

    private getVisibleOptionBox(): ElementFinder {
        return AutomizyPage.getVisibleElementFrom(this.optionsBox);
    }
}