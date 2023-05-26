import React from "react";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Fill, Center } from "@dwidge/react-lib/Flex";
import BasicTable from "../lib/BasicTable";

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
        </Foreground>
      </Background>
    </ThemeProvider>
  );
};

const Foreground = styled(Fill)`
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
