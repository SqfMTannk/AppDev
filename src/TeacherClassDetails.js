import React, { useState, useEffect } from "react";
import TeacherHeader from "./components/TeacherHeader";

const TeacherClassDetails = () => {
  const [classDetails, setClassDetails] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    // Fetch class details from your backend
    const fetchClassDetails = async () => {
      try {
        const response = await fetch("http://localhost:8080/class/getAllClass");
        const data = await response.json();

        // Ensure 'data' is an array before setting it
        if (Array.isArray(data)) {
          setClassDetails(data);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching class details:", error);
      }
    };

    fetchClassDetails();
  }, []); // Make sure to include the empty dependency array

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

  const handleEdit = (classItem) => {
    // Handle edit logic, e.g., navigate to the edit page
    console.log(`Edit class with ID ${classItem.cid}`);
  };

  const handleDelete = () => {
    // Handle delete logic, e.g., delete the class
    // For now, just log the deletion
    console.log(`Delete class with ID ${selectedClass.cid}`);
    // Close the delete modal
    setShowDeleteModal(false);
  };

  const showDeleteConfirmation = (classItem) => {
    // Set the selected class for delete confirmation
    setSelectedClass(classItem);
    // Show the delete modal
    setShowDeleteModal(true);
  };

  return (
    <div>
      <TeacherHeader />
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
              <th style={thStyle}>Class Name</th>
              <th style={thStyle}>Subject Code</th>
              <th style={thStyle}>Schedule</th>
              <th style={thStyle}>ClassRoom #</th>
              <th style={thStyle}>Time</th>
            </tr>
          </thead>
          <tbody>
            {classDetails.map((classDetail, index) => (
              <tr key={classDetail.cid}>
                <td style={tdStyle}>
                  <input type="checkbox" style={checkboxStyle} />
                </td>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{classDetail.cname}</td>
                <td style={tdStyle}>{classDetail.scode}</td>
                <td style={tdStyle}>{classDetail.sched}</td>
                <td style={tdStyle}>{classDetail.room}</td>
                <td style={tdStyle}>{classDetail.time}</td>
                <td style={tdStyle}>
                  <button onClick={() => handleEdit(classDetail)}>Edit</button>
                  <button onClick={() => showDeleteConfirmation(classDetail)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={buttonBackStyle}>
        <button style={buttonStyle}>Back</button>
      </div>
      {/* Delete Modal */}
      {showDeleteModal && (
        <div>
          <div>Are you sure you want to delete this class?</div>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowDeleteModal(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default TeacherClassDetails;



