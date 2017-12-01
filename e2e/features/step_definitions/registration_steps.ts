import {RegisterPage} from "../../page_objects/pages/base/register.page";
import {expect} from "../support/expect";

export = function registrationSteps() {

    const email = 'wince.graics' + new Date().getTime() + '@gmail.com';

    let registerPage: RegisterPage;

    this.When(/^s?he wants to see the trial version/,
        function () {
            return registerPage = this.automizyPage.seeFreeTrialOptions();
        }
    );

    this.When(/^s?he creates an account with a new email$/,
        function () {
            return this.applicationPage = this.loginPage.createAccount(email);
        }
    );

    this.When(/^s?he signs up on the free trial$/,
        function () {
            return this.applicationPage = registerPage.signUp(email);
        }
    );

    this.When(/^s?he applies for a trial with an email$/,
        function () {
            return this.applicationPage = this.automizyPage.applyForFreeTrial(email);
        }
    );

    this.When(/^s?he registers an account$/,
        function () {
            return this.applicationPage.registerAccount(
                'Vince',
                'Graics',
                'Automizy',
                'Asdf1234'
            );
        }
    );

    this.Then(/^s?he should see the registration form$/,
        function () {
            expect(this.applicationPage.registrationModal.getTitle()).to.eventually.equal('Personalize your account!');
        }
    );

}
