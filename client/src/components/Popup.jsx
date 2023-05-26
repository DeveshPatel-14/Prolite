import { DialogContent, DialogTitle,Dialog, makeStyles, Typography,IconButton,useTheme } from '@mui/material';
import {CloseOutlined} from '@mui/icons-material';
import React from 'react';
import { useDispatch } from "react-redux";


export default function Popup(props){
    const {title, children, openPopup, setOpenPopup} = props;
    const theme = useTheme();

    return (
        <Dialog open={openPopup}>
            <DialogTitle
            sx={{color: theme.palette.secondary[300]}}>
            <div style={{display: 'flex'}}>
            <Typography variant="h4" component="div" style={{flexGrow:1}}>
                    {title}
                </Typography>
                <IconButton onClick={()=>setOpenPopup(false)}>
                <CloseOutlined
                    
                    sx={{fontSize: "25px",
                         color: "red"   }}>
                    </CloseOutlined>
                </IconButton>
            </div>
            </DialogTitle>
            
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}