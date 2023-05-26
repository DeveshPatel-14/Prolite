import React,{useState, useMemo, useEffect} from 'react';
import { DataGrid , gridClasses} from '@mui/x-data-grid';
import { useGetAssignPanelsQuery } from 'state/api';
import FlexBetween from 'components/FlexBetween';
import DataGridCustomToolbar from 'components/DataGridCustomToolbar';
import {Box,
     Button,
     useTheme,
     useMediaQuery,
    } from "@mui/material";
import Header from 'components/Header';
import Popup from 'components/Popup';
import Form from 'components/ManageFacultyForm';

const AssignPanels = () => {
  const theme = useTheme();
  const [hover, setHover] = useState(false);
  const isNonMobile = useMediaQuery("(min-width: 1000px");

    //value to be sent to the backend
    const [openPopup, setOpenPopup] = useState(false);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");
  
    const [searchInput, setSearchInput] = useState("");
    const {data, isLoading} = useGetAssignPanelsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search,
    });

    const onButtonClick = (e, row) => {
      e.stopPropagation();
      //do whatever you want with the row
  };
  

    const columns = [
        // {
        //     field:"_id",
        //     headerName:"ID",
        //     flex:1,
        // },
        // {
        //     field:"prjId",
        //     headerName:"PrjId",
        //     flex:1,
        // },
        {
            field:"prjName",
            headerName:"PrjName",
            flex:1,
            editable:true,
        },
        {
            field:"prjLeaderName",
            headerName:"PrjLeader",
            flex:1,
            editable:true,
        },
        // {
        //     field:"teacherId",
        //     headerName:"TeacherId",
        //     flex:1,
        // },
        {
            field:"teacherName",
            headerName:"TeacherName",
            flex:1,
            editable:true,
        },
        {
            field:"prjStatus",
            headerName:"Status",
            flex:1,
            editable:true,
        },
        
        {
            field:"prjType",
            headerName:"Type",
            flex:0.5,
            editable:true,
        }, 
        {
           field:"actions",
           headerName:"Actions",
           type:"actions",
           flex: 2,
           renderCell: (params) => {
            return (
              <FlexBetween>
                  <Button
                onClick={(e) => onButtonClick(e, params.row)}
                variant="contained"
                sx={{
                  background: 'green',
                  color: "#fff"
                }}
              >
                Edit
              </Button>
  
              <Button
                onClick={(e) => onButtonClick(e, params.row)}
                variant="contained"
                sx={{
                  marginLeft: "1rem",
                  color:"#fff",
                  background:'red'
                }}

              >
                Delete
              </Button>
              </FlexBetween>
              
            );
          } ,
        }       
    ];

    //console.log('data', data.manageFacultys);
  return (
    <Box m = "1.5rem 2.5rem">
      <FlexBetween>
        <Header title="ASSIGN PANEL" subtitle="Panel assigned with project" />

        <Box>
          <Button className='createbtn'
          onClick={()=>setOpenPopup(true)}
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
            }}
          >
            NEW +
          </Button>
        </Box>
      </FlexBetween>
            
      <Box
        height="70vh"
        sx={{
        "& .MuiDataGrid-virtualScrollerRenderZone": 
        {
        "& .MuiDataGrid-row": 
        {
          "&:nth-child(2n)": 
          { backgroundColor: theme.palette.primary.light }
          }
          },
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.secondary[300],
            color: '#fff',
            borderBottom: "none",
            fontSize: "14px",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.background.alt,
            fontSize: "13px",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[100]} !important`,
          },
        }}
      >

      <DataGrid
      loading={isLoading || !data}
      getRowId={(row) => row._id}
      rows={(data && data.manageFacultys) || []}
      columns={columns}

          onRowModesModelChange={(newModel)=> new Promise((resolve, reject)=>{console.log(newModel)})}
          rowCount={(data && data.total) || 0}
          
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
        <Popup
          title = "Assign Faculty"
          openPopup = {openPopup}
          setOpenPopup= {setOpenPopup}
          >
          <Form/>
        </Popup>
      </Box>
    </Box>
  );
};

export default AssignPanels;