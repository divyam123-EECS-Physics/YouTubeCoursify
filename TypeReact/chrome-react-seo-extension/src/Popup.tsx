import React from 'react';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import OptionsPage from './OptionsPage';
import {Link} from 'react-router-dom';
import $ from "jquery"; 



function Popup() {
      $.ajax({
        type:'GET',
        url: 'http://127.0.0.1:8000/simple_call/',
    })


  return (
    <div className="Pop-Up">
      <header className="Extension Pop-Up">
      <Stack spacing={2} direction="column">
        <Link to="/OptionsPage"><Button variant="contained">Options</Button></Link> 
        <Link to="/NotesPage"><Button variant="contained">Notes</Button></Link>
        
        <FormControlLabel control={<Switch defaultChecked />} label="Study Mode" />
      </Stack>
      </header>
    </div>
  );
}

export default Popup;
