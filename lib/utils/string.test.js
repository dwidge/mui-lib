import { assert } from "./assert.js";
import { splitNested } from "./string.js";

// Test case 1
export function test1() {
  const formula = "and(true not(false)) xor(true false)";
  const result = splitNested(formula);
  assert.strictEqual(result, ["and(true not(false))", "xor(true false)"]);
}

// Test case 2
export function test2() {
  const formula = "or(true and(false true))";
  const result = splitNested(formula);
  assert.strictEqual(result, ["or(true and(false true))"]);
}

// Test case 3
export function test3() {
  const formula = "(not true) and (false or (true and false))";
  const result = splitNested(formula);
  assert.strictEqual(result, [
    "(not true)",
    "and",
    "(false or (true and false))",
  ]);
}

// Test case 4
export function test4() {
  const formula = "or(true,false,true)";
  const result = splitNested(formula, ",");
  assert.strictEqual(result, ["or(true,false,true)"]);
}

// Test case 5
export function test5() {
  const formula = "or(true,false,true),and(true,false,true)";
  const result = splitNested(formula, ",");
  assert.strictEqual(result, ["or(true,false,true)", "and(true,false,true)"]);
}

// Test case 6
export function test6() {
  const formula = "or(and(true, false)), xor(true, false)";
  const result = splitNested(formula);
  assert.strictEqual(result, ["or(and(true, false)),", "xor(true, false)"]);
}
