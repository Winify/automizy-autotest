import {SegmentsPage} from "../../page_objects/pages/segments/segments.page";
import {CreateSegmentPage} from "../../page_objects/pages/segments/create-segment.page";
import {expect} from "../support/expect";
import {by, element} from "protractor";

export = function segmentsSteps() {

    const segmentName = 'Segment ' + new Date().getTime();

    let segmentsPage: SegmentsPage;
    let createSegmentPage: CreateSegmentPage;

    this.Given(/^s?he sees the segments$/,
        function () {
            return segmentsPage = this.applicationPage.contactsMenu.chooseSegments();
        }
    );

    this.When(/^s?he creates a new segment$/,
        function () {
            return createSegmentPage = segmentsPage.createSegment(segmentName);
        }
    );

    this.When(/^s?he chooses (.*) as (.*) and it (.*) (.*)$/,
        function (dataName: string, criteria: string, matchType: string, value: string) {
            return createSegmentPage.createSegmentRow(criteria, dataName, matchType, value);
        }
    );

    this.When(/^s?he saves the segment$/,
        function () {
            return segmentsPage = createSegmentPage.saveAndClose();
        }
    );

    this.Then(/^s?he should see created on the page$/,
        function () {
            expect(element(by.cssContainingText('td', segmentName)).isDisplayed()).to.eventually.equal(true);
        }
    );

}
