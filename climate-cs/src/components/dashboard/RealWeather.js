import React from 'react'
import Weather from './Weather'
import Typography from '@mui/material/Typography';
import Title from './Title';


export default function RealWeather() {
    return (
    <React.Fragment>
      <Title></Title>
      <Typography component="h1" variant="h5" align="center" alignItems="center">
        <Weather/>
      </Typography>
    </React.Fragment>
    )
}
