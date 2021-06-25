import Chalk from "chalk";

export default class CliSpinner {
    /**
     * List of all the frames the spinner animation can run through in order [ 0 -> max ]
     * @var { string[] }
     */
    public static spinnerFrames: string[] = [
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
    public static spinnerCurrentFrameId: number = 1;

    /**
     * Delay between each frame of the spinner in milliseconds
     * @var { number }
     */
    public static spinnerFrameDelay: number = 50;

    /**
     * Is the spinner frame loop running
     * @var { boolean }
     */
    public static spinnerFrameLoopStarted: boolean = false;

    /**
     * Should the spinner render its frames
     * @var { boolean }
     */
    public static spinnerLoopRendering: boolean = false;

    /**
     * Spinner message to display
     * @var { string }
     */
    public static spinnerMessage: string = "";

    /**
     * Last rendered output from this class
     */
    public static lastSentOutput: string = "";

    /**
     * Start the loading animation with some text followed after the spinner
     * @param { string } message Message to print with loading animation
     */
    public static write(message: string) {
        // Start the frame loop if it hasn't been started yet
        if (!this.spinnerFrameLoopStarted) {
            this.spinnerFrameLoopStarted = true;
            this.runSpinnerLoop();
        }

        // Set spinner message
        this.spinnerMessage = message;

        // Allow spinner to start rendering
        this.spinnerLoopRendering = true;
    }

    /**
     * Stop spinner animation
     */
    public static stop(icon: string, message: string|null = null) {
        // Stop rendering
        this.spinnerLoopRendering = false;
        
        // Clear line
        process.stdout.write("\r" + this.getClearLine());

        // Set closing message
        var closingMessage = "";
        if (message) {
            closingMessage = message;
        } else {
            closingMessage = this.spinnerMessage; 
        }

        // Write closing message
        process.stdout.write("\r" + icon + " " + closingMessage);
        console.log("");
    }

    /**
     * Run the spinner frame loop
     */
    public static runSpinnerLoop() {
        const loop = () => {
            setTimeout(() => {
                // Check if the loop should render anything
                if (this.spinnerLoopRendering) {
                    this.lastSentOutput = "\r" + this.getNextFrame() + " " + this.spinnerMessage;
                    process.stdout.write(this.lastSentOutput);
                }

                // Run the loop's next iteration
                if (this.spinnerFrameLoopStarted) {
                    loop();
                }
            }, this.spinnerFrameDelay);
        }
        
        // Start loop
        loop();
    }

    /**
     * Fully stop spinner frame loops
     */
    public static fullStop() {
        this.spinnerFrameLoopStarted = false;
    }

    /**
     * Returns a clear line which is the same size as the last sent output
     * @returns { string }
     */
    public static getClearLine() {
        // Get character count in last output
        const characters = this.lastSentOutput.length;

        // Build the clear line
        var clearLine = "";
        while (clearLine.length < characters) {
            clearLine += " ";
        }

        // Return the clear line
        return clearLine;
    }

    /**
     * Get the next frame raw
     * @returns { string } Raw frame
     */
    public static getNextFrame() {
        // Increment frames ID by 1 if not at max
        if (this.spinnerCurrentFrameId == this.spinnerFrames.length) {
            this.spinnerCurrentFrameId = 1;
        } else {
            this.spinnerCurrentFrameId++;
        } 

        // Return the next frame as a string
        return this.spinnerFrames[this.spinnerCurrentFrameId - 1];
    }
}
