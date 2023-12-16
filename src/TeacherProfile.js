import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";

function TeacherProfile() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#E8D9D9",
      },
    },
    typography: {
      fontFamily: "Tahoma, sans-serif",
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [teacherInfo, setTeacherInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "", // Updated to match the TeacherEntity field
  });

  useEffect(() => {
    // Fetch teacher data from your server
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/teacher/getAllTeacher");
        const data = await response.json();
        setTeacherInfo(data);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Add logic to save changes to the server
    setIsEditing(false);
    // You can send the updated teacherInfo to the server for saving changes
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Avatar
          alt="Teacher Profile Picture"
          src="/path/to/profile-picture.jpg"
          sx={{ width: 100, height: 100, margin: "0 auto" }}
        />
        <TextField
          label="First Name"
          value={teacherInfo.firstName}
          disabled={!isEditing}
          fullWidth
        />
        <TextField
          label="Last Name"
          value={teacherInfo.lastName}
          disabled={!isEditing}
          fullWidth
        />
        <TextField
          label="Email"
          value={teacherInfo.email}
          disabled={!isEditing}
          fullWidth
        />
        <TextField
          label="Department"
          value={teacherInfo.department}
          disabled={!isEditing}
          fullWidth
        />
        {isEditing ? (
          <Button variant="contained" color="primary" onClick={handleSaveClick}>
            Save
          </Button>
        ) : (
          <Button variant="contained" color="secondary" onClick={handleEditClick}>
            Edit
          </Button>
        )}
      </div>
    </ThemeProvider>
  );
}

export default TeacherProfile;
