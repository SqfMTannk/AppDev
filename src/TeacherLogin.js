import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import logo1 from "./components/images/logo1.png";
import login_pic from "./components/images/Login_pic.png";
import facebook_logo from "./components/images/Facebook_Logo_Primary.png";
import gmail_logo from "./components/images/Gmail_Logo.png";
import { Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom';

function TeacherLogin() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#E8D9D9",
      },
    },
  });

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // Perform login logic if needed

    // For example, redirect to teacher dashboard
    navigate("/teacher-dashboard");
  };

  const handleOkClick = () => {
    setErrorMessage("");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
            src={login_pic}
            alt="Header Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              marginTop: "-180px",
            }}
          />
        </Grid>
        <Grid item xs={4}>
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
            <h2
              style={{
                fontSize: "2rem",
                color: "#E8B70E",
                paddingTop: "50px",
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              Welcome back
            </h2>
            <h1
              style={{
                fontSize: "3rem",
                color: "#E8D9D9",
                margin: 0,
                marginBottom: 0,
              }}
            >
              Teacher Login to continue
            </h1>
            <h3 style={{ fontSize: "2rem", color: "#E8B70E", margin: 0 }}>
              Connect with
            </h3>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img
                  src={facebook_logo}
                  alt="Header Image"
                  style={{
                    width: "20%",
                    height: "auto",
                    marginLeft: "220px",
                    marginTop: "-5px",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src={gmail_logo}
                  alt="Header Image"
                  style={{
                    width: "20%",
                    height: "auto",
                    marginTop: "5px",
                    marginRight: "220px",
                  }}
                />
              </Grid>
            </Grid>
            <hr
              style={{
                color: "#E8D9D9",
                backgroundColor: "#E8D9D9",
                height: 4,
                width: "40%",
                marginTop: "20px",
                marginLeft: "30px",
              }}
            />
            <h3 style={{ color: "#E8B70E", marginTop: "-22px" }}>Or</h3>
            <hr
              style={{
                color: "#E8D9D9",
                backgroundColor: "#E8D9D9",
                height: 4,
                width: "40%",
                marginTop: "-37px",
                marginLeft: "330px",
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
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p
              style={{
                color: "#E8D9D9",
                fontSize: "1.1rem",
                textAlign: "left",
                marginLeft: "25px",
              }}
            >
              Forget Password?
            </p>
            <Button
              variant="contained"
              onClick={handleLogin}
              style={{
                backgroundColor: "#E8B70E",
                color: "#8A3539",
                fontWeight: "bold",
                fontFamily: "Inter, sans-serif",
                height: "80px",
                padding: "20px",
                width: "550px",
                fontSize: "30px",
              }}
            >
              Login as Teacher
            </Button>
            {errorMessage && (
              <div>
                <p style={{ color: "red", marginLeft: "25px", marginBottom: "10px" }}>{errorMessage}</p>
                <Button
                  variant="contained"
                  onClick={handleOkClick}
                  style={{
                    backgroundColor: "#E8B70E",
                    color: "#8A3539",
                    fontWeight: "bold",
                    fontFamily: "Inter, sans-serif",
                    height: "40px",
                    padding: "10px",
                    width: "550px",
                    fontSize: "20px",
                  }}
                >
                  Ok
                </Button>
              </div>
            )}
            <h4>
              <span style={{ color: "#E8D9D9" }}>Don't have an account?</span>
              <span style={{ color: "#E8B70E" }}> Register today</span>
            </h4>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default TeacherLogin;

