import React from "react";

import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import BookIcon from "@mui/icons-material/Book";

import Title from "../Layout/Title";
import Text from "../Layout/Text";
import ContactText from "./ContactText";
import ContactTitleBox from "./ContactTitleBox";

const Contact = () => {
  return (
    <Box component={"div"} sx={{ textAlign: "center" }}>
      <Title>Contact</Title>
      <Box component={"div"} sx={{ marginTop: "20px" }}>
        <Box component={"div"} sx={{ display: "flex", alignItems: "center" }}>
          <Box component={"div"} sx={{ textAlign: "left" }}>
            <GitHubIcon fontSize="large" />
          </Box>
          <ContactTitleBox>
            <ContactText>Github</ContactText>
          </ContactTitleBox>
          <Link target="blank" href="https://github.com/modernToujours">
            <ContactText>https://github.com/modernToujours</ContactText>
          </Link>
        </Box>
        <Box component={"div"} sx={{ display: "flex", alignItems: "center" }}>
          <Box component={"div"} sx={{ textAlign: "left" }}>
            <EmailIcon fontSize="large" />
          </Box>
          <ContactTitleBox>
            <ContactText>Email</ContactText>
          </ContactTitleBox>
          <Link>
            <ContactText>youngwon0607@gmail.com</ContactText>
          </Link>
        </Box>{" "}
        <Box component={"div"} sx={{ display: "flex", alignItems: "center" }}>
          <Box component={"div"} sx={{ textAlign: "left" }}>
            <BookIcon fontSize="large" />
          </Box>
          <ContactTitleBox>
            <ContactText>Blog</ContactText>
          </ContactTitleBox>
          <Link target="blank" href="https://www.moderntoujours.dev/">
            <ContactText>https://www.moderntoujours.dev</ContactText>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
