// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import sunburst from "react-syntax-highlighter/dist/esm/styles/hljs/sunburst";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function SyntaxText({ src = "", ...opts }: { src: string }) {
  return (
    <SyntaxHighlighter style={sunburst} {...opts}>
      {src}
    </SyntaxHighlighter>
  );
}
