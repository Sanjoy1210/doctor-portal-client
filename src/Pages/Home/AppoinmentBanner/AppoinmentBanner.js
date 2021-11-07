import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import appoinment from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appoinmentBanner = {
  background: `url(${appoinment})`,
  backgroundColor: 'rgba(45, 58, 74, 0.8)',
  backgroundBlendMode: 'darken, luminosity',
  marginTop: 200
}

const AppoinmentBanner = () => {
  return (
    <Box style={appoinmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width: 400, marginTop: '-110px' }} src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
          <Box>
            <Typography sx={{ mb: 2 }} variant="h6" style={{ color: '#1ABC9C' }}>
              APPOINMENT
            </Typography>
            <Typography sx={{ mb: 2 }} variant="h4" style={{ color: 'white' }}>
              Make an Appoinment Today
            </Typography>
            <Typography sx={{ mb: 4 }} style={{ color: 'white', fontSize: 16, fontWeight: 400 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima fugiat officiis omnis maiores assumenda.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: '#1ABC9C' }}>LEARN MORE</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppoinmentBanner;