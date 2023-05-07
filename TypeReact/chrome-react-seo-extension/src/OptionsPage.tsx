import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Link,useParams,useNavigate} from 'react-router-dom'; 

export default function OptionsPage() {
    const userId = useParams();
    console.log("userId",userId);
    return (
        <Stack spacing={2} direction="column">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Link to={"/CreatedCourses/" + userId['userid']}><Button variant="contained">My Created Courses</Button></Link>
            <Link to={"/EnrolledCourses/" + userId['userid']}><Button variant="contained">Enrolled Courses</Button></Link>
        </Stack>
    )
}
    