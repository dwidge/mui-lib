import React, { useEffect, useMemo, useState } from "react";
import "./LogicGate.css";

export type State = string | number;
export type TruthTable = { [i: string]: State }[];

export default function LogicGate({
  children,
  table = [],
  colours = { 0: "black", 1: "white" },
}: React.PropsWithChildren<{
  table?: TruthTable;
  colours?: { [i: string]: string };
}>) {
  const { input, output, lookup, portStates } = useMemo(
    () => calc(table),
    [table]
  );
  const [inputs, setInputs] = useState<State[]>([]);
  const [outputs, setOutputs] = useState<State[]>([]);

  useEffect(() => {
    setInputs(input.map((_k: string, i: number) => portStates[i][0]));
  }, [input]);
  useEffect(() => {
    const state = lookup(inputs);
    setOutputs(output.map((col) => state?.[col]));
  }, [inputs]);

  const toggleArrowColor = (inputIndex: number) => {
    const newInputs = [...inputs];
    const states = portStates[inputIndex];
    const i = states.indexOf(newInputs[inputIndex]);
    newInputs[inputIndex] = states[i + 1] ?? states[0];
    setInputs(newInputs);
  };

  return (
    <div className="box-with-arrows">
      <div className="arrows-container">
        <div className="arrows">
          {input.map((item, index) => (
            <div
              style={{ ["--state-color" as string]: colours[inputs[index]] }}
              key={`in-${index}`}
              className={"arrow arrow-in"}
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
              style={{ ["--state-color" as string]: colours[outputs[index]] }}
              key={`out-${index}`}
              className={"arrow arrow-out"}
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
  const inputCols = cols.filter((k) => !k.endsWith("."));
  const portStates = inputCols.map((k) => unique(table.map((r) => r[k])));
  const input = inputCols;
  const output = cols.filter((k) => k.endsWith("."));
  const makeKey = (inputs: State[]) => inputs.join("");
  const lookupTable = Object.fromEntries(
    table.map((r) => [makeKey(input.map((k) => r[k])), r])
  );
  const lookup = (inputs: State[]) => lookupTable[makeKey(inputs)];
  return { input, output, lookup, portStates };
};

const unique = (items: State[]) => [...new Set(items)];
