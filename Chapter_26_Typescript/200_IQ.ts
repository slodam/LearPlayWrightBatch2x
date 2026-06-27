let responseCode: number[] = [200, 201, 404, 500, 302, 403];

function getFailedCodes(code: number[]): number[] {
    return code.filter(function (code: number): boolean {
        return code >= 400;
    });
}

console.log("All Codes: ", responseCode);
console.log("Failed Codes: ", getFailedCodes(responseCode));


