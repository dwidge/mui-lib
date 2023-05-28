import React, { useEffect, useMemo, useState } from "react";
import "./LogicGate.css";

export type TruthTable = { [i: string]: 0 | 1 }[];

export default function LogicGate({
  children,
  table = [],
}: React.PropsWithChildren<{
  table?: TruthTable;
}>) {
  const { input, output, lookup } = useMemo(() => calc(table), [table]);
  const [inputs, setInputs] = useState<number[]>([]);
  const [outputs, setOutputs] = useState<number[]>([]);

  useEffect(() => {
    setInputs(input.map(() => 0));
  }, [input]);
  useEffect(() => {
    const state = lookup(inputs);
    setOutputs(output.map((col) => state?.[col] ?? 0));
  }, [inputs]);

  const toggleArrowColor = (index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = newInputs[index] === 0 ? 1 : 0;
    setInputs(newInputs);
  };

  return (
    <div className="box-with-arrows">
      <div className="arrows-container">
        <div className="arrows">
          {input.map((item, index) => (
            <div
              key={`in-${index}`}
              className={
                "arrow arrow-in " + (inputs[index] ? "white" : "black")
              }
              onClick={() => toggleArrowColor(index)}
            >
              <span className="arrow-label">
                <div>{item}</div>
                <div>{inputs[index]}</div>
              </span>
              <div className="arrow-line"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="box">{children}</div>
      <div className="arrows-container">
        <div className="arrows">
          {output.map((item, index) => (
            <div
              key={`out-${index}`}
              className={
                "arrow arrow-out " + (outputs[index] ? "white" : "black")
              }
            >
              <div className="arrow-line"></div>
              <span className="arrow-label">
                <div>{outputs[index]}</div>
                <div>{item.slice(0, -1)}</div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const calc = (table: TruthTable) => {
  const cols = Object.keys(table[0] ?? {});
  const input = cols.filter((k) => !k.endsWith("."));
  const output = cols.filter((k) => k.endsWith("."));
  const makeKey = (inputs: number[]) => inputs.join("");
  const lookupTable = Object.fromEntries(
    table.map((r) => [makeKey(input.map((k) => +r[k])), r])
  );
  const lookup = (inputs: number[]) => lookupTable[makeKey(inputs)];
  return { input, output, lookup };
};
