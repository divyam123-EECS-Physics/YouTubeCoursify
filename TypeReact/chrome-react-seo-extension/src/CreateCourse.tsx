import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'; 
import $ from "jquery"; 
import {useParams} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState,useEffect} from 'react';

type Props = {
    userid: string
    course_id: string
  };
  let csrfToken = '';
  export default function CreateCourse() {
    function createData(
        week: string,
        topic: string,
        video: string,
        reading_notes: string,
        assignment: string,
        quizzes: string
      ) {
        return {'week': week, 'topic': topic, 'video': video, 'reading_notes': reading_notes, 'assignment':assignment, 'quizzes':quizzes};
      }



      const {userid, course_id} = useParams<keyof Props>() as Props;
      console.log("userid", userid, "course", course_id);
      const [class_name, class_name_update] = useState('Class Name');
      const [description, description_update] = useState('Course Description');
      if (csrfToken == '') {
        $.ajax(
            {
                type: 'GET',
                url: 'http://127.0.0.1:8000/csrf/',
            }
        ).done(function(data) {
            csrfToken = data['csrfToken'];
            console.log('csrfToken', csrfToken);

        });
        $.ajaxSetup({
            headers: {
                "X-CSRFToken": csrfToken
            }
        });
    }  


    useEffect(() => {
      console.log("INSIDE USEEFFECT");
      $.ajax(
      {
          type: 'GET',
          url: 'http://127.0.0.1:8000/get_modules',
          data: { course_id: course_id,
                  csrfmiddlewaretoken: csrfToken,
                }
      }).done(function(data) {
          description_update(data['description']);
          class_name_update(data['course_name']);
          let modules = [createData('', '', '', '', '', '')]
          let i = 0;

          while (i < data['weeks_array'].length) {
              // let course_obj = new course(data['courses'][i], url + data['courses'][i]);
              // courseList.push(new course(data['courses'][i], url + data['courses'][i]));
              // courseList_function([...courseList, {name: data['courses'][i], url: url + data['courses'][i]}]);
              modules.push(createData(data['weeks_array'][i], data['topics_array'][i], data['videos_array'][i], data['notes_links_array'][i], data['assignment_links_array'][i], data['quiz_links_array'][i]));
              i++;
          }
          setRows(modules.slice(1));


      });}, []);
      
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
    
      function update_class_name(event: React.ChangeEvent<HTMLInputElement>) {
        class_name_update(event.target.value);
      };
      function update_class_description(event: React.ChangeEvent<HTMLInputElement>) {
        description_update(event.target.value);
      };
  
    
      const handleAddRow = () => {
        setRows((prevRows) => [...prevRows, createData(week_number, topic_, video_url, reading_notes_, assignment_,  quizzes_ )]);
        $.ajax(
          {
              type: 'POST',
              url: 'http://127.0.0.1:8000/add_module/',
              data: { course_id: course_id,
                      week: week_number,
                      topics: topic_,
                      video: video_url,
                      notes: reading_notes_,
                      assignment: assignment_,
                      quiz: quizzes_,
                      csrfmiddlewaretoken: csrfToken,
                    }
          })
      
      
      };
      
      function save_title_description() {
        $.ajax(
          {
              type: 'POST',
              url: 'http://127.0.0.1:8000/modify_course/',
              data: { action: 'title_description',
                      course_id: course_id,
                      course_name: class_name,
                      description: description,
                      csrfmiddlewaretoken: csrfToken,
                    }
          })
      };
      const deleteRow = () => {
        const temp = [...rows];
        temp.splice(-1);
        setRows(temp);
      };

      return (<>
            <Typography variant="h3" gutterBottom>{class_name}</Typography>
            <TextField id = "class_name_input" label = 'classname' value = {class_name} onChange = {update_class_name}/>
            <Button variant="contained" size="small" onClick={save_title_description}>
                Save Title
            </Button>
            <Typography variant="h3" gutterBottom>{description}</Typography>
            <TextField id = "description_input" label = 'description' value = {description} onChange = {update_class_description}/>
            <Button variant="contained" size="small" onClick={save_title_description}>
                Save Description
            </Button>
        
            <Stack direction="row" spacing={1} sx={{mt: 5}}>
                <TextField id = "week_input" label = 'Week' value = {week_number} onChange = {update_week_number}/>
                <TextField id = "topic_input" label = 'Topic' value = {topic_} onChange = {update_topic}/>
                <TextField id = "week_input" label = 'Video' value = {video_url} onChange = {update_video_url}/>
                <TextField id = "topic_input" label = 'Reading Notes' value = {reading_notes_} onChange = {update_reading_notes}/>
                <TextField id = "assignment_input" label = 'Assignment' value = {assignment_} onChange = {update_assignment}/>
                <TextField id = "assignment_input" label = 'Quiz' value = {quizzes_} onChange = {update_quizzes}/>
                {/* //TODO: clear text field once row is */}
                <Button variant="contained" size="small" onClick={handleAddRow}>
                Add row
                </Button>
                <Button variant="contained" size="small" onClick={deleteRow}>
                Delete Row 
                </Button>
            </Stack>


            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 450 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Week </TableCell>
                    <TableCell align="right">Topic</TableCell>
                    <TableCell align="right">Video</TableCell>
                    <TableCell>Reading Notes </TableCell>
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
      )
}
    