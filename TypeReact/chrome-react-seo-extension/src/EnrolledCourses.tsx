import {Link} from 'react-router-dom'; 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Navbar from './Navbar';


export default function EnrolledCourses() {
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
    }
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
    