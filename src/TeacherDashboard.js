import React, { useState, useEffect } from "react";
import StudentHeader from "./components/StudentHeader";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PlayIcon from "./components/images/play.png";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";

function TeacherDashboard() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // ... (existing code)

  const theme = createTheme({
    palette: {
      background: {
        default: "#E8D9D9",
      },
    },
    typography: {
      fontFamily: 'Tahoma, sans-serif',
    },
  });

  const [classInfo, setClassInfo] = useState([]);

  useEffect(() => {
    // Fetch data from your database and update classInfo
    // Replace the following with actual data fetching logic
    const fetchData = async () => {
      try {
        // Example: Fetch class information from the database
        const response = await fetch("http://localhost:8080/class/getAllClass");
        const data = await response.json();
        setClassInfo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const dashboardContainerStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#E8D9D9",
    minHeight: "100vh",
  };

  const welcomeContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "50px",
    marginTop: "20px",
  };

  const horizontalLineStyle = {
    width: "100%",
    height: "2px",
    backgroundColor: "#333",
    marginTop: "5px",
  };

  const contentContainerStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginLeft: "50px",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "1000px",
    marginTop: "20px",
    marginLeft: "20px",
    backgroundColor: "#ccc",
    padding: "10px",
    backgroundColor: "#8A3539",
  };

  const buttonStyle = {
    margin: "0 5px",
    width: "150px",
    height: "40px",
    backgroundColor: "#E8D9D9",
    color: "#800000"
  };

  const buttonStyling = {
    margin: "0 5px",
    width: "200px",
    height: "40px",
    backgroundColor: "#8A3539",
  };

  const todayClassContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "1000px",
    height: "300px",
    marginTop: "40px",
    marginLeft: "20px",
    backgroundColor: "#BC9193",
    padding: "10px",
  };

  const todayClassTextStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    borderRadius: "5px",
    backgroundColor: "#E8D9D9",
    padding: "8px",
    width: "650px",
    marginTop: "20px",
    marginLeft: "10px",
    marginRight: "10px",
  };

  const additionalContentWrapperStyle = {
    marginRight: "80px",
    marginLeft: "auto",
    width: "500px",
    overflow: "hidden",
    marginTop: "20px",
    alignItems: "center",
  };

  const additionalContentContainerStyle = {
    alignItems: "center",
    backgroundColor: "#BC9193",
    padding: "10px",
    width: "300px",
    height: "400px",
  };

  const verticalContentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "10px",
  };

  const overallwrapper = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const buttonbox = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "50px",
    marginTop: "20px",
  };

  const buttonDesign = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    marginLeft: "20px",
    width: "300px",
    marginTop: "5px",
    marginBottom: "5px",
    alignItems: "center",
    textAlign: "left",
    backgroundColor: "#8A3539",
  };

  const playIconStyle = {
    width: "20px",
    height: "20px",
    marginLeft: "30px",
    alignItems: "end",
  };

  const handleNavigateToClassDetails = () => {
    navigate("/class-details");
  };

  const handleNavigateToCreateClass = () => {
    navigate("/create-class");
  };

  const handleNavigateToFacultyDetails = () => {
    navigate("/faculty-details");
  };

  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleNavigateToTeacherAttendance = () =>{
    navigate("/teacher-attendance");
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={dashboardContainerStyle}>
        <StudentHeader />

        <div style={welcomeContainerStyle}>
          <p style={{ fontSize: "40px", fontWeight: "bold", fontFamily: 'Tahoma, sans-serif' }}>
            Welcome, Instructor
          </p>
          <div style={horizontalLineStyle}></div>
        </div>

        <div style={overallwrapper}>
          <div style={contentContainerStyle}>
            <div style={buttonContainerStyle}>
              <Button variant="contained" color="primary" style={buttonStyle}>
                My Courses
              </Button>
              <Button variant="contained" color="secondary" style={buttonStyle}>
                Dashboard
              </Button>
              <Button variant="contained" color="secondary" style={buttonStyle}>
                CSS DEPARTMENT
              </Button>
              <Button
            variant="contained"
            color="secondary"
            style={buttonStyle}
            onClick={handlePrint}
          >
            EXPORT TO PDF
          </Button>
            </div>

            // ...

<div style={todayClassContainerStyle} ref={componentRef}>
  <div style={todayClassTextStyle}>Today's Class</div>
  <table style={{ width: "100%" }}>
    <thead>
      <tr>
        <th style={{ border: "1px solid #333", padding: "8px", textAlign: "left" }}>Time</th>
        <th style={{ border: "1px solid #333", padding: "8px", textAlign: "left" }}>Classname</th>
      </tr>
    </thead>
    <tbody>

  {classInfo
    .filter((classItem) => classItem.time !== null && classItem.classname !== null)
    .map((classItem) => (
      <tr key={classItem.id}>
        <td style={{ border: "1px solid #333", padding: "8px", textAlign: "left" }}>{classItem.time}</td>
        <td style={{ border: "1px solid #333", padding: "8px", textAlign: "left" }}>{classItem.classname}</td>
      </tr>
    ))}
</tbody>

  </table>
</div>

// ...

          </div>

          <div style={additionalContentWrapperStyle}>
            <div style={additionalContentContainerStyle}>
              <div style={verticalContentStyle}>
                <p>Track</p>
                <Button variant="contained" color="primary" style={buttonStyling} onClick={handleNavigateToTeacherAttendance}>
                  Attendance Sheet
                </Button>
              </div>
              <div style={verticalContentStyle}>
                <p>Manage</p>
                <Button variant="contained" color="primary" style={buttonStyling}>
                  Student
                </Button>
              </div>
              <div style={verticalContentStyle}>
                <p>Name</p>
                <Button variant="contained" color="primary" style={buttonStyle}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div style={buttonbox}>
          <Button
            variant="contained"
            color="primary"
            style={buttonDesign}
            endIcon={<img src={PlayIcon} alt="play" style={playIconStyle} />}
            onClick={handleNavigateToClassDetails}
          >
            CLASS SCHEDULE
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={buttonDesign}
            endIcon={<img src={PlayIcon} alt="play" style={playIconStyle} />}
            onClick={handleNavigateToFacultyDetails}
          >
            FACULTY DETAILS
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={buttonDesign}
            endIcon={<img src={PlayIcon} alt="play" style={playIconStyle} />}
            onClick={handleNavigateToCreateClass } 
          >
            CREATE NEW CLASS
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={buttonDesign}
            endIcon={<img src={PlayIcon} alt="play" style={playIconStyle} />}
          >
            uPCOMING EVENTS
          </Button>
        </div>

        <div>
          {/* Other content in StudentDashboard */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default TeacherDashboard;

