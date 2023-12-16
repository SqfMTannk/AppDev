import React, { useState, useEffect } from "react";
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

function TeacherTable() {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [editedData, setEditedData] = useState({
    uname: "",
    email: "",
    password: "",
    // Add other fields here
  });
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [confirmationAction, setConfirmationAction] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); // Run once when the component mounts

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/teacher/getAllTeacher");
      const data = await response.json();

      console.log("Received data:", data);

      if (Array.isArray(data)) {
        setTeachers(data);
      } else {
        console.error("Data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching teacher data:", error);
    }
  };

  const handleEditClick = (teacher) => {
    setSelectedTeacher(teacher);
    setEditedData({
      uname: teacher.uname,
      email: teacher.email,
      password: teacher.password,
      // Add other fields here
    });
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (tid) => {
    setSelectedTeacher({ tid });
    setConfirmationAction("delete");
    setConfirmationDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setSelectedTeacher(null);
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
      const response = await fetch(`http://localhost:8080/teacher/deleteTeacher?tid=${selectedTeacher.tid}`, {
        method: "DELETE",
      });

      const deleteResult = await response.json();
      console.log("Delete result:", deleteResult);

      // Refetch data after deleting
      fetchData();
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const handleSaveConfirmation = async () => {
    try {
      if (!selectedTeacher) {
        console.error("No teacher selected for edit");
        return;
      }

      const response = await fetch(`http://localhost:8080/teacher/updateTeacher?tid=${selectedTeacher.tid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tid: selectedTeacher.tid, ...editedData }),
      });

      const updatedTeacher = await response.json();
      console.log("Edit result:", updatedTeacher);

      // Refetch data after editing
      fetchData();

      // Close the edit dialog
      handleEditDialogClose();
    } catch (error) {
      console.error("Error editing teacher:", error);
    }
  };

  return (
    <Paper>
      <h2>Teacher Table</h2>
      {teachers.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.tid}>
                <TableCell>{teacher.tid}</TableCell>
                <TableCell>{teacher.fname}</TableCell>
                <TableCell>{teacher.lname}</TableCell>
                <TableCell>{teacher.uname}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>{teacher.password}</TableCell>
                <TableCell>{teacher.dprtment}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleEditClick(teacher)}>
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(teacher.tid)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>No teacher data available.</p>
      )}

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Teacher</DialogTitle>
        <DialogContent>
          {/* Add form fields for editing */}
          <TextField
            label="Username"
            value={editedData.uname}
            onChange={(e) => setEditedData({ ...editedData, uname: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={editedData.email}
            onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={editedData.password}
            onChange={(e) => setEditedData({ ...editedData, password: e.target.value })}
            fullWidth
            margin="normal"
          />
          {/* Add other form fields here */}
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

export default TeacherTable;




