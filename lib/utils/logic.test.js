import { assert } from "./assert.js";
import { evaluateLogic } from "./logic.ts";

// Test case 1
export function testLogicFormula1() {
  const formula = "or(and(true not(false)) xor(true false))";
  const result = evaluateLogic(formula);
  assert.strictEqual(result, true);
}

// Test case 2
export function testLogicFormula2() {
  const formula = "or(and(true false) not(xor(true false)))";
  const result = evaluateLogic(formula);
  assert.strictEqual(result, false);
}

// Test case 3
export function testLogicFormula3() {
  const formula = "and(not(true) xor(true true))";
  const result = evaluateLogic(formula);
  assert.strictEqual(result, false);
}

// Test case 4
export function testLogicFormula4() {
  const formula = "and(or(true false) xor(true true))";
  const result = evaluateLogic(formula);
  assert.strictEqual(result, false);
}

// Test case 5
export function testLogicFormula5() {
  const formula = "and(not(true) not(false))";
  const result = evaluateLogic(formula);
  assert.strictEqual(result, false);
}

// Test case 6
export function testLogicFormula6() {
  const formula = "or(xor(true false) xor(false false))";
  const result = evaluateLogic(formula);
  assert.strictEqual(result, true);
}

// Test case 7
export function testLogicFormula7() {
  const formula = "not(and(or(true false) xor(false false)))";
  const result = evaluateLogic(formula);
  assert.strictEqual(result, true);
}

// Test case 8
export function testLogicFormula8() {
  const formula = "xor(or(true false) or(false false))";
  const result = evaluateLogic(formula);
  assert.strictEqual(result, true);
}

export function or() {
  assert.strictEqual(evaluateLogic("or(false)"), false);
  assert.strictEqual(evaluateLogic("or(true)"), true);
  assert.strictEqual(evaluateLogic("or(false false)"), false);
  assert.strictEqual(evaluateLogic("or(false true)"), true);
  assert.strictEqual(evaluateLogic("or(true false)"), true);
  assert.strictEqual(evaluateLogic("or(true true)"), true);
  assert.strictEqual(evaluateLogic("or(false false false)"), false);
  assert.strictEqual(evaluateLogic("or(false false true)"), true);
  assert.strictEqual(evaluateLogic("or(false true true)"), true);
  assert.strictEqual(evaluateLogic("or(true true true)"), true);
}

export function and() {
  assert.strictEqual(evaluateLogic("and(false)"), false);
  assert.strictEqual(evaluateLogic("and(true)"), true);
  assert.strictEqual(evaluateLogic("and(false false)"), false);
  assert.strictEqual(evaluateLogic("and(false true)"), false);
  assert.strictEqual(evaluateLogic("and(true false)"), false);
  assert.strictEqual(evaluateLogic("and(true true)"), true);
  assert.strictEqual(evaluateLogic("and(false false false)"), false);
  assert.strictEqual(evaluateLogic("and(false false true)"), false);
  assert.strictEqual(evaluateLogic("and(false true true)"), false);
  assert.strictEqual(evaluateLogic("and(true true true)"), true);
}

export function xor() {
  assert.strictEqual(evaluateLogic("xor(false)"), false);
  assert.strictEqual(evaluateLogic("xor(true)"), true);
  assert.strictEqual(evaluateLogic("xor(false false)"), false);
  assert.strictEqual(evaluateLogic("xor(false true)"), true);
  assert.strictEqual(evaluateLogic("xor(true false)"), true);
  assert.strictEqual(evaluateLogic("xor(true true)"), false);
  assert.strictEqual(evaluateLogic("xor(false false false)"), false);
  assert.strictEqual(evaluateLogic("xor(false false true)"), true);
  assert.strictEqual(evaluateLogic("xor(false true true)"), false);
  assert.strictEqual(evaluateLogic("xor(true true true)"), true);
}

export function nor() {
  assert.strictEqual(evaluateLogic("nor(false)"), true);
  assert.strictEqual(evaluateLogic("nor(true)"), false);
  assert.strictEqual(evaluateLogic("nor(false false)"), true);
  assert.strictEqual(evaluateLogic("nor(false true)"), false);
  assert.strictEqual(evaluateLogic("nor(true false)"), false);
  assert.strictEqual(evaluateLogic("nor(true true)"), false);
  assert.strictEqual(evaluateLogic("nor(false false false)"), true);
  assert.strictEqual(evaluateLogic("nor(false false true)"), false);
  assert.strictEqual(evaluateLogic("nor(false true true)"), false);
  assert.strictEqual(evaluateLogic("nor(true true true)"), false);
}

export function not() {
  assert.strictEqual(evaluateLogic("not(false)"), true);
  assert.strictEqual(evaluateLogic("not(true)"), false);
  assert.strictEqual(evaluateLogic("not(false false)"), true);
  assert.strictEqual(evaluateLogic("not(false true)"), false);
  assert.strictEqual(evaluateLogic("not(true false)"), false);
  assert.strictEqual(evaluateLogic("not(true true)"), false);
  assert.strictEqual(evaluateLogic("not(false false false)"), true);
  assert.strictEqual(evaluateLogic("not(false false true)"), false);
  assert.strictEqual(evaluateLogic("not(false true true)"), false);
  assert.strictEqual(evaluateLogic("not(true true true)"), false);
}
