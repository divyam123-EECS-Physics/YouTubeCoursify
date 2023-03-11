import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'; 
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import $ from "jquery"; 

let courses  = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let csrfToken = '';
export default function CreateUser() {
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

    const [user_details, user_details_function] = useState(['', '']);
    function update_name(event: React.ChangeEvent<HTMLInputElement>) {
        user_details_function([event.target.value, user_details[1]]);
    };
    function update_pwd(event: React.ChangeEvent<HTMLInputElement>) {
        user_details_function([user_details[0], event.target.value]);
    };

    function update_details() {
        
        console.log('csrfToken', csrfToken);
        $.ajax(
            {
                type: 'POST',
                url: 'http://127.0.0.1:8000/add_user/',
                data: { name: user_details[0],
                        pwd: user_details[1],
                        csrfmiddlewaretoken: csrfToken
                      }
                
            }
        ); 
    };
    return (
        <Stack spacing={2} direction="column">
            <TextField id = "name_input" label = 'username' defaultValue="name" value = {user_details[0]} onChange = {update_name}/>
            <TextField id = "pwd_input" label = 'password' defaultValue="pwd" value = {user_details[1]} onChange = {update_pwd}/>
            <Button onClick={update_details} variant="contained">submit</Button>
        </Stack>
    )
}
    