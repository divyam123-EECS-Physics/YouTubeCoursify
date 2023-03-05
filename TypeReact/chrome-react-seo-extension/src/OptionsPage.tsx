import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function OptionsPage() {
    return (
        <Stack spacing={2} direction="column">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">My Created Courses</Button>
            <Button variant="contained">Enrolled Courses</Button>
        </Stack>
    )
}
    