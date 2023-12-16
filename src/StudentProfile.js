import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";

function StudentProfile() {
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
  const [studentInfo, setStudentInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    // Fetch student data from your server
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/student/getAllStudents"); // replace with your actual endpoint
        const data = await response.json();
        setStudentInfo(data); // Assuming the response is an object with properties matching studentInfo
      } catch (error) {
        console.error("Error fetching student data:", error);
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
    // You can send the updated studentInfo to the server for saving changes
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Avatar
          alt="Student Profile Picture"
          src="/path/to/profile-picture.jpg" // Replace with the actual path or URL of the profile picture
          sx={{ width: 100, height: 100, margin: "0 auto" }}
        />
        <TextField
          label="First Name"
          value={studentInfo.firstName}
          disabled={!isEditing}
          fullWidth
        />
        <TextField
          label="Last Name"
          value={studentInfo.lastName}
          disabled={!isEditing}
          fullWidth
        />
        <TextField
          label="Email"
          value={studentInfo.email}
          disabled={!isEditing}
          fullWidth
        />
        <TextField
          label="Course"
          value={studentInfo.course}
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

export default StudentProfile;

