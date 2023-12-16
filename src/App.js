// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header"; // Adjust the path accordingly
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./Login";
import RegisterChoice from "./RegisterChoice";
import StudentRegister from "./StudentRegister";
import TeacherRegister from "./TeacherRegister";
import Success from "./Success";
import StudentDashboard from "./StudentDashboard";
import TeacherLogin from "./TeacherLogin";
import TeacherDashboard from "./TeacherDashboard";
import StudentProfile from "./StudentProfile";
import AdminTable from "./adminTable";
import StudentTable from "./components/StudentTable";
import TeacherCreateClass from "./TeacherCreateClass";
import TeacherClassDetails from "./TeacherClassDetails";
import StudentClassDetails from "./StudentClassDetails";
import StudentJoinClass from "./StudentJoinClass";
import Facultystaff from "./components/facultystaff";
import FacultyDetails from "./FacultyDetails";
import Events from "./components/Events";
import EventDetails from "./EventDetails";
import StudentAttendanceSheet from "./StudentAttendanceSheet";
import TeacherAttendance from "./TeacherAttendance";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-choice" element={<RegisterChoice />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
        <Route path="/success" element={<Success />} />
        <Route path="/teacher-login" element={<TeacherLogin/>}/>
        <Route path="/student-dashboard" element={<StudentDashboard />}/>
        <Route path="/teacher-dashboard" element={<TeacherDashboard/>}/>
        <Route path="/student-profile" element={<StudentProfile />}/>
        <Route path="/admin-table" element={<AdminTable />}/>
        <Route path="/student-table" element={<StudentTable/>}/>
        <Route path="/create-class" element={<TeacherCreateClass/>}/>
        <Route path="/class-details" element={<TeacherClassDetails/>}/>
        <Route path="/student-details" element={<StudentClassDetails/>}/>
        <Route path="/join-class" element={<StudentJoinClass/>}/>
        <Route path="/faculty-details" element={<FacultyDetails/>}/>
        <Route path="/events" element={<EventDetails/>}/>
        <Route path="/student-attendance" element={<StudentAttendanceSheet/>}/>
        <Route path="/teacher-attendance" element={<TeacherAttendance/>}/>
      </Routes>
    </Router>
  );
}

export default App;

