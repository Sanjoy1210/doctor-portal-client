import React from 'react';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Booking from '../Booking/Booking';
import { useState } from 'react';

const bookings = [
  {
    id: 1,
    name: 'Teeth Orthodontics',
    time: '08.00 AM - 09.00 AM',
    space: 10
  },
  {
    id: 2,
    name: 'Cosmetic Dentistry',
    time: '10.05 AM - 11.30 AM',
    space: 10
  },
  {
    id: 3,
    name: 'Teeth Cleaning',
    time: '05.00 PM - 06.30 PM',
    space: 10
  },
  {
    id: 4,
    name: 'Cavity Protection',
    time: '07.00 AM - 08.30 AM',
    space: 10
  },
  {
    id: 5,
    name: 'Pediatric Dental',
    time: '06.00 pM - 07.00 PM',
    space: 10
  },
  {
    id: 6,
    name: 'Oral Surgery',
    time: '07.00 PM - 08.00 PM',
    space: 10
  }
]

const AvailableAppoinments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);

  return (
    <Container>
      <Typography variant="h4" style={{ color: '#1ABC9C', fontWeight: 500, margin: '30px 0' }}>Available Appoinments on {date.toDateString()}</Typography>
      {bookingSuccess && <Alert severity="success">Appointment Booked Successfully!</Alert>}
      <Grid container spacing={2}>
        {
          bookings.map(booking => <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setBookingSuccess={setBookingSuccess}
          />)
        }
      </Grid>
    </Container>
  );
};

export default AvailableAppoinments;