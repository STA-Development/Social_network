import * as React from 'react';
import '../login/LoginPage.css';
import moon from '../../../images/cloud2.jpg';
import Button from '@mui/material/Button';
import { GoogleButtonUI, LogInButtonUI } from '../colorButton';
import GoogleLogo from '../logos/GoogleLogo';
import { Link } from 'react-router-dom';
import './SignUp.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUsers } from '../../axios/api';

const SignUpPage = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = async () => {
    const response = await createUsers({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    });
    console.log(response, 'response');
  };
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <Box className='backgroundSignUp'>
      <Box className='parentSignUp'>
        <Box className='signUpScreen'>
          <Box
            onSubmit={onSubmit}
            className='signUpContainer'
            component='form'
            sx={{
              '& > :not(style)': { m: 1 },
            }}
          >
            <Box>
              <Box>
                <Typography variant='h4' className='SignUpWelcomeText'>
                  Create Account
                </Typography>
              </Box>
              <Typography>Welcome, Please create an account</Typography>

              <Button sx={GoogleButtonUI} variant='outlined'>
                <GoogleLogo />
                <span style={{ marginLeft: '5px' }}>Sign in with google</span>
              </Button>
            </Box>

            <hr className=' signUpLineSize' />

            <TextField
              required
              className='TextFieldColor'
              id='firstName'
              label='First Name'
              variant='standard'
              defaultValue={firstName}
              {...register('firstName', {
                required: true,
              })}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p style={{ color: 'red' }}>firstName is required!</p>}

            <TextField
              required
              id='standard-lastName-required'
              label='Last Name'
              variant='standard'
              defaultValue={lastName}
              {...register('lastName', {
                required: true,
              })}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p style={{ color: 'red' }}>lastName is required!</p>}
            <TextField
              required
              id='standard-email-required'
              label='Email'
              defaultValue={email}
              variant='standard'
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p style={{ color: 'red' }}>Correct email is required!</p>}
            <TextField
              id='standard-password-input'
              label='Password'
              defaultValue={password}
              type='password'
              autoComplete='current-password'
              variant='standard'
              {...register('password', {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <Typography style={{ color: 'red' }}>
                Password must contain at least one number and one uppercase and lowercase letter,
                and at least 8 or more characters" !
              </Typography>
            )}

            <Button
              onClick={() => handleSignUp()}
              sx={LogInButtonUI}
              variant='contained'
              type='submit'
            >
              SIGN UP
            </Button>
            <Typography>
              Already have an account ? <Link to='/'>Sign in </Link>{' '}
            </Typography>
          </Box>
        </Box>
        <Box>
          <img className='signUpImageScreen ' src={moon} alt='moon' />
        </Box>
      </Box>
    </Box>
  );
};
export default SignUpPage;
