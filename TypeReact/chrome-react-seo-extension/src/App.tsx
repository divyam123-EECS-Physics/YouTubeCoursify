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
import Login from './Login';
import CreatedCourses from './CreatedCourses';
import EnrolledCourses from './EnrolledCourses';
function App() {
  return (
    <div className="App">
      <header className="Extension Pop-Up">
      <Routes>
        <Route path="/" element={<Popup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/OptionsPage/:userid" element={<OptionsPage />} />
        {/* <Route path="/OptionsPage" element={<OptionsPage />} /> */}
        <Route path="/CreatedCourses/:userid" element={<CreatedCourses />} />
        <Route path="/CreatedCourseTemplate/:userid/:course" element={<Template />} />
        <Route path="/EnrolledCourses/:userid" element={<EnrolledCourses />} />
        <Route path="/EnrolledCourseTemplate/:userid/:course" element={<Template />} />
        <Route path="/NotesPage" element={<NotesPage />} />
        <Route path="/Template" element={<Template />} />
        <Route path="/CreateCourse" element={<CreateCourse />} />
        <Route path="/UserCourses" element={<UserCourses />} />
        <Route path="/course_page/:userid/:course" element={<Course_page />} />
        <Route path="/TemplateCreator" element={<TemplateCreator/>} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
