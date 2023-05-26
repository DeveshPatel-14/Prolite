import React, { useState, useMemo, useEffect, useContext } from "react";
import {
  DataGrid,
  gridClasses
} from "@mui/x-data-grid";
import { useGetSubmissionQuery } from "state/api";
import FlexBetween from "components/FlexBetween";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import {
  Box,
  Button,
  useTheme, 
  useMediaQuery,
  TextField
} from "@mui/material";

import Header from "components/Header";
import groupmanageContext from "../../context/GroupManage/groupmanageContext.js"


const GroupManages = () => {
  const theme = useTheme();
  const [hover, setHover] = useState(false);
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const context = useContext(groupmanageContext);
  const {addGroup} = context;

  const [prjName, setPrjName] = useState("");
  const [prjMember1, setPrjMember1] = useState("");
  const [prjMember2, setPrjMember2] = useState("");
  const [prjMember3, setPrjMember3] = useState("");
  const [prjMember4, setPrjMember4] = useState("");


  const handlePrjNameChange = (e) => {
    setPrjName(e.target.value);
  };

  const handlePrjMember1Change = (e) => {
    setPrjMember1(e.target.value);
  };

  const handlePrjMember2Change = (e) => {
    setPrjMember2(e.target.value);
  };

  const handlePrjMember3Change = (e) => {
    setPrjMember3(e.target.value);
  };

  const handlePrjMember4Change = (e) => {
    setPrjMember4(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    addGroup(prjName,prjMember1,prjMember2,prjMember3,prjMember4);

  };

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="GROUP SUBMISSION" subtitle="Enter your group details here" />
      </FlexBetween>
    <form onSubmit={handleSubmit}>
      <Box m="1rem 0">
        <TextField
          label="Project Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={prjName}
          onChange={handlePrjNameChange}
        />
      </Box>

      <Box m="1rem 0">
        <TextField
          label="Project Member 1"
          variant="outlined"
          fullWidth
          margin="normal"
          value={prjMember1}
          onChange={handlePrjMember1Change}
        />
      </Box>

      <Box m="1rem 0">
        <TextField
          label="Project Member 2"
          variant="outlined"
          fullWidth
          margin="normal"
          value={prjMember2}
          onChange={handlePrjMember2Change}
        />
      </Box>

      <Box m="1rem 0">
        <TextField
          label="Project Member 3"
          variant="outlined"
          fullWidth
          margin="normal"
          value={prjMember3}
          onChange={handlePrjMember3Change}
        />
      </Box>

      <Box m="1rem 0">
        <TextField
          label="Project Member 4"
          variant="outlined"
          fullWidth
          margin="normal"
          value={prjMember4}
          onChange={handlePrjMember4Change}
        />
      </Box>

      

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

export default GroupManages;
