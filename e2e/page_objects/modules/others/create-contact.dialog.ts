import {$, by, ElementFinder} from "protractor";

export class CreateContactDialog {
    private thisDialog: ElementFinder;

    private email: ElementFinder;
    private firstName: ElementFinder;
    private lastName: ElementFinder;
    private createBtn: ElementFinder;

    constructor() {
        this.thisDialog = $('.automizy-dialog-box');

        this.email = this.thisDialog.element(by.name('email'));
        this.firstName = this.thisDialog.element(by.name('firstName'));
        this.lastName = this.thisDialog.element(by.name('lastName'));

        this.createBtn = this.thisDialog.element(by.cssContainingText('span', 'Create contact'));
    }

    create(contactEmail: string, firstName: string, lastName: string) {
        this.email.sendKeys(contactEmail);
        this.firstName.sendKeys(firstName);
        this.lastName.sendKeys(lastName);

        this.createBtn.click();
    }
}