import React, { useState } from "react";
import TeacherHeader from "./components/TeacherHeader";

const TeacherCreateClass = () => {
  const [classData, setClassData] = useState({
    cname: "",
    scode: "",
    sched: "",
    time: "",
    room: "",
  });

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

  const inputContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "20px",
  };

  const inputStyle = {
    width: "400px",
    height: "60px",
    margin: "10px",
    padding: "5px",
    borderRadius: "5px",
    border: "3px solid #8A3539",
    fontFamily: "Tahoma, sans-serif",
    fontSize: "18px",
    textAlign: "center",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "20px",
    marginRight: "130px",
  };

  const buttonStyle = {
    backgroundColor: "#8A3539",
    color: "#E8B70E",
    padding: "10px 20px",
    borderRadius: "5px",
    margin: "0 10px",
    fontSize: "18px",
    fontFamily: "Tahoma, sans-serif",
    cursor: "pointer",
  };

  const handleInputChange = (field, value) => {
    setClassData({
      ...classData,
      [field]: value,
    });
  };

  const handleCreateClass = async () => {
    try {
      const response = await fetch("http://localhost:8080/class/insertClass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(classData),
      });

      const createdClass = await response.json();
      console.log("Created class:", createdClass);

      // Reset the form after successful creation
      setClassData({
        cname: "",
        scode: "",
        sched: "",
        time: "",
        room: "",
      });
    } catch (error) {
      console.error("Error creating class:", error);
    }
  };

  return (
    <div>
      <TeacherHeader />
      <div style={containerStyle}>
        <h2 style={headingStyle}>Create Class</h2>
        <div style={lineStyle}></div>
      </div>

      {/* Class Name */}

      <div style={inputContainerStyle}>
        <p style={{ fontFamily: "Tahoma, sans-serif", fontSize: "20px" }}>
          Class Name:
        </p>
        <input
          type="text"
          style={inputStyle}
          placeholder="Enter Subject Code"
          value={classData.cname}
          onChange={(e) => handleInputChange("cname", e.target.value)}
        />
      </div>
      <div style={inputContainerStyle}>
        <p style={{ fontFamily: "Tahoma, sans-serif", fontSize: "20px" }}>
          Subject Code:
        </p>
        <input
          type="text"
          style={inputStyle}
          placeholder="Enter Subject Code"
          value={classData.scode}
          onChange={(e) => handleInputChange("scode", e.target.value)}
        />
      </div>

      {/* Schedule */}
      <div style={inputContainerStyle}>
        <p style={{ fontFamily: "Tahoma, sans-serif", fontSize: "20px" }}>
          Schedule:
        </p>
        <input
          type="text"
          style={inputStyle}
          placeholder="Enter Schedule"
          value={classData.sched}
          onChange={(e) => handleInputChange("sched", e.target.value)}
        />
      </div>

      {/* Time (From) */}
      <div style={inputContainerStyle}>
        <p style={{ fontFamily: "Tahoma, sans-serif", fontSize: "20px" }}>
          Time:
        </p>
        <input
          type="text"
          style={inputStyle}
          placeholder="Enter Time"
          value={classData.time}
          onChange={(e) => handleInputChange("time", e.target.value)}
        />
      </div>

      {/* Room */}
      <div style={inputContainerStyle}>
        <p style={{ fontFamily: "Tahoma, sans-serif", fontSize: "20px" }}>
          Room:
        </p>
        <input
          type="text"
          style={inputStyle}
          placeholder="Enter Room"
          value={classData.room}
          onChange={(e) => handleInputChange("room", e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>Cancel</button>
        <button style={buttonStyle} onClick={handleCreateClass}>
          Create
        </button>
      </div>
    </div>
  );
};

export default TeacherCreateClass;

