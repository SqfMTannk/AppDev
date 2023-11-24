import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import logo1 from "./components/images/logo1.png";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import registerChoice from "./components/images/register_choice.png";

function RegisterChoice() {
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
      <Grid container spacing={2} style={{ minHeight: "100vh" }}>
        <Grid item xs={8}>
          <img
            src={logo1}
            alt="Header Image"
            style={{
              width: "150px",
              height: "150px",
            }}
          />
          <img
            src={registerChoice}
            alt="Header Image"
            style={{
              width: "90%",
              height: "90%", // Set height to 100% to fill the container
              objectFit: "cover", // Maintain aspect ratio and cover the whole container
              marginTop: "-180px",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          {/* Content for the second column */}
          <div
            style={{
              backgroundColor: "#8A3539",
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <h1
              style={{
                fontSize: "4rem",
                color: "#E8D9D9",
                margin: 0,
                marginBottom: 0,
              }}
            >
              Register
            </h1>
            <h3
              style={{
                fontSize: "2.5rem",
                color: "#E8B70E",
                margin: 0,
                marginTop: "-20px",
              }}
            >
              as
            </h3>
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
                marginTop: "50px",
              }}
            >
              Student
            </Button>
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
                marginTop: "50px",
              }}
            >
              Teacher
            </Button>
            <h4>
              <span style={{ color: "#E8D9D9" }}>Already have an account?</span>
              <span style={{ color: "#E8B70E" }}> Login</span>
            </h4>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default RegisterChoice;
