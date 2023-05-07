import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

export default function NotesPage() {
    return (
        <>
        <Navbar title="Notes" home="/" back= "/OptionsPage" />
        <Stack>
           <Button variant="contained" sx={{backgroundColor:"#4681f4"}}>HULLO</Button>
        </Stack>
        </>
    )
}
    