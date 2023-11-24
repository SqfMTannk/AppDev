import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import logo1 from "./components/images/logo1.png";
import registerT from "./components/images/registerT_pic.png";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function StudentRegister() {
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
            src={registerT}
            alt="Header Image"
            style={{
              width: "100%",
              height: "100%", // Set height to 100% to fill the container
              objectFit: "cover", // Maintain aspect ratio and cover the whole container
              marginLeft: "50px",
              marginTop: "-150px",
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
                fontSize: "3rem",
                color: "#E8D9D9",
                margin: 0,
                marginBottom: 0,
              }}
            >
              Teacher Registration
            </h1>
            <h1
              style={{
                textAlign: "left",
                marginLeft: "25px",
                color: "#E8B70E",
              }}
            >
              Username
            </h1>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{
                marginLeft: "0px",
                backgroundColor: "white",
                width: "550px",
              }}
            />
            <h1
              style={{
                textAlign: "left",
                marginLeft: "25px",
                color: "#E8B70E",
              }}
            >
              Email
            </h1>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{
                marginLeft: "0px",
                backgroundColor: "white",
                width: "550px",
              }}
            />
            <h1
              style={{
                textAlign: "left",
                marginLeft: "25px",
                color: "#E8B70E",
              }}
            >
              Password
            </h1>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{
                marginLeft: "0px",
                backgroundColor: "white",
                width: "550px",
              }}
            />
            <h1
              style={{
                textAlign: "left",
                marginLeft: "25px",
                color: "#E8B70E",
              }}
            >
              Department
            </h1>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{
                marginLeft: "0px",
                backgroundColor: "white",
                width: "550px",
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
                marginTop: "20px",
              }}
            >
              Create
            </Button>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default StudentRegister;
