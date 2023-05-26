import React, { useState ,useEffect, useContext} from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Box, useTheme } from '@mui/material';
import managefacultyContext from "../context/ManageFaculty/managefacultyContext"

const EditFaculty = ({ teacherId, teacherName }) => {
  const theme = useTheme();
  const [hover, setHover] = useState(false);

  const context = useContext(managefacultyContext);
  const {editFaculty} = context;
  
  const [editedTeacherId, setEditedTeacherId] = useState('');
  const [editedTeacherName, setEditedTeacherName] = useState('');

  useEffect(() => {
    setEditedTeacherId(teacherId);
    setEditedTeacherName(teacherName);
  }, [teacherId, teacherName]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your code to submit the form goes here

    editFaculty(editedTeacherId,editedTeacherName);

  };

  return (
    <Box sx={{ m: 1 }}>
      <form onSubmit={handleSubmit}>
        
            <TextField
            required
            fullWidth
            margin="normal"
            label="Teacher ID"
            variant="outlined"
            value={editedTeacherId}
            onChange={(e) => setEditedTeacherId(e.target.value)}
            />
            <TextField
            required
            fullWidth
            margin="normal"
            label="Teacher Name"
            variant="outlined"
            value={editedTeacherName}
            onChange={(e) => setEditedTeacherName(e.target.value)}
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
    </Box>
  );
};

export default EditFaculty;
