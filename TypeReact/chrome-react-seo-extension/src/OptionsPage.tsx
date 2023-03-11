import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'; 

export default function OptionsPage() {
    return (
        <Stack spacing={2} direction="column">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Link to="/UserCourses"><Button variant="contained">My Created Courses</Button></Link>
            <Link to="/CreatedCourses"><Button variant="contained">Enrolled Courses</Button></Link>
        </Stack>
    )
}
    