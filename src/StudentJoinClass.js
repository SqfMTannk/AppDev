import React from "react";
import StudentHeader from "./components/StudentHeader";
// Import other necessary components or modules

const StudentJoinClass = () => {
  // Your component logic and JSX code here
  const containerStyle = {
    backgroundColor: "#800000",
    height: "80px",
    marginLeft: "20px",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    position: "relative",
  };

  const headingStyle = {
    color: "#fff",
    textAlign: "left",
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "20px",
    fontFamily: "Tahoma, sans-serif", // Set the font to Tahoma
  };

  const lineStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "8px",
    backgroundColor: "#E8B70E",
  };

  const searchBarContainerStyle = {
    display: "flex",
    justifyContent: "center", // Center items horizontally
    alignItems: "center",
    flexDirection: "row", // Updated to column
    marginTop: "20px",
  };

  const searchBarStyle = {
    width: "400px",
    height: "60px",
    margin: "10px",
    padding: "5px",
    borderRadius: "30px",
    border: "3px solid #8A3539", // Add border style here
    fontFamily: "Tahoma, sans-serif", // Set font to Tahoma
    fontSize: "18px", // Increase font size
    textAlign: "center", // Center text within the input
  };

  const enterCodeContainerStyle = {
    display: "flex",
    justifyContent: "center", // Center items horizontally
    alignItems: "center",
    flexDirection: "row", // Updated to column
    marginTop: "20px",
  };

  const enterCodeTextStyle = {
    color: "#000",
    fontSize: "20px", // Increase font size
    marginBottom: "10px",
    marginRight: "10px",
    fontFamily: "Tahoma, sans-serif", // Set font to Tahoma
  };

  const enterCodeInputStyle = {
    width: "400px",
    height: "60px",
    padding: "5px",
    borderRadius: "5px",
    border: "3px solid #8A3539", // Add border style here
    fontFamily: "Tahoma, sans-serif", // Set font to Tahoma
    fontSize: "18px", // Increase font size
    textAlign: "center", // Center text within the input
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center", // Center items horizontally
    alignItems: "center",
    flexDirection: "row", // Updated to column
    marginTop: "20px",
    marginRight: "130px"
  };

  const buttonStyle = {
    backgroundColor: "#8A3539",
    color: "#E8B70E",
    padding: "10px 20px",
    borderRadius: "5px",
    margin: "0 10px",
    fontSize: "18px", // Increase font size
    fontFamily: "Tahoma, sans-serif", // Set font to Tahoma
    cursor: "pointer",
  };

  return (
    <div>
      <StudentHeader />
      {/* Other components or content for StudentJoinClass */}
      <div style={containerStyle}>
        <h2 style={headingStyle}>Join Class</h2>
        <div style={lineStyle}></div>
      </div>

      {/* Search Bar */}
      <div style={searchBarContainerStyle}>
        <p style={{ fontFamily: "Tahoma, sans-serif", fontSize: "20px" }}>Search Bar:</p>
        <input type="text" style={searchBarStyle} />
      </div>

      {/* Enter Code */}
      <div style={enterCodeContainerStyle}>
        <p style={enterCodeTextStyle}>Enter Code:</p>
        <input type="text" style={enterCodeInputStyle} />
      </div>

      {/* Buttons */}
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>Back</button>
        <button style={buttonStyle}>Join</button>
      </div>
    </div>
  );
};

export default StudentJoinClass;

