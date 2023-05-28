import { runWorker } from "./makeWorker";

export function annotateCode(
  src: string,
  expressions: string[],
  maxSteps = 100
) {
  const record = (i: number, expressions: string[]) =>
    `_history.push([${i},{${expressions.join(
      ","
    )}}]);if(_history.length>${maxSteps})${end}`;
  const init = `const _history=[];`;
  const end = `return _history;`;
  const lines = src.split("\n").flatMap((l, i) => [
    l,
    record(
      i,
      expressions.filter((e) => l.includes(e))
    ),
  ]);
  return [init, ...lines, end].join("\n");
}

export async function recordCode(
  src: string,
  expressions: string[]
): Promise<string[][]> {
  const body = annotateCode(src, expressions);
  const f = new Function(body);
  const history = (await runWorker(f)()) as [
    line: number,
    values: { [i: string]: string }
  ][];
  return history.map(([line, values]) => [
    "" + (line + 1),
    ...expressions.map((k) => values[k]),
  ]);
}
