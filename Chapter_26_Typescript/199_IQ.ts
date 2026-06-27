function buildEndpoint(base: string, path: string): string {
    return base + path;

}

function isCodeSuccess(code: number): boolean {
    return code >= 200 && code <= 300;
}

function logTestStep(step: string): void {
    console.log("[STEP] " + step);
}

console.log(buildEndpoint("https://api.com", "/users"));
console.log("200 is success:", isCodeSuccess(200));
console.log("404 is success:", isCodeSuccess(404));
logTestStep("Navigate to login page");