import React, { useState } from "react";
import logo1 from "./images/logo1.png";
import TextField from "@mui/material/TextField";
import notifications from "./images/notifications.png";
import bell from "./images/bell.png";
import anonymousProfile from "./images/anonymous.png";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";

function StudentHeader() {
  const [profilePicture, setProfilePicture] = useState(anonymousProfile);
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

      <Stack direction="row" spacing={2} alignItems="center" position="relative">
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
              borderRadius: "20px",
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
  width: "100px",
  height: "100px",
};

const searchBarStyle = {
  width: "300px",
  height: "40px",
  backgroundColor: "#fff",
  color: "#333",
  border: "2px solid #800000",
  borderRadius: "20px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    "& fieldset": {
      border: "2px solid #800000",
    },
    "&:hover fieldset": {
      borderColor: "#800000",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #800000",
    },
  },
};

const iconStyle = {
  width: "24px",
  height: "24px",
  cursor: "pointer",
};

const profilePictureContainer = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  overflow: "hidden",
  border: "2px solid #800000",
  backgroundColor: "#fff",
};

const profilePictureStyle = {
  width: "100%",
  height: "100%",
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

export default StudentHeader;



