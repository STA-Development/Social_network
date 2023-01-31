import * as React from 'react';
import { SignUpImage} from '../../../assets/images/Cloud';
import Button from '@mui/material/Button';
import { GoogleButtonUI, LogInButtonUI } from '../colorButton';
import GoogleLogo from '../logos/GoogleLogo';
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUsers } from '../../axios/api';
import { Divider, Stack } from '@mui/material';
import SweetAlert2 from 'react-sweetalert2';
import { colors, position } from "../../../assets/variables";
const SignUpPage = () => {

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [swalProps, setSwalProps] = useState({});

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = handleSubmit(async () => {
    const response = await createUsers({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    });
    setSwalProps({
      icon:'success',
      text: 'Your account has been successfully created ! ',
      show: true,
    })
    return response;
  })
  const signUpScreen = {
    backgroundColor: colors.lightBlue,
    width: '100%',
    height: '100%',
    position: position.property,
  };
  const inputFields = {
    width: '70%',
    height: '90%',
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
    gap:'10px',

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
            component='form'
            sx={{
              ...displayScreen,
            }}
          >
            <Box>
              <Stack spacing={2}>
                <Typography variant='h4' sx={{ fontSize: '25px', marginTop: '10%' }}>
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
              error={!!(errors.firstName)}
              label='First Name'
              variant='standard'
              helperText={errors.firstName && 'FirstName is required!'}
              defaultValue={firstName}
              {...register('firstName', {
                required: true,
              })}
              onChange={(e) => setFirstName(e.target.value)}
            />


            <TextField
              required
              id='standard-lastName-required'
              error={!!(errors.lastName)}
              label='Last Name'
              variant='standard'
              helperText={errors.lastName && 'LastName is required!'}
              defaultValue={lastName}
              {...register('lastName', {
                required: true,
              })}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              required
              id='standard-email-required'
              error={!!(errors.email)}
              label='Email'
              defaultValue={email}
              variant='standard'
              helperText={errors.email && 'Email is required!'}
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              id='standard-password-input'
              error={!!(errors.password)}
              label='Password'
              defaultValue={password}
              type='password'
              autoComplete='current-password'
              variant='standard'
              helperText={errors.password && 'Password is required!'}
              {...register('password', {
                required: true,
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              })}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              onClick={() => handleSignUp()}
              sx={LogInButtonUI}
              variant='contained'
            >
              SIGN UP
            </Button>
            <Typography>
              Already have an account ? <Link to='/'>Sign in </Link>{' '}
            </Typography>
          </Box>
        </Box>
        <Box>
          <SignUpImage/>
        </Box>
        <SweetAlert2 onConfirm={() => navigate('/')} {...swalProps} />
      </Box>
    </Box>
  );
};
export default SignUpPage;
