class Stopwatch {
    constructor() {
        this.startTime = null;
        this.running = false;
        this.elapsedTime = 0;
    }

    start() {
        if (!this.running) {
            this.startTime = new Date();
            this.running = true;
        }
    }

    stop() {
        if (this.running) {
            this.elapsedTime += new Date() - this.startTime;
            this.running = false;
        }
    }

    reset() {
        this.elapsedTime = 0;
        this.startTime = null;
        this.running = false;
    }

    getTime() {
        if (this.running) {
            return this.elapsedTime + (new Date() - this.startTime);
        } else {
            return this.elapsedTime;
        }
    }
}

// Create a new instance of Stopwatch
const stopwatch = new Stopwatch();

// Start the stopwatch
stopwatch.start();

// Simulate some time passing (e.g., 2 seconds)
setTimeout(() => {
    // Stop the stopwatch
    stopwatch.stop();

    // Get the elapsed time
    console.log("Elapsed time:", stopwatch.getTime(), "milliseconds");

    // Reset the stopwatch
    stopwatch.reset();
    console.log("Reset stopwatch:", stopwatch.getTime(), "milliseconds");
}, 2000);
