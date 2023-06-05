import React, { useState } from "react";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Center, Vertical } from "@dwidge/react-lib/Flex";
import BasicTable from "../lib/BasicTable";
import SyntaxText from "../lib/Syntax";
import CodeRun from "../lib/CodeRun";
import LogicGate from "../lib/LogicGate";
import { Row } from "@dwidge/react-lib/utils/csv";

const theme = createTheme();

const sampleCode = `
let a=1,c=5;
b=2+c;
a=b+b;
for(let i=0;i<5;i++){
b+=i;
}
a-=b;
`.trim();

const App: React.FC<{}> = () => {
  const [rows, setRows] = useState<Row[]>([
    { id: "1", colA: "A1", colB: "B1" },
    { id: "2", colA: "A2", colB: "B2" },
  ]);
  const [cc] = useState("grey");
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Foreground>
          <div
            className="aa"
            style={{
              ["--colorr" as string]: cc,
              ["--color-bg" as string]: "yellow",
            }}
          >
            css variables
          </div>
          <LogicGate
            colours={{ off: "red", on: "blue", 0: "green" }}
            table={[
              {
                a: "off",
                bbbbb: 0,
                "or.": 0,
                "xor.": 0,
                "and.": 0,
                "nand.": 1,
              },
              { a: "on", bbbbb: 0, "or.": 1, "xor.": 1, "and.": 0, "nand.": 1 },
              {
                a: "off",
                bbbbb: 1,
                "or.": 1,
                "xor.": 1,
                "and.": 0,
                "nand.": 1,
              },
              { a: "on", bbbbb: 1, "or.": 1, "xor.": 0, "and.": 1, "nand.": 0 },
            ]}
          >
            LogicGate
          </LogicGate>
          <BasicTable
            rows={[
              { id: "1", colA: "A1" },
              { id: "2", colA: "A2" },
            ]}
          />
          <BasicTable rows={rows} onChange={setRows} />
          <SyntaxText>const a=1;</SyntaxText>
          <CodeRun
            reset
            names={["a", "b", "c", "i"]}
            value={rows}
            onChange={setRows}
          >
            {sampleCode}
          </CodeRun>
        </Foreground>
      </Background>
    </ThemeProvider>
  );
};

const Foreground = styled(Vertical)`
  background-color: cyan;
  min-height: 200px;
  min-width: 200px;
  max-width: 500px;
  padding: 1em;
`;

const Background = styled(Center)`
  background-color: navy;
`;

export default App;
