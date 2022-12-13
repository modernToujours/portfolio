import React from "react";

import Image from "next/image";

import { Box } from "@mui/material";

import Title from "../Layout/Title";
import ImageCard from "./ImageCard";
import TitleBox from "./TitleBox";

const Hero = () => {
  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        margin: { xs: "0 auto", sm: "20px auto" },
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <ImageCard>
        <Image
          src="/images/main-logo.png"
          alt="main-image"
          width={300}
          height={300}
        />
      </ImageCard>
      <TitleBox>
        <Title
          sx={{ fontSize: { xs: "40px", sm: "60px" }, fontWeight: "bold" }}
        >
          안녕하세요. 반갑습니다. 햄버거, 피자, 치킨을 좋아하는 최영원 입니다.
        </Title>
      </TitleBox>
    </Box>
  );
};

export default Hero;
