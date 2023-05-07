import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'; 
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Navbar from './Navbar';

export default function EnrolledCourses() {
    
    const courseList = [
        {name:"Kyle Hand", description: "build a foundation"},
        {name:"Konohamaru", description: "understand body-awareness"},
        {name:"Bam Martian", description: "improve footwork"},
        {name:"Bailey Socks", description: "timing and control"},
        {name:"Joseph", description: "add power"},
        {name:"Chris Martian", description: "develop musicality"},        
    ];

    const path = "/OptionsPage";
    
    return (
        <>
            <Navbar title="Enrolled Courses" home="/" back="/OptionsPage" />
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>

                {courseList.map((course) => 
                    // *textDecor= none gets rids of underline from text
                    <Link to={path} style={{ textDecoration: 'none' }}>
                        <Card  sx= {{margin: 1.5, width: 300, height: 220}}>
                            <CardActionArea>
                                <CardContent>
                                    <CardHeader sx={{paddingTop:0}} title= {course.name} /> 
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {course.description}
                                    </Typography>   
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                )}
            </Box>
        </>
    )
}