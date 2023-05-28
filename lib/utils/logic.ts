import { splitNested } from "./string";

// Helper function to evaluateLogic a logic formula
export function evaluateLogic(formula: string): boolean {
  if (!formula) return false;
  const start = formula.indexOf("(");
  if (start < 0) return formula === "true";
  const operator = formula.slice(0, start);
  const operands = splitNested(formula.slice(start + 1, -1));
  const trueOperands = operands.filter(evaluateLogic).length;
  const allOperands = operands.length;

  const operators: { [op: string]: (yes: number, all: number) => boolean } = {
    or: (yes, _all) => yes > 0,
    and: (yes, all) => yes === all,
    nor: (yes, _all) => yes === 0,
    not: (yes, _all) => yes === 0,
    xor: (yes, _all) => yes % 2 !== 0,
    true: (_yes, _all) => true,
    false: (_yes, _all) => false,
  };
  return (operators[operator] ?? operators.false)(trueOperands, allOperands);
}
