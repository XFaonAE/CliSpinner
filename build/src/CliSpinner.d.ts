export declare namespace axeri {
    class CliSpinner {
        /**
         * List of all the frames the spinner animation can run through in order [ 0 -> max ]
         * @var { string[] }
         */
        static spinnerFrames: string[];
        /**
         * Identifies what frame the spinner is currently on
         * @var { number }
         */
        static spinnerCurrentFrameId: number;
        /**
         * Delay between each frame of the spinner in milliseconds
         * @var { number }
         */
        static spinnerFrameDelay: number;
        /**
         * Is the spinner frame loop running
         * @var { boolean }
         */
        static spinnerFrameLoopStarted: boolean;
        /**
         * Should the spinner render its frames
         * @var { boolean }
         */
        static spinnerLoopRendering: boolean;
        /**
         * Spinner message to display
         * @var { string }
         */
        static spinnerMessage: string;
        /**
         * Last rendered output from this class
         */
        static lastSentOutput: string;
        /**
         * Start the loading animation with some text followed after the spinner
         * @param { string } message Message to print with loading animation
         */
        static write(message: string): void;
        /**
         * Stop spinner animation
         */
        static stop(icon: string, message?: string | null): void;
        /**
         * Run the spinner frame loop
         */
        static runSpinnerLoop(): void;
        /**
         * Fully stop spinner frame loops
         */
        static fullStop(): void;
        /**
         * Returns a clear line which is the same size as the last sent output
         * @returns { string }
         */
        static getClearLine(): string;
        /**
         * Get the next frame raw
         * @returns { string } Raw frame
         */
        static getNextFrame(): string;
    }
}
