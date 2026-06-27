// Configuration
const MAX_RETRIES = 5;
let attempts = 0;
let isSuccess = false;

console.log("Starting API Request Process...");

// Retry Simulation Loop
do {
    attempts++;
    console.log(`\nAttempt #${attempts}: Making API call...`);

    // Simulate random success/failure (40% chance of success)
    const randomValue = Math.random();

    if (randomValue > 0.6) {
        isSuccess = true;
        console.log(`>> Success! Response received on attempt #${attempts}.`);
    } else {
        console.log(`>> Failed! API call timed out or returned an error.`);
    }

    // Continue looping if it failed AND we haven't hit the max limit
} while (!isSuccess && attempts < MAX_RETRIES);

// Print Final Result
console.log("\n==============================");
if (isSuccess) {
    console.log(`FINAL RESULT: Process succeeded after ${attempts} attempt(s).`);
} else {
    console.log(`FINAL RESULT: Process failed after reaching the maximum of ${MAX_RETRIES} retries.`);
}
console.log("==============================");
