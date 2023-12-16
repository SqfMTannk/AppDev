import React from "react";
import StudentHeader from "./components/StudentHeader";
import DropDownContainer from "./components/DropDownContainer";

const StudentAttendanceSheet = () => {
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

  const dropdownContainerStyle = {
    backgroundColor: "#BC9193",
    width: "1000px",
    height: "100px",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const thirdContainerStyle = {
    backgroundColor: "#BC9193",
    width: "1000px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
    marginTop: "20px",
  };

  const labelStyle = {
    color: "#fff",
    fontSize: "18px",
    marginBottom: "10px",
  };

  const tableStyle = {
    borderCollapse: "collapse",
    marginTop: "20px",
    width: "100%",
    backgroundColor: "#fff",
    color: "#000",
  };

  const thStyle = {
    backgroundColor: "#fff",
    color: "#000",
    padding: "10px",
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #BC9193",
    padding: "10px",
  };

  const buttonBackStyle = {
    marginLeft: "500px",
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
  
  const outsideContainer={
    display: "flex",
    flexDirection: "column",
  }

  return (
    <div>
      <StudentHeader />
      <div style={containerStyle}>
        <h2 style={headingStyle}>Attendance Sheet</h2>
        <div style={lineStyle}></div>
      </div>
      {/* Dropdown Container */}
      <div style={dropdownContainerStyle}>
        {/* Dropdowns */}
        <DropDownContainer />
      </div>
      {/* Third Container */}
    <div style={outsideContainer}>
      <div style={thirdContainerStyle}>
        {/* Subject Report Label */}
        <div style={labelStyle}>Subject Report</div>
        {/* Table */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>#</th>
              <th style={thStyle}>Student Name</th>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Total Present Day</th>
              <th style={thStyle}>Total Absence Day</th>
            </tr>
          </thead>
          <tbody>
            {/* Add your table rows here */}
            <tr>
              <td style={tdStyle}>Row 1, Column 1</td>
              <td style={tdStyle}>Row 1, Column 2</td>
              <td style={tdStyle}>Row 1, Column 3</td>
              <td style={tdStyle}>Row 1, Column 4</td>
              <td style={tdStyle}>Row 1, Column 5</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      {/* Back Button */}
      <div style={buttonBackStyle}>
        <button style={buttonStyle}>Back</button>
      </div>
      </div>
    </div>
  );
};

export default StudentAttendanceSheet;



