import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import login from '../../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, isLoading, loginUser, signInWithGoogle, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  const handleLoginSubmit = e => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, history);
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <Typography variant="body1">Login</Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                id="standard-basic"
                label="Your Email"
                variant="standard"
                name="email"
                type="email"
                onChange={handleOnChange}
                sx={{ width: '75%', m: 1 }}
              />

              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                name="password"
                onChange={handleOnChange}
                sx={{ width: '75%', m: 1 }}
              />
              <Button variant="contained" sx={{ width: '75%', m: 1 }} type="submit">Sign in</Button>
              <NavLink to="/register" style={{ textDecoration: 'none' }}>
                <Button variant="text">New user? Please Register</Button>
              </NavLink>

              {isLoading && <CircularProgress />}
              {user?.email && <Alert severity="success">Log in Successfully!</Alert>}
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <p>-------------------------------</p>
            <Button onClick={handleGoogleSignIn} variant="contained">Google Sign in</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 5 }}>
          <img width="100%" src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;