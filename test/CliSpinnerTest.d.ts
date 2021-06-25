declare const cliSpinner: any;
declare const chalk: any;
declare class CliSpinnerTest {
    constructor();
    /**
     * Test the spinner with a basic message and default settings
     */
    messageSpinnerDefault(callback: CallableFunction): void;
    /**
     * Test the spinner with basic message, default settings, and overwrite the message when stopped
     */
    messageSpinnerWithNewMessage(callback: CallableFunction): void;
}
declare const cliSpinnerTest: CliSpinnerTest;
