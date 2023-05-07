import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useNavigate, Link} from 'react-router-dom'; 
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import $ from "jquery"; 
import Navbar from './Navbar';

let courses  = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let csrfToken = '';
export default function CreateUser() {
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

    const [user_details, user_details_function] = useState(['', '', '']);
    function update_name(event: React.ChangeEvent<HTMLInputElement>) {
        user_details_function([event.target.value, user_details[1], user_details[2]]);
    };
    function update_email(event: React.ChangeEvent<HTMLInputElement>) {
        user_details_function([user_details[0], event.target.value, user_details[2]]);
    };
    function update_pwd(event: React.ChangeEvent<HTMLInputElement>) {
        user_details_function([user_details[0], user_details[1], event.target.value]);
    };

    function update_details() {
        
        console.log('csrfToken', csrfToken);
        $.ajax(
            {
                type: 'POST',
                url: 'http://127.0.0.1:8000/add_user/',
                data: { user_name: user_details[0],
                        email: user_details[1],
                        password: user_details[2],
                        csrfmiddlewaretoken: csrfToken
                      }
                
            }
        ).done(function(data) {
            csrfToken = data['token'];
            console.log('token', csrfToken);
            navigate("/Login");

        }); 
    };
    return (
        <>
            <Navbar title="Create User" home="/" back="/" />
            <Stack spacing={2} direction="column" sx={{m:'20px'}}>
                <TextField id = "name_input" label = 'Username' defaultValue="name" value = {user_details[0]} onChange = {update_name} sx={{ width:"290px"}}/>
                <TextField id = "pwd_input" label = 'Password' defaultValue="pwd" value = {user_details[1]} onChange = {update_pwd} sx={{ width:"290px"}}/>
                <Button onClick={update_details} variant="contained" sx={{ width:"90px", backgroundColor:"#4681f4"}}>Submit</Button>
            </Stack>
        </>

    )
}
    