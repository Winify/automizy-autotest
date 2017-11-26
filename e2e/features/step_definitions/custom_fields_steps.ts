import {expect} from "../support/expect";
import {CustomFieldsPage} from "../../page_objects/pages/custom_fields/custom-fields.page";
import {by, element} from "protractor";

export = function customFieldSteps() {

    const fieldName = 'Custom Field ' + new Date().getTime();

    let customFieldsPage: CustomFieldsPage;

    this.Given(/^s?he sees the custom fields$/,
        function () {
            return customFieldsPage = this.applicationPage.contactsMenu.chooseCustomFields();
        }
    );

    this.When(/^s?he adds a new custom field$/,
        function () {
            return customFieldsPage.addNewCustomField('Text', fieldName);
        }
    );

    this.Then(/^s?he should see the created field in the table$/,
        function () {
            expect(element(by.cssContainingText('td', fieldName)).isDisplayed()).to.eventually.equal(true);
        }
    );

}