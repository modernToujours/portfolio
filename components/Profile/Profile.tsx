import React from "react";

import { Box } from "@mui/material";

import Title from "../Layout/Title";
import ProfileBox from "./ProfileBox";
import ProfileDetailBox from "./ProfileDetailBox";
import ProfileDetailTable, { ProfileProps } from "./ProfileDetailTable";
import ProfileImage from "./ProfileImage";
import ProfileImageBox from "./ProfileImageBox";

const Profile = ({ profile }: { profile: ProfileProps }) => {
  return (
    <Box component={"div"} sx={{ textAlign: "center", padding: "0 20px" }}>
      <Title>PROFILE</Title>
      <ProfileBox>
        <ProfileImageBox>
          <ProfileImage />
        </ProfileImageBox>
        <ProfileDetailBox>
          <ProfileDetailTable profile={profile} />
        </ProfileDetailBox>
      </ProfileBox>
    </Box>
  );
};

export default Profile;
