import {browser} from "protractor";

export = function Hooks() {

    /*
        this.Before(function () {
            return console.log('Before hook 1 *****************');
        });

        // Asynchronous Callback
        this.Before(function () {
            return console.log('Before hook 2 *****************');
        });
        */

    this.After(function () {
        browser.driver.manage().deleteAllCookies();
    });
}