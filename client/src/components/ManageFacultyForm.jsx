import React, { useState, useContext } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Box, useTheme } from '@mui/material';

import managefacultyContext from "../context/ManageFaculty/managefacultyContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const MyForm = () => {
  const theme = useTheme();
  const [hover, setHover] = useState(false);

  const context = useContext(managefacultyContext);
  const {addfaculty} = context;

  const [teacherName, setTeacherName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addfaculty(teacherName);
    toast.success('Faculty Added Successfully !', {
      position: toast.TOP_CENTER
  });
    // Your code to submit the form goes here
  };

  return (
    <Box sx={{ m: 1 }}>
      <form onSubmit={handleSubmit}>
        
        <TextField
          required
          fullWidth
          margin="normal"
          label="Teacher Name"
          variant="outlined"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
        />

        
        
        <Button variant="contained" type="submit" className='createbtn'
                   onMouseEnter={()=>{
        setHover(true);
      }}
      onMouseLeave={()=>{ 
        setHover(false);
      }}
      style={{
        ...(hover ? {background: theme.palette.secondary[400]} : null)
      }}
        sx={{
              backgroundColor: theme.palette.secondary[300],
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}>
          Submit
        </Button>
      </form>
      <ToastContainer />
    </Box>
  );
};

export default MyForm;
