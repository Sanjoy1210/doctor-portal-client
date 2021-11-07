import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container, Box } from '@mui/material';

const bannerBg = {
  background: `url(${bg})`,
  backgroundRepeat: 'no-repeat'
}

const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 400
}

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} style={{ ...verticalCenter, textAlign: 'left' }}>
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography color="text.secondary" sx={{ my: 3, fontSize: 14, fontWeight: 300 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque expedita commodi deleniti. Delectus quibusdam magni maiores ab unde blanditiis id.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: '#1ABC9C' }}>GET APPOINMENT</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} style={verticalCenter}>
          <img src={chair} alt="" style={{ width: 500, marginTop: '40px' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;