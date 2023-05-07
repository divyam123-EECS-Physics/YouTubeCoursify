import * as React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid, GridToolbarContainer, useGridApiRef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import { stringify } from 'querystring';
import $ from "jquery"; 

type Props = {
  userid: string
  course_id: string
};
let csrfToken = '';

export default function EnrolledCourse() { 

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


      const [rows, setRows] = React.useState(() => [
        createData('', '', '', '', '', '')
      ]);


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
      
      function update_class_name(event: React.ChangeEvent<HTMLInputElement>) {
        class_name_update(event.target.value);
      };
      function update_class_description(event: React.ChangeEvent<HTMLInputElement>) {
        description_update(event.target.value);
      };

      return (<>
            <Typography variant="h3" gutterBottom>{class_name}</Typography>
            <Typography variant="h3" gutterBottom>{description}</Typography>
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