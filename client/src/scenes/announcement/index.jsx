import React,{useState} from 'react';
import FlexBetween from 'components/FlexBetween';
import {Box,
     Card,
     CardActions,
     CardContent,
     Collapse,
     Button,
     Typography,
     useTheme,
     useMediaQuery,
    } from "@mui/material";
import { useGetAnnouncementQuery } from 'state/api';
import { useSelector } from "react-redux";
import Header from "components/Header";
import Popup from 'components/Popup';
import Form from 'components/AnnouncementForm';


const Announcement = ({
  _id,
  title,
  description,
  creatorName,
  creatorEmail,
  creatorRole,
}) =>{
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Card
        sx={{
          backgroundImage: "none",
          backgroundColor: theme.palette.background.alt,
          borderRadius: "0.55rem",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: "18px" }}
            color={theme.palette.secondary[300]}
            gutterBottom>
            {title}
          </Typography>

          <Typography variant="body1">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="primary"
            size="small"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            See More
          </Button>
        </CardActions>
        <Collapse
          in={isExpanded}
          timeout="auto"
          unmountOnExit
          sx={{
            color: theme.palette.neutral[300],
          }}
        >
        <CardContent>
            <Typography>Name: {creatorName}</Typography>
            <Typography>Email: {creatorEmail}</Typography>
            
            </CardContent>
        </Collapse>
  </Card>
  );
};

const Announcements = () => {
    const theme = useTheme();
    const [openPopup, setOpenPopup] = useState(false);
    const {data, isLoading} = useGetAnnouncementQuery(); 
    const [hover, setHover] = useState(false);
    const isNonMobile = useMediaQuery("(min-width: 1000px");
    const userRole = useSelector((state) => state.global.userRole);



    // console.log('data', data[1].creatorName);
      return (
        <Box m="1.5rem 2.5rem">
          <FlexBetween>
            <Header title="ANNOUNCEMENT" subtitle="See Latest Announcement at top" />
    
            {userRole !== 'student' && (
              <Box>
                <Button
                  className="createbtn"
                  onClick={() => setOpenPopup(true)}
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  style={{
                    ...(hover ? { background: theme.palette.secondary[400] } : null),
                  }}
                  sx={{
                    backgroundColor: theme.palette.secondary[300],
                    color: theme.palette.background.alt,
                    fontSize: '14px',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                  }}
                >
                  CREATE +
                </Button>
              </Box>
            )}
          </FlexBetween>
    
      {data || !isLoading? (
          <Box 
          mt="20px" 
          display="grid"
          gridTemplateColumns="repeat(1, minmax(0,1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}>{data.map(
            ({
                _id,
                title,
                description,
                creatorEmail,
                creatorName,
              })=>(
              <Announcement
              key={_id}
                _id={_id}
                title={title}
                description={description}
                creatorName={creatorName}
                creatorEmail={creatorEmail} />
              )
          )}
          
          </Box>
      ) : (
        <div>Loading...</div>
      )}
      <Popup
          title = "Announcement"
          openPopup = {openPopup}
          setOpenPopup= {setOpenPopup}
          >
          <Form/>
      </Popup>
    </Box>
  );
};

export default Announcements;
