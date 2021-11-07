import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';

const AppoinmentHeader = ({ date, setDate }) => {

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Calendar date={date} setDate={setDate} />
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={chair} alt="" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppoinmentHeader;