import React from 'react';
import Header from './components/TeacherHeader';
import Facultystaff from './components/facultystaff';

const FacultyDetails = () => {
    const containerStyle = {
        backgroundColor: "#800000",
        height: "80px",
        marginLeft: "20px",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        position: "relative",
        marginBottom: "80px",
      };
    
      const headingStyle = {
        color: "#fff",
        textAlign: "left",
        marginTop: "20px",
        marginBottom: "20px",
        marginLeft: "20px",
        fontFamily: "Tahoma, sans-serif",
      };
    
      const lineStyle = {
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "8px",
        backgroundColor: "#E8B70E",
      };

      
  return (
    <div>
        
      <Header />
      <div style={containerStyle}>
        <h2 style={headingStyle}>Faculty Members</h2>
        <div style={lineStyle}></div>
      </div>
      <Facultystaff />
    </div>
  );
};

export default FacultyDetails;
