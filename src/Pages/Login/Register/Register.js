import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();
  const history = useHistory();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    console.log(newLoginData);

    setLoginData(newLoginData);
  }

  const handleLoginSubmit = e => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      alert('Your password did not match');
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <Typography variant="body1">Register</Typography>
            {!isLoading &&
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                  name="name"
                  type="text"
                  onBlur={handleOnBlur}
                  sx={{ width: '75%', m: 1 }}
                />

                <TextField
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  sx={{ width: '75%', m: 1 }}
                />

                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                  name="password"
                  onBlur={handleOnBlur}
                  sx={{ width: '75%', m: 1 }}
                />

                <TextField
                  id="standard-password-input"
                  label="Re-type Your Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                  name="password2"
                  onBlur={handleOnBlur}
                  sx={{ width: '75%', m: 1 }}
                />
                <Button variant="contained" sx={{ width: '75%', m: 1 }} type="submit">Sign up</Button>
                <NavLink to="/login" style={{ textDecoration: 'none' }}>
                  <Button variant="text">Already Register? Please Log in</Button>
                </NavLink>
              </form>}
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 5 }}>
          <img width="100%" src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;