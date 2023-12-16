// Import necessary libraries and components
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Slider from 'react-slick';
import { Card, CardContent, Typography, Button } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./facultystaff.css";
import Avatar from '@mui/material/Avatar';
import QuestionProfile from './images/questionmarkprofile.png'; // Import the image

// Define the FacultyStaff component
const Facultystaff = () => {
  // Define faculty members with additional information (number and email)
  const facultyMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Professor',
      imageUrl: 'https://placekitten.com/80/80',
      number: '123-456-7890',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Assistant Professor',
      imageUrl: 'https://placekitten.com/81/81',
      number: '987-654-3210',
      email: 'jane.smith@example.com',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      position: 'Associate Professor',
      imageUrl: 'https://placekitten.com/82/82',
      number: '555-123-4567',
      email: 'bob.johnson@example.com',
    },
    {
      id: 4,
      name: 'Alice Brown',
      position: 'Lecturer',
      imageUrl: 'https://placekitten.com/83/83',
      number: '444-789-1234',
      email: 'alice.brown@example.com',
    },
    // Add more faculty members as needed
  ];

  // Define slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    variableWidth: true,
  };

  // Access the navigate function to navigate
  const navigate = useNavigate();

  // Function to handle the "Back" button click
  const handleBackClick = () => {
    // Assuming you have routes defined for StudentDashboard and TeacherDashboard
    // Change the route based on your actual route configurations
    // If the user is a student, navigate to StudentDashboard, else navigate to TeacherDashboard
    const isStudent = true; // Replace with your logic to determine if the user is a student
    const targetRoute = isStudent ? '/student-dashboard' : '/teacher-dashboard';
    navigate(targetRoute);
  };

  // Render the component
  return (
    <div className="faculty-carousel">
      <Slider {...settings} className="slick-carousel">
        {facultyMembers.map((faculty) => (
          <div key={faculty.id} className="card-container">
            <Card className="custom-card" style={{ width: "500px" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {faculty.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {faculty.position}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Number: {faculty.number}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {faculty.email}
                </Typography>
              </CardContent>
              <Button
                className="buttonSchedule"
                variant="contained"
                color="primary"
                style={{ marginBottom: "10px", backgroundColor: "#BC8F8F" }}
              >
                Schedule
              </Button>
            </Card>
            <div className="cutout-circle">
              <Avatar
                alt={faculty.name}
                src={faculty.imageUrl || QuestionProfile}
                style={{ width: '100%', height: '100%', margin: 'auto' }}
              />
            </div>
          </div>
        ))}
      </Slider>
      <Button
        variant="outlined"
        color="primary"
        style={{ marginTop: '20px', backgroundColor: "#800000", color: "gold" }}
        onClick={handleBackClick} // Attach the onClick event to the handleBackClick function
      >
        Back
      </Button>
    </div>
  );
};

// Export the component
export default Facultystaff;



