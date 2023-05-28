// Split the expression by space while preserving nested spaces
export function splitNested(expression: string, del = " "): string[] {
  const result = [];
  let currentToken = "";
  let parenthesesCount = 0;

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (char === "(") {
      parenthesesCount++;
    } else if (char === ")") {
      parenthesesCount--;
    }

    if (char === del && parenthesesCount === 0) {
      result.push(currentToken);
      currentToken = "";
    } else {
      currentToken += char;
    }
  }

  if (currentToken !== "") {
    result.push(currentToken);
  }

  return result;
}
