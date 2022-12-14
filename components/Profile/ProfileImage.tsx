import React from "react";

import Image from "next/image";

import { Card, CardProps } from "@mui/material";

const ProfileImage = (props: CardProps) => {
  return (
    <Card
      sx={{
        width: { xs: "180px", sm: "300px" },
        height: { xs: "255px", sm: "450px" },
        borderRadius: "5px",
      }}
      {...props}
    >
      <Image
        src="/s3/portfolio/choi.png"
        alt="profile-img"
        width={300}
        height={450}
        priority
        sizes="(max-width: 768px) 180px,
      (max-width: 1200px) 360px,
      360px"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Card>
  );
};

export default ProfileImage;
