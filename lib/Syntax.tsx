// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import sunburst from "react-syntax-highlighter/dist/esm/styles/hljs/sunburst";
import styled from "styled-components";

SyntaxHighlighter.registerLanguage("javascript", js);

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  flex: auto;
`;

export default function SyntaxText({ src = "", ...opts }: { src: string }) {
  return (
    <StyledSyntaxHighlighter style={sunburst} {...opts}>
      {src}
    </StyledSyntaxHighlighter>
  );
}
