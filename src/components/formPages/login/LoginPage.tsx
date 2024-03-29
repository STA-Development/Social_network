import * as React from 'react';
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
import { MoonLoginImage } from '../../../assets/images/Moon';
import {regex} from "../../../assets/variables";
import {LoginScreenStyle, DisplayScreen, SubmitDisplay, StyleDivider} from "../../../assets/styles/login.style";

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = handleSubmit(async (data) => {
    try {
    const response = await login({
      email: email,
      password: password,
    });

      localStorage.setItem('accessToken', response.data.token);
      return (data)
    }
    catch (error){
      return error;
    }
  });
  return (
    <LoginScreenStyle>
      <DisplayScreen>
        <Box sx={{ backgroundColor: 'white' }}>
          <SubmitDisplay
            component='form'
          >
            <Typography variant='h4' sx={{ fontSize: '30px' }}>
              Welcome Back
            </Typography>
            <Typography>Welcome Back ! Please enter your details</Typography>

            <Button sx={GoogleButtonUI} variant='outlined'>
              <GoogleLogo />
              <Box component='div' sx={{ display: 'inline', marginLeft: '5px' }}>
                Log in with google
              </Box>
            </Button>

            <StyleDivider>
            </StyleDivider>

            <TextField
              className='TextFieldColor'
              id='standard-email-required'
              error={!!(errors.email)}
              label='Email'
              variant='standard'
              defaultValue={email}
              helperText={errors.email && 'Email is required!'}
              {...register('email', {
                required: true,
                pattern: regex.emailPattern,
              })}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              id='standard-password-input'
              error={!!(errors.password)}
              label='Password'
              type='password'
              autoComplete='current-password'
              variant='standard'
              defaultValue={password}
              {...register('password', {
                required: true,
                pattern: regex.passwordPattern,
              })}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Typography>Forget Password</Typography>

            <Button
              onClick={(event) =>  handleLogin(event) }
              sx={LogInButtonUI}
              variant='contained'
            >
              LOG IN
            </Button>

            <Typography>
              Don't have an account ? <Link to='/SignUpPage'> Sign up </Link>
            </Typography>
          </SubmitDisplay>
        </Box>
        <Box sx={{ width: '100%', height: '100%' }}>
          <MoonLoginImage />
        </Box>
      </DisplayScreen>
    </LoginScreenStyle>
  );
};

export default LoginPage;
