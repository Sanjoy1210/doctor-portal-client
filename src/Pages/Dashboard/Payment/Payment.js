import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jvpl2Bl4X8gDl9qfS5c2nnRyG3C1f4v6nwQQRWlsZORBFrsI1XuDaki103UUmIQA1Ig7yjaBHLvDykHeI7oCSup00O4RPZOKK');

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(`https://agile-oasis-96730.herokuapp.com/appointments/${appointmentId}`)
      .then(res => res.json())
      .then(data => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName}</h2>
      <h4>Pay: ${appointment.price}</h4>
      {appointment.price && <Elements stripe={stripePromise}>
        <CheckoutForm
          appointment={appointment}
        />
      </Elements>}
    </div>
  );
};

export default Payment;

/*
  1. install stripe and stripe-react
  2. set publishable key
  3. elements
  4. checkform
----------------------------
  5. create payment method
  6. server  create payment intent api
  7. load client secret
  8. confirmCard payment
  9. handle user error

*/