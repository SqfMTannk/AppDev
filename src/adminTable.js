import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AdminHeader from "./components/AdminHeader"
// Import TeacherTable component
import TeacherTable from "./components/TeacherTable";
import StudentTable from "./components/StudentTable";

function AdminTable() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null); // Assuming you have this state variable
  const [editedData, setEditedData] = useState({});
  useEffect(() => {
    fetchData();
  }, [selectedTable, selectedItemId]); // Include selectedItemId in the dependency array

  const fetchData = async () => {
    try {
      let endpoint;
      if (selectedTable === "student") {
        endpoint = "http://localhost:8080/student/getAllStudents";
      } else if (selectedTable === "teacher") {
        endpoint = "http://localhost:8080/teacher/getAllTeacher";
      }

      const response = await fetch(endpoint);
      const responseData = await response.json();

      console.log("Received data:", responseData);

      setColumns(responseData.columns);
      setData(responseData.rows);
    } catch (error) {
      console.error(`Error fetching ${selectedTable} data:`, error);
    }
  };

  const handleButtonClick = (table) => {
    setSelectedTable(table);
    // Reset selectedItemId when switching tables
    setSelectedItemId(null);
  };

  const handleExportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Exported Data", 10, 10);
    doc.autoTable({
      head: [columns.map((col) => col.header)],
      body: data.map((row) => columns.map((col) => row[col.field])),
    });
    doc.save("exported_data.pdf");
  };

  const handleEdit = async () => {
    try {
      if (!selectedItemId) {
        console.error("No item selected for edit");
        return;
      }
  
      // Assuming you have the editedData variable with updated data
      const updateData = { tid: selectedItemId, ...editedData };
  
      const updateEndpoint =
        selectedTable === "student"
          ? "http://localhost:8080/student/updateStudent"
          : "http://localhost:8080/teacher/updateTeacher";
  
      const response = await fetch(updateEndpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });
  
      const updatedRecord = await response.json();
      console.log("Edit result:", updatedRecord);
  
      // Refetch data after editing
      fetchData();
    } catch (error) {
      console.error("Error editing record:", error);
    }
  };

  const handleDelete = async () => {
    try {
      if (!selectedItemId) {
        console.error("No item selected for delete");
        return;
      }

      // Assuming you have the deleteData variable
      const deleteData = { tid: selectedItemId };

      const deleteEndpoint =
        selectedTable === "student"
          ? "http://localhost:8080/student/deleteStudent"
          : "http://localhost:8080/teacher/deleteTeacher";

      const response = await fetch(deleteEndpoint, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deleteData),
      });

      const deleteResult = await response.json();
      console.log("Delete result:", deleteResult);

      // Refetch data after deletion
      fetchData();
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

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

  return (
    <ThemeProvider theme={theme}>
        <AdminHeader/>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ marginBottom: "20px" }}>
          <Button variant="contained" color="primary" onClick={() => handleButtonClick("Student")}>
            Student
          </Button>
          <Button variant="contained" color="primary" onClick={() => handleButtonClick("Teacher")}>
            Teacher
          </Button>
          <Button variant="contained" color="secondary" onClick={handleExportToPDF}>
            Export to PDF
          </Button>
        </div>
        {selectedTable === "Student" && <StudentTable />}
        {selectedTable === "Teacher" && (
          <div style={{ width: "80%" }}>
            <TeacherTable />
           
          </div>
        )}
        {data.length > 0 && selectedTable !== "Student" && selectedTable !== "Teacher" ? (
          <div style={{ height: 400, width: "80%" }}>
            <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
          </div>
        ) : (
          <p>No data available.</p>
        )}
      </div>
      
    </ThemeProvider>
  );
}

export default AdminTable;



