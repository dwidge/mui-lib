// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import React from "react";
import styled from "styled-components";
import { Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Row } from "@dwidge/react-lib/utils/csv";

const firstKey = (o: object = {}) => Object.keys(o)[0];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function BasicTable({
  rows = [],
  keyCol = firstKey(rows[0]),
  ...opts
}: {
  rows: Row[];
  keyCol?: string;
}) {
  if (!rows.length) return <></>;
  const cols = Object.keys(rows[0]);
  return (
    <TableContainer component={Paper}>
      <Table {...opts}>
        <TableHead>
          <TableRow>
            {cols.map((col) => (
              <StyledTableCell key={col}>{col}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row[keyCol]}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {cols.map((col) => (
                <TableCell
                  key={col}
                  align={typeof row[col] === "number" ? "right" : "left"}
                >
                  {row[col]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
