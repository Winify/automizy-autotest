import {expect} from "../support/expect";
import {AutomizyPage} from "../../page_objects/pages/automizy.page";
import {RegisterPage} from "../../page_objects/pages/register.page";
import {LoginPage} from "../../page_objects/pages/login.page";
import {ApplicationPage} from "../../page_objects/pages/application.page";

export = function Steps() {

    let automizyPage: AutomizyPage;
    let registerPage: RegisterPage;
    let loginPage: LoginPage;

    let applicationPage: ApplicationPage;

    let email = 'wince.graics@gmail.com';
    let password = 'Srr858';

    this.Given(/^the user is on the web page$/,
        function () {
            return automizyPage = AutomizyPage.get();
        }
    );

    this.Given(/^the user navigates to the login page$/,
        function () {
            return loginPage = automizyPage.clickLogin();
        }
    );

    this.When(/^s?he wants to see the trial version/,
        function () {
            return registerPage = automizyPage.seeFreeTrialOptions();
        }
    );

    this.When(/^s?he creates an account with a new email$/,
        function () {
            return applicationPage = loginPage.createAccount(email);
        }
    );

    this.When(/^s?he signs up on the free trial$/,
        function () {
            return applicationPage = registerPage.signUp(email);
        }
    );

    this.When(/^s?he registers an account$/,
        function () {
            return applicationPage.registerAccount(
                'Vince',
                'Graics',
                'Automizy',
                password
            );
        }
    );

    this.When(/^s?he applies for a trial with an email$/,
        function () {
            return applicationPage = automizyPage.applyForFreeTrial(email);
        }
    );

    this.Then(/^s?he should see the registration form$/,
        function () {
            expect(applicationPage.registrationModule.getTitle()).to.eventually.equal('Personalize your account!');
        }
    );

    this.Then(/^s?he should have access to the application$/,
        function () {
            expect(applicationPage.isUserProfileDisplayed()).to.eventually.equal(true);
        }
    );
}
