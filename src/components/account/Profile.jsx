import React from "react";
// import the needed components from material ui
import { Box, Typography } from "@mui/material";
import { useFetchUser } from "../../hooks/useFetchUser";
import UserDetails from "./UserDetails";

// the component to be Rendered
const Profile = () => {
  // call the useFetchUser hook
  const { user } = useFetchUser();

  return (
    <div>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          Profile
        </Typography>
        {/* the user details box */}
        <UserDetails details={user} />
      </Box>
    </div>
  );
};

export default Profile;
