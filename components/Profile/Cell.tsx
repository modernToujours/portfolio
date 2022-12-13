import React from "react";

import { TableCell, TableCellProps } from "@mui/material";

const Cell = (props: TableCellProps) => {
  return (
    <TableCell
      sx={{
        fontFamily: `"AppleSDGothicNeo", "Noto Sans KR", sans-serif`,
        fontWeight: "bold",
        fontSize: { xs: "0.7rem", sm: "1.1rem" },
        wordBreak: "keep-all",
        padding: { xs: ".7rem .4rem", sm: "1rem" },
      }}
      {...props}
    />
  );
};

export default Cell;
