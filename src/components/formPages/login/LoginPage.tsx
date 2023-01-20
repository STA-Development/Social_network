import * as React from 'react';
import './LoginPage.css';
import moon from '../../../images/moon.jpg';
import Button from '@mui/material/Button';
import { GoogleButtonUI, LogInButtonUI } from '../colorButton';
import GoogleLogo from '../logos/GoogleLogo';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { login } from '../../axios/api';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async () => {
    const response = await login({
      email: email,
      password: password,
    });
    localStorage.setItem('accessToken', response.data.token);
    console.log(response, 'response');
  };

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Box className='backgroundLogin'>
      <Box className='parent'>
        <Box className='loginScreen'>
          <Box
            onSubmit={onSubmit}
            className='container'
            component='form'
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete='off'
          >
            <Typography variant='h4' className='welcomeText'>
              Welcome Back, User
            </Typography>
            <Typography>Welcome Back ! Please enter your details</Typography>

            <Button sx={GoogleButtonUI} variant='outlined'>
              <GoogleLogo />
              <span style={{ marginLeft: '5px' }}>Log in with google</span>
            </Button>

            <hr className='lineSize' />

            <TextField
              className='TextFieldColor'
              id='standard-email-required'
              label='Email'
              variant='standard'
              defaultValue={email}
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p style={{ color: 'red' }}>Email address is not correct!</p>}

            <TextField
              id='standard-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              variant='standard'
              defaultValue={password}
              {...register('password', {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p style={{ color: 'red' }}>Password is not correct!</p>}
            <Typography>Forget Password</Typography>

            <Button
              onClick={() => handleLogin()}
              sx={LogInButtonUI}
              variant='contained'
              type='submit'
            >
              LOG IN
            </Button>

            <Typography>
              Don't have an account ? <Link to='/SignUpPage'> Sign up </Link>
            </Typography>
          </Box>
        </Box>
        <Box className='loginImageScreen'>
          <img className='loginImageScreen' src={moon} alt='moon' />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
