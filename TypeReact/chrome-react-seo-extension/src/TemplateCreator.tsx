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
import Stack from '@mui/material/Stack';
import Navbar from './Navbar';
import Grid from '@mui/material/Grid';


function BasicTable() {
  function createData(
    week: string,
    topic: string,
    video: string,
    reading_notes: string,
    assignment: string,
    quizzes: string
  ) {
    return {week, topic, video, reading_notes, assignment, quizzes};
  }
  
  const [rows, setRows] = React.useState(() => [
    createData("Week 0", 'Intro', 'some_url', 'read notes', 'problem set', 'google forms quiz')
  ]);

  const [week_number, week_number_update] = useState('');
  const [topic_, topic_update] = useState('');
  const [assignment_, assignment_update] = useState('');
  const [video_url, video_url_update] = useState('');
  const [reading_notes_, reading_notes_update] = useState('');
  const [quizzes_, quizzes_update] = useState('');

  function update_week_number(event: React.ChangeEvent<HTMLInputElement>) {
    week_number_update(event.target.value);
  };

  function update_topic(event: React.ChangeEvent<HTMLInputElement>) {
    topic_update(event.target.value);
  };

  function update_assignment(event: React.ChangeEvent<HTMLInputElement>) {
    assignment_update(event.target.value);
  };

  function update_video_url(event: React.ChangeEvent<HTMLInputElement>) {
    video_url_update(event.target.value);
  };

  function update_reading_notes(event: React.ChangeEvent<HTMLInputElement>) {
    reading_notes_update(event.target.value);
  };

  function update_quizzes(event: React.ChangeEvent<HTMLInputElement>) {
    quizzes_update(event.target.value);
  };


  const handleAddRow = () => {
    setRows((prevRows) => [...prevRows, createData(week_number, topic_, video_url, reading_notes_, assignment_,  quizzes_ )]);
    week_number_update('');
    topic_update('');
    assignment_update('');
    video_url_update('');
    reading_notes_update('');
    reading_notes_update('');
    quizzes_update('');
  };


  const deleteRow = () => {
    const temp = [...rows];
    temp.splice(-1);
    setRows(temp);
  };

  return (
    <>
      <Stack direction="row" justifyContent="center" spacing={1} sx={{m: 2}}>
        <TextField id = "week_input" label = 'Week' value = {week_number} onChange = {update_week_number}/>
        <TextField id = "topic_input" label = 'Topic' value = {topic_} onChange = {update_topic}/>
        <TextField id = "week_input" label = 'Video' value = {video_url} onChange = {update_video_url}/>
        <TextField id = "topic_input" label = 'Reading Notes' value = {reading_notes_} onChange = {update_reading_notes}/>
        <TextField id = "assignment_input" label = 'Assignment' value = {assignment_} onChange = {update_assignment}/>
        <TextField id = "assignment_input" label = 'Quiz' value = {quizzes_} onChange = {update_quizzes}/>
        <Button variant="contained" size="small" onClick={handleAddRow} sx={{backgroundColor:"#4681f4"}}>
          Add row
        </Button>
        <Button variant="contained" size="small" onClick={deleteRow} sx={{backgroundColor:"#4681f4"}}>
          Delete Row 
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Week </TableCell>
              <TableCell align="right">Topic</TableCell>
              <TableCell align="right">Video</TableCell>
              <TableCell align="right">Reading Notes </TableCell>
              <TableCell align="right">Assignment</TableCell>
              <TableCell align="right">Quiz</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow 
                key={row.week}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{row.week}</TableCell>
                <TableCell align="right">{row.topic}</TableCell>
                <TableCell align="right">{row.video}</TableCell>
                <TableCell align="right">{row.reading_notes}</TableCell>
                <TableCell align="right">{row.assignment}</TableCell>
                <TableCell align="right">{row.quizzes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}


export default function TemplateCreator() { 
    const [class_name, class_name_update] = useState('Course Name');

    const [description, description_update] = useState('Course Description');


    
    function update_class_name(event: React.ChangeEvent<HTMLInputElement>) {
      class_name_update(event.target.value);
    };

    function update_class_description(event: React.ChangeEvent<HTMLInputElement>) {
      description_update(event.target.value);
    };

    return (
        <>
            <Navbar title="Course Template" home="/" back="/OptionsPage" />
            <Grid container spacing={7} justifyContent="center">
              <Grid item >
                <Typography variant="h4" gutterBottom>{class_name}</Typography>
                <TextField id = "class_name_input" label = 'Course Name' value = {class_name} onChange = {update_class_name} sx={{width:'300px'}}/>
              </Grid>
              <Grid item>
                <Typography variant="h4" gutterBottom>{description}</Typography>
              <TextField id = "description_input" label = 'Course Description' value = {description} onChange = {update_class_description} sx={{width:'300px'}}/>
            
              </Grid>
            </Grid>
            <Grid container justifyContent="center" sx={{width:'95%', marginTop:'50px'}}>
              <Grid item >
                <BasicTable />
              </Grid>
            </Grid>
             
            
            
        </>
    )
}