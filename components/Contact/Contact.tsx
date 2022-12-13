import React from "react";

import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import BookIcon from "@mui/icons-material/Book";

import Title from "../Layout/Title";
import Text from "../Layout/Text";

const Contact = () => {
  return (
    <Box component={"div"} sx={{ textAlign: "center" }}>
      <Title>Contact</Title>
      <Box component={"div"} sx={{ marginTop: "20px" }}>
        <Box component={"div"} sx={{ display: "flex", alignItems: "center" }}>
          <Box component={"div"} sx={{ textAlign: "left" }}>
            <GitHubIcon fontSize="large" />
          </Box>
          <Box component={"div"} sx={{ width: "80px", textAlign: "left" }}>
            <Text>Github</Text>
          </Box>
          <Link target="blank" href="https://github.com/modernToujours">
            <Text>https://github.com/modernToujours</Text>
          </Link>
        </Box>
        <Box component={"div"} sx={{ display: "flex", alignItems: "center" }}>
          <Box component={"div"} sx={{ textAlign: "left" }}>
            <EmailIcon fontSize="large" />
          </Box>
          <Box component={"div"} sx={{ width: "80px", textAlign: "left" }}>
            <Text>Email</Text>
          </Box>
          <Link>
            <Text>youngwon0607@gmail.com</Text>
          </Link>
        </Box>{" "}
        <Box component={"div"} sx={{ display: "flex", alignItems: "center" }}>
          <Box component={"div"} sx={{ textAlign: "left" }}>
            <BookIcon fontSize="large" />
          </Box>
          <Box component={"div"} sx={{ width: "80px", textAlign: "left" }}>
            <Text>Blog</Text>
          </Box>
          <Link target="blank" href="https://www.moderntoujours.dev/">
            <Text>https://www.moderntoujours.dev</Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
