import React, { useState, useEffect } from "react";
import Syntax from "./Syntax";
import BasicTable from "./BasicTable";
import { Row } from "@dwidge/react-lib/utils/csv";
import { Button } from "@mui/material";
import { recordCode } from "./utils/recordCode";

export default function CodeRun({
  children,
  names,
  value,
  onChange,
  reset = false,
}: {
  children: string;
  names: string[];
  value?: Row[];
  onChange?: (rows: Row[]) => void;
  reset?: boolean;
}) {
  const [history, setHistory] = useState<string[][]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    recordCode(children, names)
      .then(setHistory)
      .catch((e: Error) => setError(e.message));
  }, [children, names]);
  const rows = history.map((r, id) => ({
    id: "" + id,
    ...Object.fromEntries(["line", ...names].map((k, i) => [k, r[i]])),
  }));

  return (
    <>
      <Syntax showLineNumbers>{children}</Syntax>
      <BasicTable rows={value ?? rows} onChange={onChange} />
      {error}
      {reset && onChange ? (
        <Button onClick={() => onChange(rows)}>Reset</Button>
      ) : null}
    </>
  );
}
