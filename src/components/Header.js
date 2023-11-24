import logo1 from "./images/logo1.png";
import React from "react";
import MyButton from "./MyButton";
import Stack from "@mui/material/Stack";

function Header() {
  return (
    <header style={headerStyle}>
      <img src={logo1} alt="Header Image" style={imageStyle} />

      <Stack direction="row" spacing={2}>
        <MyButton buttonText="Home" size="large" />
        <MyButton buttonText="Features" size="large" />
        <MyButton buttonText="About Us" size="large" />
        <MyButton buttonText="Login" size="large" />
        <MyButton buttonText="Signup" size="large" />
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

export default Header;
