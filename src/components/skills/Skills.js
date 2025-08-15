import React from 'react';

import { Box } from "@mui/material";

import CoreSkills from './CoreSkills';

export default function Skills({ innerRef }) {

   return (
      <Box ref={innerRef}  alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>
         {/* <Box  alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/> */}
      
<Box>      <CoreSkills></CoreSkills>
</Box>
      </Box>
   )
}