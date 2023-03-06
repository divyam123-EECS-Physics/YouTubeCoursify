import React from 'react';
import './App.css';
import OptionsPage from './OptionsPage';
import { Route, Routes } from 'react-router-dom';
import Popup from './Popup';
import NotesPage from './NotesPage';


function App() {
  return (
    <div className="App">
      <header className="Extension Pop-Up">
      <Routes>
        {/* TODO: Link Notes page */}
        <Route path="/" element={<Popup />} />
        <Route path="/OptionsPage" element={<OptionsPage />} />
        <Route path="/NotesPage" element={<NotesPage />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
