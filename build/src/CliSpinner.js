"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliSpinner = void 0;
var Chalk = require("chalk");
var CliSpinner = /** @class */ (function () {
    function CliSpinner() {
    }
    /**
     * Start the loading animation with some text followed after the spinner
     * @param { string } message Message to print with loading animation
     */
    CliSpinner.write = function (message) {
        // Start the frame loop if it hasn't been started yet
        if (!this.spinnerFrameLoopStarted) {
            this.spinnerFrameLoopStarted = true;
            this.runSpinnerLoop();
        }
        // Set spinner message
        this.spinnerMessage = message;
        // Allow spinner to start rendering
        this.spinnerLoopRendering = true;
    };
    /**
     * Stop spinner animation
     */
    CliSpinner.stop = function (icon, message) {
        if (message === void 0) { message = null; }
        // Stop rendering
        this.spinnerLoopRendering = false;
        // Clear line
        process.stdout.write("\r" + this.getClearLine());
        // Set closing message
        var closingMessage = "";
        if (message) {
            closingMessage = message;
        }
        else {
            closingMessage = this.spinnerMessage;
        }
        // Write closing message
        process.stdout.write("\r" + icon + " " + closingMessage);
        console.log("");
    };
    /**
     * Run the spinner frame loop
     */
    CliSpinner.runSpinnerLoop = function () {
        var _this = this;
        var loop = function () {
            setTimeout(function () {
                // Check if the loop should render anything
                if (_this.spinnerLoopRendering) {
                    _this.lastSentOutput = "\r" + _this.getNextFrame() + " " + _this.spinnerMessage;
                    process.stdout.write(_this.lastSentOutput);
                }
                // Run the loop's next iteration
                if (_this.spinnerFrameLoopStarted) {
                    loop();
                }
            }, _this.spinnerFrameDelay);
        };
        // Start loop
        loop();
    };
    /**
     * Fully stop spinner frame loops
     */
    CliSpinner.fullStop = function () {
        this.spinnerFrameLoopStarted = false;
    };
    /**
     *
     * @returns
     */
    CliSpinner.getClearLine = function () {
        // Get character count in last output
        var characters = this.lastSentOutput.length;
        // Build the clear line
        var clearLine = "";
        while (clearLine.length < characters) {
            clearLine += " ";
        }
        // Return the clear line
        return clearLine;
    };
    /**
     * Get the next frame raw
     * @returns { string } Raw frame
     */
    CliSpinner.getNextFrame = function () {
        // Increment frames ID by 1 if not at max
        if (this.spinnerCurrentFrameId == this.spinnerFrames.length) {
            this.spinnerCurrentFrameId = 1;
        }
        else {
            this.spinnerCurrentFrameId++;
        }
        // Return the next frame as a string
        return this.spinnerFrames[this.spinnerCurrentFrameId - 1];
    };
    /**
     * List of all the frames the spinner animation can run through in order [ 0 -> max ]
     * @var { string[] }
     */
    CliSpinner.spinnerFrames = [
        Chalk.hex("#50ffab")("⠋"),
        Chalk.hex("#50ffab")("⠙"),
        Chalk.hex("#50ffab")("⠹"),
        Chalk.hex("#50ffab")("⠸"),
        Chalk.hex("#50ffab")("⠼"),
        Chalk.hex("#50ffab")("⠴"),
        Chalk.hex("#50ffab")("⠦"),
        Chalk.hex("#50ffab")("⠧"),
        Chalk.hex("#50ffab")("⠇"),
        Chalk.hex("#50ffab")("⠏")
    ];
    /**
     * Identifies what frame the spinner is currently on
     * @var { number }
     */
    CliSpinner.spinnerCurrentFrameId = 1;
    /**
     * Delay between each frame of the spinner in milliseconds
     * @var { number }
     */
    CliSpinner.spinnerFrameDelay = 50;
    /**
     * Should the spinner render its frames
     * @var { boolean }
     */
    CliSpinner.spinnerLoopRendering = false;
    /**
     * Spinner message to display
     * @var { string }
     */
    CliSpinner.spinnerMessage = "";
    /**
     * Last rendered output from this class
     */
    CliSpinner.lastSentOutput = "";
    return CliSpinner;
}());
exports.CliSpinner = CliSpinner;
