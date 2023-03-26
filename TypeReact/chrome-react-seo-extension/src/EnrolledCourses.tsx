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

export default function EnrolledCourses() {
    const courseList = [
        {name:"Bailey Sok"},
        {name:"Bam Martin"},
        {name:"Chris Martin"},
        {name:"Nick Joseph"},
        {name:"Kyle Hanagami"},
        {name:"Koharu"},
        
    ];
    const path = "/OptionsPage";
    
    return (
        <>
            <Typography variant="h2" sx= {{paddingBottom: 3, margin: 1}}>Enrolled Courses</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>

                {courseList.map((course) => 
                    // TODO: change path name
                    // *textDecor= none gets rids of underline from text
                    <Link to={path} style={{ textDecoration: 'none' }}>
                        <Card variant="outlined" sx= {{padding: 1, margin: 1}}>
                            {/* //! this makes the whole card clickable */}
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant="h5" color="text.secondary" gutterBottom>
                                    {course.name}
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