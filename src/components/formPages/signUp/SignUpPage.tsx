import * as React from 'react';
import { SignUpImage } from '../../../assets/images/Cloud';
import Button from '@mui/material/Button';
import { LogInButtonUI } from '../colorButton';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUsers } from '../../axios/axiosForms';
import { Stack } from '@mui/material';
import SweetAlert2 from 'react-sweetalert2';
import { regex } from '../../../assets/variables/regex';
import {
  InputFields,
  SignUpScreenStyle,
  DisplayScreen,
  StyleDivider,
} from '../../../assets/styles/signUp.style';
const SignUpPage = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [swalProps, setSwalProps] = useState({});

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = handleSubmit(async () => {
    try {
      const response = await createUsers({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });
      setSwalProps({
        icon: 'success',
        text: 'Your account has been successfully created ! ',
        show: true,
      });
      return response;
    } catch (error) {
      return error;
    }
  });
  return (
    <SignUpScreenStyle>
      <InputFields>
        <Box sx={{ backgroundColor: 'white' }}>
          <DisplayScreen>
            <Box component='form' onSubmit={handleSignUp}>
              <Stack spacing={2}>
                <Typography variant='h4' sx={{ fontSize: '25px', marginTop: '10%' }}>
                  Create Account
                </Typography>

                <Typography>Welcome, Please create an account</Typography>
              </Stack>
            </Box>

            <StyleDivider></StyleDivider>

            <TextField
              required
              id='firstName'
              error={!!errors.firstName}
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
              error={!!errors.lastName}
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
              error={!!errors.email}
              label='Email'
              defaultValue={email}
              variant='standard'
              helperText={errors.email && 'Email is required!'}
              {...register('email', {
                required: true,
                pattern: regex.emailPattern,
              })}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              id='standard-password-input'
              error={!!errors.password}
              label='Password'
              defaultValue={password}
              type='password'
              autoComplete='current-password'
              variant='standard'
              helperText={errors.password && 'Password is required!'}
              {...register('password', {
                required: true,
                pattern: regex.passwordPattern,
              })}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button onClick={() => handleSignUp()} sx={LogInButtonUI} variant='contained'>
              SIGN UP
            </Button>
            <Typography>
              Already have an account ? <Link to='/'>Sign in </Link>{' '}
            </Typography>
          </DisplayScreen>
        </Box>
        <Box>
          <SignUpImage />
        </Box>
        <SweetAlert2 onConfirm={() => navigate('/')} {...swalProps} />
      </InputFields>
    </SignUpScreenStyle>
  );
};
export default SignUpPage;
