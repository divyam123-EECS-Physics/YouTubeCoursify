import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useNavigate,useParams} from 'react-router-dom'; 
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import $ from "jquery"; 
let courses  = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let csrfToken = '';
let user_id = '';
export default function EnrolledCourses() {
    const userId = useParams();
    console.log("userId", userId);
    let navigate = useNavigate();
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

    
    return (
        <><Typography variant="h3" gutterBottom>Enrolled Courses {userId['userid']}</Typography></>
    )
}
    