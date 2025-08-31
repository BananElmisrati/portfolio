import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import {
   Dialog,
   DialogTitle,
   DialogContent,
   Typography,
   IconButton
} from "@mui/material";
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close'; // ✅ Import Close Icon


function PortfolioBlock(props) {
   const { image, live, source, title, createdFor, logo, description,bgColor } = props;
   const [openDialog, setOpenDialog] = useState(false);

   const handleOpen = () => setOpenDialog(true);
   const handleClose = () => setOpenDialog(false);
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
<Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="200px"
        height="200px"
        borderRadius="16px"
        bgcolor={bgColor}
        
      >
        {logo && <img src={logo} alt="Logo" style={{ maxHeight: '100px', maxWidth: '100%' }} />}
      </Box>         <h1 style={{ fontSize: '2rem' }}>{title}</h1>
         <p style={{ fontSize: '1rem' }}>{createdFor}</p>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
            </Box>

            <Box
               p={1}
               border="2px solid black"
               borderRadius="25px"
               onClick={handleOpen}
               style={{ cursor: 'pointer' }}
            >
               <span>
                  <i className="fa fa-info-circle" style={{ marginRight: '0.5rem' }}></i>
                  Details
               </span>
            </Box>


            <Dialog open={openDialog} onClose={handleClose} maxWidth="sm" fullWidth>
               <DialogTitle>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                     {/* Logo */}
                     {logo && <img src={logo} alt="Logo" style={{ height: '40px' }} />}
                     <IconButton onClick={handleClose}>
      <CloseIcon />
                     </IconButton>
                  </Box>
               </DialogTitle>

               <DialogContent sx={{fontWeight:300}}>
                  {/* <Typography variant="h6" gutterBottom>{title}</Typography> */}
                  <Typography variant="body1">{description}</Typography>
               </DialogContent>
            </Dialog>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;