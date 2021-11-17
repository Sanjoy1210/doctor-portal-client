import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
  const { name, time, price } = booking;
  const { user } = useAuth();
  const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  }

  const handleBookingSubmit = e => {
    e.preventDefault();


    // collect date
    const appointment = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toLocaleDateString()
    }
    // send to the server
    fetch('https://agile-oasis-96730.herokuapp.com/appointments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(appointment)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      })

  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h5" component="h2" sx={{ mb: 2 }}>
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              disabled
              sx={{ width: '100%', mb: 1 }}
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{ width: '100%', mb: 1 }}
              id="outlined-size-small"
              name="patientName"
              defaultValue={user.displayName}
              onBlur={handleOnBlur}
              size="small"
            />
            <TextField
              sx={{ width: '100%', mb: 1 }}
              id="outlined-size-small"
              name="email"
              defaultValue={user.email}
              onBlur={handleOnBlur}
              size="small"
            />
            <TextField
              sx={{ width: '100%', mb: 1 }}
              id="outlined-size-small"
              defaultValue="Phone Number"
              name="phone"
              onBlur={handleOnBlur}
              size="small"
            />
            <TextField
              disabled
              sx={{ width: '100%', mb: 1 }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button variant="contained" type="submit" style={{ backgroundColor: '#1ABC9C' }}>SEND</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;