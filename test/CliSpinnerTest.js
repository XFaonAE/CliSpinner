"use strict";
var cliSpinner = require("../src/cliSpinner");
var chalk = require("chalk");
var CliSpinnerTest = /** @class */ (function () {
    function CliSpinnerTest() {
        var _this = this;
        this.messageSpinnerDefault(function () {
            _this.messageSpinnerWithNewMessage(function () {
                cliSpinner.write("Full stopping in " + chalk.hex("#50ffab")(5) + " seconds...");
                setTimeout(function () {
                    cliSpinner.write("Full stopping in " + chalk.hex("#50ffab")(4) + " seconds...");
                    setTimeout(function () {
                        cliSpinner.write("Full stopping in " + chalk.hex("#50ffab")(3) + " seconds...");
                        setTimeout(function () {
                            cliSpinner.write("Full stopping in " + chalk.hex("#50ffab")(2) + " seconds...");
                            setTimeout(function () {
                                cliSpinner.write("Full stopping in " + chalk.hex("#50ffab")(1) + " seconds...");
                                setTimeout(function () {
                                    cliSpinner.done();
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            });
        });
    }
    /**
     * Test the spinner with a basic message and default settings
     */
    CliSpinnerTest.prototype.messageSpinnerDefault = function (callback) {
        cliSpinner.write("Default settings and basic message test");
        setTimeout(function () {
            cliSpinner.done();
            callback();
        }, 2000);
    };
    /**
     * Test the spinner with basic message, default settings, and overwrite the message when stopped
     */
    CliSpinnerTest.prototype.messageSpinnerWithNewMessage = function (callback) {
        cliSpinner.write("Default setting, basic message, and then overwrite message when stopped");
        setTimeout(function () {
            cliSpinner.done();
            callback();
        }, 2000);
    };
    return CliSpinnerTest;
}());
var cliSpinnerTest = new CliSpinnerTest();
//# sourceMappingURL=CliSpinnerTest.js.map