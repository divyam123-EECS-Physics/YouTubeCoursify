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
        {name:"Kyle Hanagami", description: "build a foundation"},
        {name:"Koharu", description: "understanding body-awareness"},
        {name:"Bam Martin", description: "improve footwork"},
        {name:"Bailey Sok", description: "timing and control"},
        {name:"Nick Joseph", description: "add power"},
        {name:"Chris Martin", description: "develop musicality"},        
    ];

    // TODO: change path name
    const path = "/OptionsPage";
    
    return (
        <>
            <Typography variant="h2" sx= {{paddingBottom: 3, margin: 1}}>Enrolled Courses</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>

                {courseList.map((course) => 
                    
                    // *textDecor= none gets rids of underline from text
                    <Link to={path} style={{ textDecoration: 'none' }}>
                        <Card variant="outlined" sx= {{padding: 1, margin: 1.5, width: 200, height: 120}}>
                            {/* //! this makes the whole card clickable */}
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant="h6" color="text.primary" gutterBottom>
                                    {course.name}
                                    </Typography> 
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