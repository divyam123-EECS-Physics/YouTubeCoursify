import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'; 
import Box from '@mui/material/Box';
import Navbar from './Navbar';

export default function OptionsPage() {
    return (
        <Box>
            <Navbar title="Options" home="/" back="/" />
                <Stack spacing={2} direction="row" justifyContent="center" sx={{margin:"20px"}}>
                    <Link to="/UserCourses"><Button variant="contained" sx={{backgroundColor:"#4681f4"}}>My Created Courses</Button></Link>
                    <Link to="/EnrolledCourses"><Button variant="contained" sx={{backgroundColor:"#4681f4"}}>Enrolled Courses</Button></Link>
                    <Link to="/TemplateCreator"><Button variant="contained" sx={{backgroundColor:"#4681f4"}}>Create New Course</Button></Link>
                </Stack>
        </Box>
    )
}
    