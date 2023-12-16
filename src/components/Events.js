import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import collegeEventImage from './images/collegeevent.jpg';
import graduationImage from './images/graduation.jpg';
import anotherGatheringImage from './images/gathering.jpg';
import './Event.css';


const Event = () => {
  const events = [
    { imageUrl: collegeEventImage, name: 'College Event', describe: 'Current Christmas Event' },
    { imageUrl: graduationImage, name: 'Graduation Event', describe: 'Upcoming Graduation Event' },
    { imageUrl: anotherGatheringImage, name: 'Another Gathering Event', describe: 'Upcoming Gathering Event For Students'},
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0', // Adjust as needed
    variableWidth: true,
  };

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

  return (
    <div className="event-container">
      <div className="carousel-container">
        <Slider {...settings} className="slick-carousel">
          {events.map((event, index) => (
            <div key={index} className="custom-card">
              <Card>
                <div className="event-image">
                  <img src={event.imageUrl} alt={event.name} />
                </div>
                <CardContent className="event-content">
                  <Typography variant="h6" component="div" style={{ color: "white" }}>
                    {event.name}
                  </Typography>
                </CardContent>
              </Card>
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
    </div>
  );
};

export default Event;













