declare class CliSpinner {
    /**
     * List of all the frames the spinner animation can run through in order [ 0 -> max ]
     * @var { string[] }
     */
    spinnerFrames: string[];
    /**
     * Identifies what frame the spinner is currently on
     * @var { number }
     */
    spinnerCurrentFrameId: number;
    /**
     * Delay between each frame of the spinner in milliseconds
     * @var { number }
     */
    spinnerFrameDelay: number;
    /**
     * Is the spinner frame loop running
     * @var { boolean }
     */
    spinnerFrameLoopStarted: boolean;
    /**
     * Should the spinner render its frames
     * @var { boolean }
     */
    spinnerLoopRendering: boolean;
    /**
     * Spinner message to display
     * @var { string }
     */
    spinnerMessage: string;
    /**
     * Last rendered output from this class
     */
    lastSentOutput: string;
    /**
     * Start the loading animation with some text followed after the spinner
     * @param { string } message Message to print with loading animation
     */
    write(message: string): void;
    /**
     * Stop spinner animation
     */
    stop(icon: string, message?: string | null): void;
    /**
     * Run the spinner frame loop
     */
    runSpinnerLoop(): void;
    /**
     * Fully stop spinner frame loops
     */
    fullStop(): void;
    /**
     * Returns a clear line which is the same size as the last sent output
     * @returns { string }
     */
    getClearLine(): string;
    /**
     * Get the next frame raw
     * @returns { string } Raw frame
     */
    getNextFrame(): string;
}
declare const cliSpinner: CliSpinner;
export default cliSpinner;
