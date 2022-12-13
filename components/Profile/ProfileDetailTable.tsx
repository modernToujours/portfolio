import React from "react";

import {
  Table,
  TableBody,
  tableCellClasses,
  TableContainer,
  TableContainerProps,
  TableRow,
} from "@mui/material";

import Cell from "./Cell";

export type ProfileProps = {
  name: string;
  birth: string;
  location: string;
  education: string;
  language: string;
};

const ProfileDetailTable = (
  { profile }: { profile: ProfileProps },
  props: TableContainerProps
) => {
  return (
    <TableContainer {...props}>
      <Table
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
        }}
      >
        <TableBody>
          <TableRow>
            <Cell>이름</Cell>
            <Cell colSpan={2}>{profile.name}</Cell>
          </TableRow>
          <TableRow>
            <Cell>생년월일</Cell>
            <Cell colSpan={2}>{profile.birth}</Cell>
          </TableRow>
          <TableRow>
            <Cell>거주지</Cell>
            <Cell colSpan={2}>{profile.location}</Cell>
          </TableRow>
          <TableRow>
            <Cell>학력</Cell>
            <Cell colSpan={2}>{profile.education}</Cell>
          </TableRow>
          <TableRow>
            <Cell>언어</Cell>
            <Cell colSpan={2}>{profile.language}</Cell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProfileDetailTable;
