import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useNavigate,useParams} from 'react-router-dom'; 
import Typography from '@mui/material/Typography';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import $ from "jquery"; 
let courses  = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let csrfToken = '';
let user_id = '';
export default function CreatedCourses() {
    const userId = useParams();
    console.log("userId", userId);

    class course {
        name: string;
        url: string;
        constructor(name: string, url: string) {
            this.name = name;
            this.url = url;
        }
    };

    // let courses: course[] = [];
    // let courseList: course[] = [];
    let [courseList, courseList_function] = useState([{name:'', url:''}])
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
    useEffect(() => {$.ajax(
            {
                type: 'GET',
                url: 'http://127.0.0.1:8000/get_created_courses/',
                data: { creator_id: userId['userid'],
                        csrfmiddlewaretoken: csrfToken
                      }
            }
        ).done(function(data) {
            const course_name = "";
            const url = '/CreatedCourseTemplate/' + userId['userid'] + '/';
            let i = 0;
            console.log(data);
            // courseList_function(courseList => [...courseList, {name: data['courses'][i], url: url + data['courses'][i]}]);
            let courses = [{name:'', url:''}]
            while (i < data['courses'].length) {
                // let course_obj = new course(data['courses'][i], url + data['courses'][i]);
                // courseList.push(new course(data['courses'][i], url + data['courses'][i]));
                // courseList_function([...courseList, {name: data['courses'][i], url: url + data['courses'][i]}]);
                courses.push({name: data['courses'][i][1], url: url + data['courses'][i][0]});

                i++;
            }
            courseList_function(courses.slice(1));
            // console.log(typeof(data['courses'][0]));
            // return courses;
        });}, []);
        // return courses;

    // const [courseList, courseList_function] = useState(initialize());
    // courseList = initialize();
    return (
        <>
            <Typography variant="h2" sx= {{paddingBottom: 3, margin: 1}}>Create Courses</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                {courseList.map((course_obj) => 
                    // TODO: FIX MARGINS AND WIDTH
                    // *textDecor= none gets rids of underline from text
                    <Link to={course_obj.url} style={{ textDecoration: 'none' }}>
                        <Card  sx= {{margin: 1.5, width: 200, height: 120}}>
                            <CardActionArea>
                                <CardContent>
                                    <CardHeader sx={{paddingTop:0}} title= {course_obj.name} /> 
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {course_obj.url}
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
    