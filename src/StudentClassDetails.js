import React from "react";
import StudentHeader from "./components/StudentHeader";
// Import other necessary components or modules

const StudentClassDetails = () => {
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

  const todayClassContainerStyle = {
    backgroundColor: "#BC9193",
    width: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
    marginTop: "20px",
  };

  const labelStyle = {
    color: "#000",
    fontSize: "24px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    height: "40px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    fontFamily: "Tahoma, sans-serif", // Set the font to Tahoma
  };

  const tableStyle = {
    borderCollapse: "collapse",
    marginTop: "20px",
    width: "100%",
    backgroundColor: "#fff",
    color: "#000",
  };

  const thStyle = {
    color: "#fff",
    padding: "15px",
    textAlign: "center",
    height: "60px",
    backgroundColor: "#8A3539",
    fontFamily: "Tahoma, sans-serif", // Set the font to Tahoma
  };

  const tdStyle = {
    border: "1px solid #BC9193",
    padding: "15px",
    height: "60px",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: "18px",
    fontFamily: "Tahoma, sans-serif", // Set the font to Tahoma
  };

  const checkboxStyle = {
    transform: "scale(2)",
  };

  const buttonBackStyle = {
    marginLeft: "395px",
    marginTop: "20px",
    textAlign: "left",
  };

  const buttonStyle = {
    width: "120px",
    height: "50px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#E8B70E",
    backgroundColor: "#8A3539",
  };

  // Your component logic and JSX code here

  return (
    <div>
      <StudentHeader />
      {/* Other components or content for StudentClassDetails */}
      <div style={containerStyle}>
        <h2 style={headingStyle}>Class Details</h2>
        <div style={lineStyle}></div>
      </div>
      {/* Today's Class Container */}
      <div style={todayClassContainerStyle}>
        {/* Today's Class Label */}
        <div style={labelStyle}>Today's Class</div>
        {/* Table */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}></th>
              <th style={thStyle}>#</th>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Teacher</th>
              <th style={thStyle}>Status</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {/* Add your table rows here */}
            <tr>
              <td style={tdStyle}>
                <input type="checkbox" style={checkboxStyle} />
              </td>
              <td style={tdStyle}>1</td>
              <td style={tdStyle}>Math</td>
              <td style={tdStyle}>John Doe</td>
              <td style={tdStyle}>Active</td>
              {/* Add more rows as needed */}
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div style={buttonBackStyle}>
        <button style={buttonStyle}>Back</button>
      </div>
    </div>
  );
};

export default StudentClassDetails;


