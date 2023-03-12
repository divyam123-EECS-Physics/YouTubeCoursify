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
import Button from '@mui/material/Button';
import { DataGrid, GridToolbarContainer, useGridApiContext } from '@mui/x-data-grid';


import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


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
  <>
    <Button onClick={() => {
    alert('clicked');
  }} variant="contained">Add Row</Button>
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
    </>
  );
}





const columns = [
  { field: 'id' },
  { field: 'username', width: 150 },
  { field: 'age', width: 80, type: 'number' },
];

let idCounter = 0;
const createRandomRow = () => {
  idCounter += 1;
  return { id: idCounter, username: "mads", age: 20 };
};

const rows = [
  createRandomRow(),
  createRandomRow(),
  createRandomRow(),
  createRandomRow(),
];

function CourseGrid() {
  const apiRef = useGridApiRef();

  const handleUpdateRow = () => {
    const rowIds = apiRef.current.getAllRowIds();
    const rowId = 1;
    apiRef.current.updateRows([{ id: rowId, username:"mads"}]);
  };

  const handleUpdateAllRows = () => {
  //   const rowIds = apiRef.current.getAllRowIds();
  //   apiRef.current.updateRows(
  //     rowIds.map((rowId) => ({ id: 1, username: "mads" })),
  //   );
  };

  // const handleDeleteRow = () => {
  //   const rowIds = apiRef.current.getAllRowIds();
  //   const rowId = 1;

  //   apiRef.current.updateRows([{ id: rowId, _action: 'delete' }]);
  // };

  const handleAddRow = () => {
    apiRef.current.updateRows([createRandomRow()]);
  };

   {/* TODO: handle update functions*/}
  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="row" spacing={1}>
       
        <Button size="small" onClick={() => {alert('update a row');}}>
          Update a row</Button>
        
        <Button size="small" onClick={() => {alert('update all rows');}}>
          Update all rows </Button>

        <Button size="small" onClick={() => {alert('delete a row');}}>
          Delete a row</Button>

        <Button size="small" onClick={handleAddRow}>
          Add a row </Button>

      </Stack>
      <Box sx={{ height: 400, mt: 1 }}>
        <DataGrid apiRef={apiRef} rows={rows} columns={columns} />
      </Box>
    </Box>
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
            <CourseGrid />
        </>
    )
    
}


