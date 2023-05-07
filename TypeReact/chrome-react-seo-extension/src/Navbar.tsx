import {Link} from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function Navbar(props:any) {
    return (
        <Box>
            <AppBar position="static" sx={{backgroundColor:"#4681f4", marginBottom: "50px"}}>
            <Toolbar>
            <Link to={props.back}>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <ArrowBackIcon sx={{color:"white"}} />
            </IconButton>
            </Link>
            <Link to={props.home} color="inherit">
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <HomeIcon sx={{color:"white"}} />
            </IconButton>
            </Link>
            <Typography variant="h6" component="div" align="left" sx={{ flexGrow: 1 }}>
            {props.title}
            </Typography>
            </Toolbar>
            </AppBar>
        </Box>
    )
}
    