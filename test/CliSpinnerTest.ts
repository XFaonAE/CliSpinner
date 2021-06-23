const CliSpinner = require("../src/CliSpinner");
const Chalk = require("Chalk");

class CliSpinnerTest {
    constructor() {
        this.messageSpinnerDefault(() => {
            this.messageSpinnerWithNewMessage(() => {
                CliSpinner.write("Full stopping in " + Chalk.hex("#50ffab")(5) + " seconds...");
                setTimeout(() => {
                    CliSpinner.write("Full stopping in " + Chalk.hex("#50ffab")(4) + " seconds...");
                    setTimeout(() => {
                        CliSpinner.write("Full stopping in " + Chalk.hex("#50ffab")(3) + " seconds...");
                        setTimeout(() => {
                            CliSpinner.write("Full stopping in " + Chalk.hex("#50ffab")(2) + " seconds...");
                            setTimeout(() => {
                                CliSpinner.write("Full stopping in " + Chalk.hex("#50ffab")(1) + " seconds...");
                                setTimeout(() => {
                                    CliSpinner.stop(Chalk.hex("#50ffab")("✓"), Chalk.hex("#50ffab")("Stopped"));
                                    CliSpinner.fullStop();
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
        CliSpinner.write("Default settings and basic message test");
        setTimeout(() => {
            CliSpinner.stop(Chalk.hex("#50ffab")("✓"));
            callback();
        }, 2000);
    }

    /**
     * Test the spinner with basic message, default settings, and overwrite the message when stopped
     */
    public messageSpinnerWithNewMessage(callback: CallableFunction) {
        CliSpinner.write("Default setting, basic message, and then overwrite message when stopped");
        setTimeout(() => {
            CliSpinner.stop(Chalk.hex("#50ffab")("✓"), "New message");
            callback();
        }, 2000);
    }
}

const cliSpinnerTest = new CliSpinnerTest();