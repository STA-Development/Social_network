import * as React from 'react';
import { Cloud } from '../../../assets/images/Cloud';
import Button from '@mui/material/Button';
import { GoogleButtonUI, LogInButtonUI } from '../colorButton';
import GoogleLogo from '../logos/GoogleLogo';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUsers } from '../../axios/api';
import { Divider, Stack } from '@mui/material';

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
  const signUpScreen = {
    backgroundColor: '#fbeeee',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
  };
  const inputFields = {
    width: '70%',
    height: '85%',
    top: '5%',
    margin: 'auto auto',
    position: 'relative',
    background: 'white',
    display: 'grid',
    gridTemplateColumns: '40% 60%',
    gridAutoRows: '100%',
  };
  const displayScreen = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    '& > :not(style)': { m: 1 },
  };
  const divider = {
    border: 'none',
    borderTop: '1px solid #333',
    alignItems: 'center',
    width: '60%',
  };
  return (
    <Box sx={{ ...signUpScreen }}>
      <Box
        sx={{
          ...inputFields,
        }}
      >
        <Box sx={{ backgroundColor: 'white' }}>
          <Box
            onSubmit={onSubmit}
            component='form'
            sx={{
              ...displayScreen,
            }}
          >
            <Box>
              <Stack spacing={2}>
                <Typography variant='h4' sx={{ fontSize: '27px', marginTop: '50px' }}>
                  Create Account
                </Typography>

                <Typography>Welcome, Please create an account</Typography>
              </Stack>
              <Button sx={GoogleButtonUI} variant='outlined'>
                <GoogleLogo />
                <Box component='div' sx={{ display: 'inline', marginLeft: '5px' }}>
                  Sign in with google
                </Box>
              </Button>
            </Box>

            <Divider
              sx={{
                ...divider,
              }}
            />

            <TextField
              required
              id='firstName'
              label='First Name'
              variant='standard'
              defaultValue={firstName}
              {...register('firstName', {
                required: true,
              })}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && (
              <Typography style={{ color: 'red' }}>firstName is required!</Typography>
            )}

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
            {errors.lastName && (
              <Typography style={{ color: 'red' }}>lastName is required!</Typography>
            )}
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
            {errors.email && (
              <Typography style={{ color: 'red' }}>Correct email is required!</Typography>
            )}
            <TextField
              id='standard-password-input'
              label='Password'
              defaultValue={password}
              type='password'
              autoComplete='current-password'
              variant='standard'
              {...register('password', {
                required: true,
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
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
          <Cloud />
        </Box>
      </Box>
    </Box>
  );
};
export default SignUpPage;
