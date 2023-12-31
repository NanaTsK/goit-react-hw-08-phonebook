import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/thunks';
import { getHoverStyle } from '../../theme/theme';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [email, setEmail] = useState(INITIAL_STATE.email);
  const [password, setPassword] = useState(INITIAL_STATE.password);

  const dispatch = useDispatch();

  const handleLogin = async e => {
    e.preventDefault();

    try {
      await dispatch(logIn({ email, password })).unwrap();
      toast.success('Welcome');
    } catch (error) {
      toast.error('Invalid Email or Password ');
    }

    resetForm();
  };

  const resetForm = () => {
    setEmail(INITIAL_STATE.email);
    setPassword(INITIAL_STATE.password);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          m: 1,
          width: '500px',
          maxWidth: '100%',
        },
      }}
      noValidate
      onSubmit={handleLogin}
    >
      <TextField
        required
        label="Email address"
        placeholder="mail@mail.com"
        type="email"
        sx={getHoverStyle('primary.light')}
        value={email}
        onChange={({ target }) => {
          setEmail(target.value);
        }}
      />
      <TextField
        required
        label="Password"
        placeholder="password"
        type="password"
        sx={getHoverStyle('primary.light')}
        value={password}
        onChange={({ target }) => {
          setPassword(target.value);
        }}
      />
      <Button variant="outlined" type="submit" size="large">
        Login
      </Button>
      <Typography>
        Don't have an account yet? Please{' '}
        <Link to="/register" underline="hover">
          Sigh Up
        </Link>
        .
      </Typography>
    </Box>
  );
};
