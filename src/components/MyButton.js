// MyButton.js
import React from "react";
import Button from "@mui/material/Button";

function MyButton({ buttonText, size, onClick }) {
  const buttonStyle = {
    backgroundColor: "#8A3539",
    color: "#E8B70E",
    fontWeight: "bold",
    fontFamily: "Inter, sans-serif",
    height: "60px",
    padding: "20px",
    width: "250px",
  };

  return (
    <Button variant="contained" style={buttonStyle} size={size} onClick={onClick}>
      {buttonText}
    </Button>
  );
}

export default MyButton;


