import * as React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState} from 'react';
import TextField from '@mui/material/TextField';

function BasicTable() {

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Week </TableCell>
            <TableCell align="right">Topic</TableCell>
            <TableCell align="right">Course Materials</TableCell>
            <TableCell align="right">Assignments</TableCell>
            <TableCell align="right">Tests</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default function TemplateCreator() { 
    const [class_name, class_name_update] = useState('Class Name');
    const [description, description_update] = useState('Course Description');

    function update_class_name(event: React.ChangeEvent<HTMLInputElement>) {
      class_name_update(event.target.value);
    };
    function update_class_description(event: React.ChangeEvent<HTMLInputElement>) {
      description_update(event.target.value);
    };

    return (
        <>
            <Typography variant="h3" gutterBottom>{class_name}</Typography>
            <TextField id = "class_name_input" label = 'classname' value = {class_name} onChange = {update_class_name}/>
            <Typography variant="h3" gutterBottom>{description}</Typography>
            <TextField id = "description_input" label = 'description' value = {description} onChange = {update_class_description}/>
            <BasicTable />
        </>
    )
    
}