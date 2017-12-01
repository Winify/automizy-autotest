import {$, by, ElementFinder} from "protractor";
import {AutomizyPage} from "../../pages/base/automizy.page";

export class CreateSegmentDialog {
    private thisDialog: ElementFinder;
    private segmentNameInput: ElementFinder;
    private nextBtn: ElementFinder;

    constructor() {
        this.thisDialog = $('.automizy-dialog-box');

        this.segmentNameInput = this.thisDialog.element(by.css('input'));
        this.nextBtn = this.thisDialog.element(by.cssContainingText('span', 'Next'));
    }

    create(segmentName: string) {
        AutomizyPage.waitForElement(by.css('.automizy-dialog-box'));

        this.segmentNameInput.sendKeys(segmentName);
        this.nextBtn.click();
    }
}