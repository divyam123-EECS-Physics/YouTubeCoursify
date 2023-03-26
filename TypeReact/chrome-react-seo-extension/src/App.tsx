import React from 'react';
import './App.css';
import OptionsPage from './OptionsPage';
import { Route, Routes } from 'react-router-dom';
import Popup from './Popup';
import NotesPage from './NotesPage';
import Template from './Template';
import CreateCourse from "./CreateCourse";
import CreateUser from './CreateUser';
import Course_page from './CoursePage';
import UserCourses from './UserCourses';
import TemplateCreator from './TemplateCreator';
import { Typography } from '@mui/material';
import EnrolledCourses from './EnrolledCourses';
// import { Router } from 'react-chrome-extension-router';

function App() {
  return (
    <div className="App">
      <header className="Extension Pop-Up">
      <Routes>
        <Route path="/" element={<Popup />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/OptionsPage" element={<OptionsPage />} />
        <Route path="/NotesPage" element={<NotesPage />} />
        <Route path="/Template" element={<Template />} />
        <Route path="/CreateCourse" element={<CreateCourse />} />
        <Route path="/UserCourses" element={<UserCourses />} />
        <Route path="/course_page/:userid/:course" element={<Course_page />} />
        <Route path="/TemplateCreator" element={<TemplateCreator/>} />
        <Route path="/EnrolledCourses" element={<EnrolledCourses/>} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
