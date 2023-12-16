import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import logo1 from "./components/images/logo1.png";
import registerS from "./components/images/registerS_pic.png";
import { Grid, Snackbar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

function StudentRegister() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#E8D9D9",
      },
    },
  });

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    uname: "",
    email: "",
    password: "",
    confirmPassword: "",
    course: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%&-])[A-Za-z\d@$%&-]{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      setPasswordError("Password must be at least 8 characters, with uppercase, lowercase, and at least one special character.");
      return;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    // Open the confirmation dialog
    setOpenDialog(true);
    setDialogTitle("Confirmation");
    setDialogContent("Are you sure you want to create this account?");
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleConfirm = async () => {
    setOpenDialog(false);

    try {
      const response = await fetch("http://localhost:8080/student/insertStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setOpenSnackbar(true);
        console.log("Registration successful");

        navigate("/login");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
            src={registerS}
            alt="Header Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              marginLeft: "150px",
              marginTop: "-150px",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              backgroundColor: "#8A3539",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                color: "#E8D9D9",
                margin: 0,
                marginBottom: 0,
              }}
            >
              Student Registration
            </h1>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{
                  width: "250px",
                  marginLeft: "0px",
                  backgroundColor: "white",
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
                onChange={handleInputChange}
                name="fname"
                label="First Name"
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{
                  width: "250px",
                  marginLeft: "5px",
                  backgroundColor: "white",
                  marginBottom: "5px",
                }}
                onChange={handleInputChange}
                name="lname"
                label="Last Name"
              />
            </div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{
                width: "550px",
                marginLeft: "0px",
                backgroundColor: "white",
                marginBottom: "5px",
              }}
              onChange={handleInputChange}
              name="uname"
              label="Username"
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{
                width: "550px",
                marginLeft: "0px",
                backgroundColor: "white",
                marginBottom: "5px",
              }}
              onChange={handleInputChange}
              name="email"
              label="Email"
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="password"
              style={{
                width: "550px",
                marginLeft: "0px",
                backgroundColor: "white",
                marginBottom: "5px",
              }}
              onChange={handleInputChange}
              name="password"
              label="Password"
            />
            {passwordError && (
              <p style={{ color: "red", marginLeft: "0px", marginBottom: "5px" }}>{passwordError}</p>
            )}
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="password"
              style={{
                width: "550px",
                marginLeft: "0px",
                backgroundColor: "white",
                marginBottom: "5px",
              }}
              onChange={handleInputChange}
              name="confirmPassword"
              label="Confirm Password"
            />
            {confirmPasswordError && (
              <p style={{ color: "red", marginLeft: "0px", marginBottom: "5px" }}>{confirmPasswordError}</p>
            )}
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{
                width: "550px",
                marginLeft: "0px",
                backgroundColor: "white",
                marginBottom: "5px",
              }}
              onChange={handleInputChange}
              name="course"
              label="Program"
            />
            <Button
              variant="contained"
              onClick={handleFormSubmit}
              style={{
                backgroundColor: "#E8B70E",
                color: "#8A3539",
                fontWeight: "bold",
                fontFamily: "Inter, sans-serif",
                height: "60px",
                padding: "10px",
                width: "550px",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              Create
            </Button>

            <Dialog
              open={openDialog}
              onClose={handleDialogClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {dialogContent}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDialogClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleConfirm} color="primary" autoFocus>
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>

            <Snackbar
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
              message="Account created successfully"
            />
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default StudentRegister;




