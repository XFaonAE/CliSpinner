"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
module.exports = (_a = /** @class */ (function () {
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
         * Set spinner to done state
         * @param { string } newMessage Change the spinner message
         */
        CliSpinner.done = function (newMessage) {
            if (newMessage === void 0) { newMessage = null; }
            // Stop
            this.stop(this.spinnerDoneIcon, newMessage);
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
         * Returns a clear line which is the same size as the last sent output
         * @returns { string }
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
        return CliSpinner;
    }()),
    /**
     * List of all the frames the spinner animation can run through in order [ 0 -> max ]
     * @var { string[] }
     */
    _a.spinnerFrames = [
        chalk_1.default.hex("#50ffab")("???"),
        chalk_1.default.hex("#50ffab")("???"),
        chalk_1.default.hex("#50ffab")("???"),
        chalk_1.default.hex("#50ffab")("???"),
        chalk_1.default.hex("#50ffab")("???"),
        chalk_1.default.hex("#50ffab")("???"),
        chalk_1.default.hex("#50ffab")("???"),
        chalk_1.default.hex("#50ffab")("???"),
        chalk_1.default.hex("#50ffab")("???"),
        chalk_1.default.hex("#50ffab")("???")
    ],
    /**
     * Spinner done icon
     * @var { string }
     */
    _a.spinnerDoneIcon = chalk_1.default.hex("#50ffab")("???"),
    /**
     * Identifies what frame the spinner is currently on
     * @var { number }
     */
    _a.spinnerCurrentFrameId = 1,
    /**
     * Delay between each frame of the spinner in milliseconds
     * @var { number }
     */
    _a.spinnerFrameDelay = 50,
    /**
     * Is the spinner frame loop running
     * @var { boolean }
     */
    _a.spinnerFrameLoopStarted = false,
    /**
     * Should the spinner render its frames
     * @var { boolean }
     */
    _a.spinnerLoopRendering = false,
    /**
     * Spinner message to display
     * @var { string }
     */
    _a.spinnerMessage = "",
    /**
     * Last rendered output from this class
     */
    _a.lastSentOutput = "",
    _a);
//# sourceMappingURL=CliSpinner.js.map