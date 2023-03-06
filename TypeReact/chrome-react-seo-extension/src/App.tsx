import React from 'react';
import './App.css';
import OptionsPage from './OptionsPage';
import { Route, Routes } from 'react-router-dom';
import Popup from './Popup';
import NotesPage from './NotesPage';
import Template from './Template';


function App() {
  return (
    <div className="App">
      <header className="Extension Pop-Up">
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/OptionsPage" element={<OptionsPage />} />
        <Route path="/NotesPage" element={<NotesPage />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
