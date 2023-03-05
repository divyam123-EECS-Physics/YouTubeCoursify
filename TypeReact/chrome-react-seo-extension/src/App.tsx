import React from 'react';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function App() {
  return (
    <div className="App">
      <header className="Extension Pop-Up">
      <Stack spacing={2} direction="column">
        <Button variant="contained">Options</Button>
        <Button variant="contained">Notes</Button>
        <FormControlLabel control={<Switch defaultChecked />} label="Study Mode" />
      </Stack>
      </header>
    </div>
  );
}

export default App;
