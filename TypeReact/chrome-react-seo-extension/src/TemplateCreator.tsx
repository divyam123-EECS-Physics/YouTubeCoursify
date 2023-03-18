import * as React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid, GridToolbarContainer, useGridApiRef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// TODO: need to connect this page from a main page
// TODO: add vertical lines???
function BasicTable() {
  function createData(
    week: string,
    topic: string,
    assignment: string
  ) {
    return {week, topic, assignment};
  }
  
  // TODO: fix the create data placeholder
  const [rows, setRows] = React.useState(() => [
    createData("Week 0", 'Intro', 'Set-Up')
  ]);

  const [week_number, week_number_update] = useState('');
  const [topic_, topic_update] = useState('');
  const [assignment_, assignment_update] = useState('');

  function update_week_number(event: React.ChangeEvent<HTMLInputElement>) {
    week_number_update(event.target.value);
  };

  function update_topic(event: React.ChangeEvent<HTMLInputElement>) {
    topic_update(event.target.value);
  };

  function update_assignment(event: React.ChangeEvent<HTMLInputElement>) {
    assignment_update(event.target.value);
  };

  const handleAddRow = () => {
    setRows((prevRows) => [...prevRows, createData(week_number, topic_, assignment_ )]);
  };


  const deleteRow = () => {
    const temp = [...rows];
    temp.splice(-1);
    setRows(temp);
  };

  return (
    <>
      <Stack direction="row" spacing={1} sx={{mt: 5}}>
        <TextField id = "week_input" label = 'Week' value = {week_number} onChange = {update_week_number}/>
        <TextField id = "topic_input" label = 'Topic' value = {topic_} onChange = {update_topic}/>
        <TextField id = "assignment_input" label = 'Assignment' value = {assignment_} onChange = {update_assignment}/>
        {/* //TODO: clear text field once row is */}
        <Button variant="contained" size="small" onClick={handleAddRow}>
          Add row
        </Button>
        <Button variant="contained" size="small" onClick={deleteRow}>
          Delete Row 
        </Button>
      </Stack>
      {/* //TODO: fix spacing on here*/}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Week </TableCell>
              <TableCell align="right">Topic</TableCell>
              <TableCell align="right">Assignment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow 
                key={row.week}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{row.week}</TableCell>
                <TableCell align="right">{row.topic}</TableCell>
                <TableCell align="right">{row.assignment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}


export default function TemplateCreator() { 
    const [class_name, class_name_update] = useState('Class Name');
    const [description, description_update] = useState('Course Description');

    function update_class_name(event: React.ChangeEvent<HTMLInputElement>) {
      class_name_update(event.target.value);
    };
    function update_class_description(event: React.ChangeEvent<HTMLInputElement>) {
      description_update(event.target.value);
    };

    return (
        <>
            <Typography variant="h3" gutterBottom>{class_name}</Typography>
            <TextField id = "class_name_input" label = 'classname' value = {class_name} onChange = {update_class_name}/>
            <Typography variant="h3" gutterBottom>{description}</Typography>
            <TextField id = "description_input" label = 'description' value = {description} onChange = {update_class_description}/>
            <BasicTable />
        </>
    )
}


