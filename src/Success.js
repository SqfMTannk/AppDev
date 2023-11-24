import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import logo1 from "./components/images/logo1.png";
import successCircle from "./components/images/success_circle.png";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

function Success() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#E8D9D9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Set minHeight to 100vh for the container to fill the whole viewport */}
      <Grid container spacing={2} style={{ minHeight: "10vh" }}>
        <Grid item xs={8}>
          <img
            src={logo1}
            alt="Header Image"
            style={{
              width: "150px",
              height: "150px",
            }}
          />
          <h1 style={{ fontSize: "3rem", marginLeft: "600px" }}>
            <span style={{ color: "#E8B70E" }}>Successfully </span>
            <span style={{ color: "#8A3539" }}>Created!</span>
          </h1>
          <img
            src={successCircle}
            alt="Header Image"
            style={{
              width: "20%",
              height: "auto", // Set height to 100% to fill the container
              marginLeft: "750px",
            }}
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "#E8B70E",
              color: "#8A3539",
              fontWeight: "bold",
              fontFamily: "Inter, sans-serif",
              height: "80px",
              padding: "20px",
              width: "550px",
              fontSize: "30px",
              marginLeft: "600px",
            }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Success;
