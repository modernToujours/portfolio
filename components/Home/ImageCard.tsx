import React from "react";

import { Card, CardProps } from "@mui/material";

const ImageCard = (props: CardProps) => {
  return (
    <Card
      sx={{
        borderRadius: "50%",
        width: "300px",
        height: "300px",
        background: "background.paper",
        margin: "10px",
      }}
      {...props}
    />
  );
};

export default ImageCard;
