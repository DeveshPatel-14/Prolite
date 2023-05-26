import React, {useContext, useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Box, useTheme } from '@mui/material';
import announcementContext from "../context/Announcement/announcementContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const MyForm = () => {

  const context = useContext(announcementContext);
  const {addAnnouncement} = context;

  const theme = useTheme();
  const [hover, setHover] = useState(false);

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

  const [announcement, setAnnouncement] = useState({Title:"",Name:"",Email:"",Message:""});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your code to submit the form goes here

    setAnnouncement({Title:title,Name:name,Email:email,Message:message});
    addAnnouncement(title,name,email,message);

    setAnnouncement({Title:"",Name:"",Email:"",Message:""});

    toast.success('Success !', {
      position: toast.TOP_CENTER
  });

  };



  return (
    <Box sx={{ m: 1 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          margin="normal"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}


        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Message"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button  variant="contained" type="submit" className='createbtn'
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
            }} >
          Submit
        </Button>
      </form>
      <ToastContainer />
    </Box>
  );
};

export default MyForm;
