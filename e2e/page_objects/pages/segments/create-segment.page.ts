import {AutomizyPage} from "../base/automizy.page";
import {expect} from "../../../features/support/expect";
import {$, $$, by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {SetSegmentValueDialog} from "../../modules/others/set-segment-value.dialog";
import {SegmentsPage} from "./segments.page";

export class CreateSegmentPage {
    private criteriaSelect: ElementFinder;
    private dataFieldSelect: ElementFinder;
    private optionsBox: ElementArrayFinder;
    private setValueField: ElementFinder;

    private saveBtn: ElementFinder;
    private setValueDialog: SetSegmentValueDialog;

    static assertPage(segmentName: string) {
        AutomizyPage.waitForElement(by.css('div.automizy-segment-editor-box'));

        expect($('#automizy-segment-editor-header-title').getText()).to.eventually.equal(segmentName);
    }

    constructor() {
        this.criteriaSelect = element(by.cssContainingText('.automizy-select-tr', 'Select criteria'));
        this.optionsBox = $$('.automizy-select-option-box');
        this.dataFieldSelect = element(by.cssContainingText('.automizy-select-tr', 'Select a data field'));

        this.setValueField = $('.automizy-segment-editor-customfield-string-box');

        this.saveBtn = element(by.cssContainingText('a span.automizy-button-text', 'Save and close'));

        this.setValueDialog = new SetSegmentValueDialog();
    }

    createSegmentRow(criteria: string, dataName: string, matchType: string, value: string) {
        this.chooseCriteria(criteria);
        this.chooseDataField(dataName);
        this.setValue(matchType, value);
    }

    saveAndClose() {
        this.saveBtn.click();
        SegmentsPage.assertPage();

        return new SegmentsPage();
    }

    private chooseCriteria(criteria: string) {
        this.criteriaSelect.click();
        this.getVisibleOptionBox().element(by.cssContainingText('td', criteria)).click();
    }

    private chooseDataField(dataName: string) {
        this.dataFieldSelect.click();
        this.getVisibleOptionBox().element(by.cssContainingText('td', dataName)).click();
    }

    private setValue(matchType: string, value: string) {
        this.setValueField.click();
        this.setValueDialog.setValue(matchType, value);
    }

    private getVisibleOptionBox(): ElementFinder {
        return AutomizyPage.getVisibleElementFrom(this.optionsBox);
    }
}