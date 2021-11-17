import React from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, space, time, price } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography variant="h5" gutterBottom component="div" style={{ color: '#1ABC9C', fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Price: ${price}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} SPACES AVAILABLE
          </Typography>
          <Button variant="contained" style={{ backgroundColor: '#1ABC9C' }} onClick={handleBookingOpen}>BOOK APPOINTMENT</Button>
        </Paper>
      </Grid>

      <BookingModal
        booking={booking}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        date={date}
        setBookingSuccess={setBookingSuccess}
      />
    </>
  );
};

export default Booking;