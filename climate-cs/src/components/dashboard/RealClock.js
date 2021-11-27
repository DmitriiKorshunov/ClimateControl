import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import RealTime from './RealTime';
import RealDate from './RealDate';
import RealDay from './RealDay'







export default function RealClock() {
  return (
    <React.Fragment>
      <Title></Title>
      <Typography component="h1" variant="h3" align="center" alignItems="center">
        <RealTime/>
      </Typography>
      <Typography component="h1" variant="h4" align="center" alignItems="center">
        <RealDate/>
      </Typography>
      <Typography component="h1" variant="h4" align="center" alignItems="center">
        <RealDay/>
      </Typography>
      
      
      
    </React.Fragment>
  );
}
