const cliSpinner = require("../src/cliSpinner");
const chalk = require("chalk");

class CliSpinnerTest {
    constructor() {
        this.messageSpinnerDefault(() => {
            this.messageSpinnerWithNewMessage(() => {
                cliSpinner.write("Full stopping in " + chalk.hex("#50ffab")(5) + " seconds...");
                setTimeout(() => {
                    cliSpinner.write("Full stopping in " + chalk.hex("#50ffab")(4) + " seconds...");
                    setTimeout(() => {
                        cliSpinner.write("Full stopping in " + chalk.hex("#50ffab")(3) + " seconds...");
                        setTimeout(() => {
                            cliSpinner.write("Full stopping in " + chalk.hex("#50ffab")(2) + " seconds...");
                            setTimeout(() => {
                                cliSpinner.write("Full stopping in " + chalk.hex("#50ffab")(1) + " seconds...");
                                setTimeout(() => {
                                    cliSpinner.done();
                                }, 1000);
                            }, 1000)
                        }, 1000);
                    }, 1000);
                }, 1000);
            });
        });
    }

    /**
     * Test the spinner with a basic message and default settings
     */
    public messageSpinnerDefault(callback: CallableFunction) {
        cliSpinner.write("Default settings and basic message test");
        setTimeout(() => {
            cliSpinner.done();
            callback();
        }, 2000);
    }

    /**
     * Test the spinner with basic message, default settings, and overwrite the message when stopped
     */
    public messageSpinnerWithNewMessage(callback: CallableFunction) {
        cliSpinner.write("Default setting, basic message, and then overwrite message when stopped");
        setTimeout(() => {
            cliSpinner.done();
            callback();
        }, 2000);
    }
}

const cliSpinnerTest = new CliSpinnerTest();