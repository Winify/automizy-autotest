import {CreateSegmentPage} from "./create-segment.page";
import {CreateSegmentDialog} from "../../modules/others/create-segment.dialog";
import {$, by, element, ElementFinder} from "protractor";
import {AutomizyPage} from "../base/automizy.page";
import {expect} from "../../../features/support/expect";

export class SegmentsPage {
    private createSegmentBtn: ElementFinder;
    private createSegmentDialog: CreateSegmentDialog;

    static assertPage() {
        AutomizyPage.waitForElement(by.css('#automizy-page-segments'));

        expect($('#automizy-page-segments-title').getText()).to.eventually.equal('Segments');
        AutomizyPage.waitForElementToContain(by.css('#automizy-page-segments .automizy-table-entries-box'), 'Showing');
    }

    constructor() {
        this.createSegmentBtn = element(by.cssContainingText('a span.automizy-button-text', 'New segment'));

        this.createSegmentDialog = new CreateSegmentDialog();
    }

    createSegment(segmentName: string) {
        this.createSegmentBtn.click();
        this.createSegmentDialog.create(segmentName);

        CreateSegmentPage.assertPage(segmentName);

        return new CreateSegmentPage()
    }
}