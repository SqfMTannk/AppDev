import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  DialogContentText,
} from "@mui/material";

function StudentTable() {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isEditDialogOpen, setEditDialogOpen] = useState(false);
    const [editedData, setEditedData] = useState({});
    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
    const [confirmationAction, setConfirmationAction] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); // Run once when the component mounts

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/student/getAllStudents");
      const data = await response.json();

      console.log("Received data:", data);

      if (Array.isArray(data)) {
        setStudents(data);
      } else {
        console.error("Data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setEditedData({ ...student });
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (sid) => {
    setSelectedStudent({ sid });
    setConfirmationAction("delete");
    setConfirmationDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setSelectedStudent(null);
  };

  const handleEditDialogSave = () => {
    setConfirmationAction("save");
    setConfirmationDialogOpen(true);
  };

  const handleConfirmationDialogClose = () => {
    setConfirmationDialogOpen(false);
  };

  const handleConfirmationDialogConfirm = async () => {
    if (confirmationAction === "delete") {
      await handleDeleteConfirmation();
    } else if (confirmationAction === "save") {
      await handleSaveConfirmation();
    }

    setConfirmationAction(null);
    setConfirmationDialogOpen(false);
  };

  const handleDeleteConfirmation = async () => {
    try {
      const response = await fetch(`http://localhost:8080/student/deleteStudent?sid=${selectedStudent.sid}`, {
        method: "DELETE",
      });

      const deleteResult = await response.json();
      console.log("Delete result:", deleteResult);

      // Refetch data after deleting
      fetchData();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleSaveConfirmation = async () => {
    try {
      if (!selectedStudent) {
        console.error("No student selected for edit");
        return;
      }

      const response = await fetch(`http://localhost:8080/student/updateStudent?sid=${selectedStudent.sid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sid: selectedStudent.sid, ...editedData }),
      });

      const updatedStudent = await response.json();
      console.log("Edit result:", updatedStudent);

      // Refetch data after editing
      fetchData();

      // Close the edit dialog
      handleEditDialogClose();
    } catch (error) {
      console.error("Error editing student:", error);
    }
  };

  return (
    <Paper>
      <h2>Student Table</h2>
      {students.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              {Object.keys(students[0]).map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                {Object.keys(student).map((header) => (
                  <TableCell key={header}>{student[header]}</TableCell>
                ))}
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleEditClick(student)}>
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(student.sid)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>No student data available.</p>
      )}

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Student</DialogTitle>
        <DialogContent>
          {/* Add form fields for editing */}
          {Object.keys(editedData).map((field) => (
            <TextField
              key={field}
              label={field}
              value={editedData[field]}
              onChange={(e) => setEditedData({ ...editedData, [field]: e.target.value })}
              fullWidth
              margin="normal"
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditDialogSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={isConfirmationDialogOpen} onClose={handleConfirmationDialogClose}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Are you sure you want to ${confirmationAction === "delete" ? "delete" : "save"} this record?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmationDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmationDialogConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

export default StudentTable;




