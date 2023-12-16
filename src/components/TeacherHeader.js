import React, { useState } from "react";
import logo1 from "./images/logo1.png";
import TextField from "@mui/material/TextField";
import notifications from "./images/notifications.png";
import bell from "./images/bell.png";
import anonymousProfile from "./images/anonymous.png"; // Add the correct path
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";

function TeacherHeader() {
  // Assume you have a state to track the user's profile picture
  const [profilePicture, setProfilePicture] = React.useState(anonymousProfile);
  const [isBellDropdownOpen, setIsBellDropdownOpen] = useState(false);

  const handleIconClick = (icon) => {
    console.log(`${icon} clicked`);
    if (icon === "bell") {
      // Toggle the dropdown visibility
      setIsBellDropdownOpen(!isBellDropdownOpen);
    }
  };

  return (
    <header style={headerStyle}>
      <img src={logo1} alt="Header Image" style={imageStyle} />

      <Stack direction="row" spacing={2} alignItems="center">
      <TextField
          id="search"
          label="Search"
          variant="outlined"
          size="small"
          style={searchBarStyle}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {/* Add any content to the end of the input if needed */}
              </InputAdornment>
            ),
          }}
          inputProps={{
            style: {
              borderRadius: "20px", // Apply borderRadius directly to the input
            },
          }}
        />
        <img
          src={notifications}
          alt="notifications"
          style={iconStyle}
          onClick={() => handleIconClick("notifications")}
        />
        <img
          src={bell}
          alt="bell"
          style={iconStyle}
          onClick={() => handleIconClick("bell")}
        />
        {isBellDropdownOpen && (
          <div style={bellDropdownStyle}>
            {/* Content of the dropdown card */}
            <p>Notification 1</p>
            <p>Notification 2</p>
            {/* Add more notifications as needed */}
          </div>
        )}
        <div style={profilePictureContainer}>
          <img
            src={profilePicture}
            alt="profile"
            style={profilePictureStyle}
            onClick={() => handleIconClick("profile")}
          />
        </div>
      </Stack>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
};

const imageStyle = {
  width: "100px", // Adjust the width of the image
  height: "100px", // Adjust the height of the image
};

const searchBarStyle = {
  width: "300px",
  height: "40px",
  backgroundColor: "#fff",
  color: "#333",
  border: "2px solid #800000",
  borderRadius: "20px", // Apply the border radius
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    "& fieldset": {
      border: "2px solid #800000", // Border style when not focused
    },
    "&:hover fieldset": {
      borderColor: "#800000", // Border style on hover
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #800000", // Border style when focused
    },
  },
};

const iconStyle = {
  width: "24px",
  height: "24px",
  cursor: "pointer", // Add cursor pointer for indicating clickability
};

const profilePictureContainer = {
  width: "30px", // Adjust the size of the container
  height: "30px", // Adjust the size of the container
  borderRadius: "50%", // Create a circle
  overflow: "hidden", // Hide anything that goes beyond the circle
  border: "2px solid #800000", // Add a 2px solid border
  backgroundColor: "#fff", // Fill the circle with white
};

const profilePictureStyle = {
  width: "100%", // Make sure the image takes the full width of the container
  height: "100%", // Make sure the image takes the full height of the container
};

const handleIconClick = (icon) => {
  // Logic for handling icon click (e.g., open a notification panel)
  console.log(`${icon} clicked`);
};

const bellDropdownStyle = {
  position: "absolute",
  top: "40px",
  right: "10px",
  width: "200px",
  backgroundColor: "#fff",
  border: "2px solid #800000",
  borderRadius: "10px",
  padding: "10px",
  zIndex: 1,
};

export default TeacherHeader;

