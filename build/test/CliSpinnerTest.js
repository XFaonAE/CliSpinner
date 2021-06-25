"use strict";
var CliSpinner = require("../src/CliSpinner");
var Chalk = require("Chalk");
var CliSpinnerTest = /** @class */ (function () {
    function CliSpinnerTest() {
        var _this = this;
        this.messageSpinnerDefault(function () {
            _this.messageSpinnerWithNewMessage(function () {
                CliSpinner.write("Full stopping in " + Chalk.hex("#50ffab")(5) + " seconds...");
                setTimeout(function () {
                    CliSpinner.write("Full stopping in " + Chalk.hex("#50ffab")(4) + " seconds...");
                    setTimeout(function () {
                        CliSpinner.write("Full stopping in " + Chalk.hex("#50ffab")(3) + " seconds...");
                        setTimeout(function () {
                            CliSpinner.write("Full stopping in " + Chalk.hex("#50ffab")(2) + " seconds...");
                            setTimeout(function () {
                                CliSpinner.write("Full stopping in " + Chalk.hex("#50ffab")(1) + " seconds...");
                                setTimeout(function () {
                                    CliSpinner.stop(Chalk.hex("#50ffab")("✓"), Chalk.hex("#50ffab")("Stopped"));
                                    CliSpinner.fullStop();
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
        CliSpinner.write("Default settings and basic message test");
        setTimeout(function () {
            CliSpinner.stop(Chalk.hex("#50ffab")("✓"));
            callback();
        }, 2000);
    };
    /**
     * Test the spinner with basic message, default settings, and overwrite the message when stopped
     */
    CliSpinnerTest.prototype.messageSpinnerWithNewMessage = function (callback) {
        CliSpinner.write("Default setting, basic message, and then overwrite message when stopped");
        setTimeout(function () {
            CliSpinner.stop(Chalk.hex("#50ffab")("✓"), "New message");
            callback();
        }, 2000);
    };
    return CliSpinnerTest;
}());
var cliSpinnerTest = new CliSpinnerTest();
//# sourceMappingURL=CliSpinnerTest.js.map