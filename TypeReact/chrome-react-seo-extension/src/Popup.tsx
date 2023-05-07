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
import { Typography } from '@mui/material';
import Navbar from './Navbar';



function Popup() {
      $.ajax({
        type:'GET',
        url: 'http://127.0.0.1:8000/simple_call/',
    })


  return (
    <div className="Pop-Up">
      <header className="Extension Pop-Up">
      <Navbar title="YouTube Coursify" home="/" back="/"/>
      <Stack spacing={2} direction="row" justifyContent="center" sx={{margin:"20px"}}>
        <Link to="/OptionsPage"><Button variant="contained" sx={{backgroundColor:"#4681f4"}}>Options</Button></Link> 
        <Link to="/NotesPage"><Button variant="contained" sx={{backgroundColor:"#4681f4"}}>Notes</Button></Link>
        {/* //*TODO change color of switch */}
        <FormControlLabel control={<Switch defaultChecked  sx={{color:"#4681f4"}}/>} label="Study Mode"  />
      </Stack>
      </header>
    </div>
  );
}

export default Popup;
