import React from "react";
import Stack from '@mui/material/Stack';
import LoadingIcons from 'react-loading-icons'
import LinearProgress from '@mui/material/LinearProgress';
import { height } from "@mui/system";




export const LoaderThreeDotsUpperCenter = ({color}) => {

    return (
      <Stack sx={{ width: '100%', color: 'grey.500',height:'70px' }} spacing={2}>

        <LinearProgress className="h-96"/>
        <LinearProgress color="success" />

      </Stack>
      

        // <div className="position-absolute top-70 end-50">
        //   {<LoadingIcons.Oval 
        //   height={'3em'} 
        //   stroke={'#06bcee'} 
        //   fill={color}  
          
        //   speed={2} 
        //   fillOpacity={1}
        //   strokeWidth={5} 
        //   />}
        // </div>

    )

};