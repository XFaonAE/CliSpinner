const { CliSpinner } = require("../src/CliSpinner");

class CliSpinnerTest {
    constructor() {
        this.noMessageSpinnerDefault();
    }

    /**
     * Test the spinner with a basic message and default settings
     */
    public noMessageSpinnerDefault() {
        CliSpinner.write("Default settings and basic message test");
        setTimeout(() => {
            CliSpinner.stop("✓");
            CliSpinner.write("Default settings and basic message test 2");
            setTimeout(() => {
                CliSpinner.stop("✓");
            }, 3000);
        }, 2000)
    }
}

const cliSpinnerTest = new CliSpinnerTest();