import * as React from 'react';
import './LoginPage.css';
import moon from '../../../images/moon.jpg';
import Button from '@mui/material/Button';
import { GoogleButton, LogIn } from '../colorButton';
import GoogleLogo from '../logos/GoogleLogo';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div className='backGroundLogin'>
      <div className='parent'>
        <div className='loginScreen'>
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
            <h1 className='welcomeText'>Welcome Back, User</h1>
            <p>Welcome Back ! Please enter your details</p>

            <Button sx={GoogleButton} variant='outlined'>
              <GoogleLogo />
              <span style={{ marginLeft: '5px' }}>Log in with google</span>
            </Button>

            <hr className='LineSize' />

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
            <p>Forget Password</p>

            <Button sx={LogIn} variant='contained' type='submit'>
              LOG IN
            </Button>

            <p>
              Don't have an account ? <Link to='/SignUpPage'> Sign up </Link>
            </p>
          </Box>
        </div>
        <div className='loginImageScreen'>
          <img className='loginImageScreen' src={moon} alt='moon' />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
