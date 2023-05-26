import React, { useState, useMemo, useEffect } from "react";
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

const Submissions = () => {
  const theme = useTheme();
  const [hover, setHover] = useState(false);
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const [prjName, setPrjName] = useState("");
  const [prjId, setPrjId] = useState("");
  const [prjMember, setPrjMember] = useState("");
  const [link, setLink] = useState("");

  const handlePrjNameChange = (e) => {
    setPrjName(e.target.value);
  };

  const handlePrjIdChange = (e) => {
    setPrjId(e.target.value);
  };

  const handlePrjMemberChange = (e) => {
    setPrjMember(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = () => {
    // handle submit here
  };

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="SUBMISSION" subtitle="Submit project link here" />
      </FlexBetween>

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
          label="Project ID"
          variant="outlined"
          fullWidth
          margin="normal"
          value={prjId}
          onChange={handlePrjIdChange}
        />
      </Box>

      <Box m="1rem 0">
        <TextField
          label="Project Member"
          variant="outlined"
          fullWidth
          margin="normal"
          value={prjMember}
          onChange={handlePrjMemberChange}
        />
      </Box>

      <Box m="1rem 0">
        <TextField
          required
          label="Link"
          variant="outlined"
          fullWidth
          margin="normal"
          value={link}
          onChange={handleLinkChange}
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
    </Box>
  );
};

export default Submissions;
