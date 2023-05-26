import React from "react";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Center, Vertical } from "@dwidge/react-lib/Flex";
import BasicTable from "../lib/BasicTable";
import SyntaxText from "../lib/Syntax";

const theme = createTheme();

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Foreground>
          <BasicTable
            rows={[
              { id: "1", colA: "A1" },
              { id: "2", colA: "A2" },
            ]}
          />
          <SyntaxText src="const a=1;" />
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
