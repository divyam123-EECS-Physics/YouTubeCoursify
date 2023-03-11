import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'; 
import {useState} from 'react';
import $ from "jquery"; 
import { TableBody } from '@mui/material';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

let courses  = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let csrfToken = '';

export default function UserCourses() {
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

    const [user_details, user_details_function] = useState('');
    const [user_list, user_list_function] = useState([]);
    
    function update_name(event: React.ChangeEvent<HTMLInputElement>) {
        user_details_function(event.target.value);
    };
    
    function get_user_courses() {
        
        $.ajax(
            {
                type: 'GET',
                url: 'http://127.0.0.1:8000/get_courses/',
                data: { creator_name: user_details,
                        csrfmiddlewaretoken: csrfToken
                      }
                
            }
        ).done(function(data) {
            console.log("COURSES LIST FOR UESR", data['courses']);
            user_list_function(data['courses']);
        });
    };

    return (
        <div>
            <Stack spacing={2} direction="column">
                <TextField id = "name_input" label = 'username' defaultValue="name" value = {user_details} onChange = {update_name}/>
                <Button onClick={get_user_courses} variant="contained">submit</Button>
            </Stack>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Course name</TableCell>
                        <TableCell align="right">Course Links</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user_list.map((course) => (
                        <TableRow key={course} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{course}</TableCell>
                            <TableCell align="right">
                                <Link to={"/course_page"+"/"+{user_details}+"/" + course}>
                                    <Button variant="contained">Link to {course}</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
        </div>
    )
}
    