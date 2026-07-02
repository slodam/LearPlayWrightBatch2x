console.log("38 — Confusing Comparisons in JS");
// ============================================================
// 38 — Confusing Comparisons in JS:  ==  vs  ===
// ============================================================
//
// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)
//
// Run with:  node 38_Confusing_Comparsion.js
// ============================================================

// ---------- 1. Empty string vs 0 vs "0"  (transitivity broken) ----------
console.log("" == 0);        // true   → "" coerced to Number → 0
console.log("0" == 0);       // true   → "0" coerced to Number → 0
console.log("" == "0");      // false  → both strings, compared as-is

// === fixes it
console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false

// ---------- 2. null and undefined ----------
console.log(null == undefined);   // true   → special rule in ==
console.log(null === undefined);  // false  → different types
console.log(null == 0);           // false  → null only == undefined/null
console.log(null >= 0);           // true   → >= coerces null to 0  (gotcha!)
console.log(null > 0);            // false
console.log(null == 0 || null > 0); // false … but null >= 0 is true 🤯