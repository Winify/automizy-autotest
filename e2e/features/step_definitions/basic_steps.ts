import {AutomizyPage} from "../../page_objects/pages/base/automizy.page";
import {LoginPage} from "../../page_objects/pages/base/login.page";
import {expect} from "../support/expect";
import {browser} from "protractor";

export = function basicSteps() {

    let email = 'wince.graics@gmail.com';
    let password = 'Srr858';

    this.Given(/^the user is on the web page$/,
        function () {
            return this.automizyPage = AutomizyPage.get();
        }
    );

    this.Given(/^the user navigates to the login page$/,
        function () {
            return this.loginPage = this.automizyPage.clickLogin();
        }
    );

    this.Given(/^the user is on the login page$/,
        function () {
            return this.loginPage = LoginPage.get();
        }
    );

    this.Given(/^the user is logged in$/,
        function () {
            this.loginPage = LoginPage.get();
            return this.applicationPage = this.loginPage.login(email, password);
        }
    );

    this.When(/^s?he logs in$/,
        function () {
            return this.applicationPage = this.loginPage.login(email, password);
        }
    );

    this.When(/^s?he logs out/,
        function () {
            return this.loginPage = this.applicationPage.logout();
        }
    );

    this.Then(/^s?he should have access to the application$/,
        function () {
            expect(this.applicationPage.isUserProfileDisplayed()).to.eventually.equal(true);
        }
    );

    this.Then(/^s?he should see the login page$/,
        function () {
            expect(this.loginPage.isLoginFormDisplayed()).to.eventually.equal(true);
        }
    );

}