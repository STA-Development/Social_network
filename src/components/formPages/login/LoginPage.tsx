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
import { Divider } from '@mui/material';
import { MoonLoginImage } from '../../../assets/images/Moon';
import { colors, position } from "../../../assets/variables";


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
  };

  const onSubmit = handleSubmit((data) => {

    return(data)})
  const loginScreen = {
    backgroundColor: colors.lightRed,
    width: '100%',
    height: '100%',
    position: position.property,
    top: position.top,
    left: position.left,
  };
  const displayScreen = {
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
  const submitDisplay = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    gap: '10px',
    '& > :not(style)': { m: 1 },
  };
  const divider = {
    border: 'none',
    borderTop: '1px solid #333',
    alignItems: 'center',
    width: '60%',
  };

  return (
    <Box
      sx={{
        ...loginScreen,
      }}
    >
      <Box
        sx={{
          ...displayScreen,
        }}
      >
        <Box sx={{ backgroundColor: 'white' }}>
          <Box
            component='form'
            sx={{
              ...submitDisplay,
            }}
            noValidate
            autoComplete='off'
          >
            <Typography variant='h4' sx={{ fontSize: '30px' }}>
              Welcome Back, User
            </Typography>
            <Typography>Welcome Back ! Please enter your details</Typography>

            <Button sx={GoogleButtonUI} variant='outlined'>
              <GoogleLogo />
              <Box component='div' sx={{ display: 'inline', marginLeft: '5px' }}>
                Log in with google
              </Box>
            </Button>

            <Divider
              sx={{
                ...divider,
              }}
            />

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
            {errors.email && (
              <Typography style={{ color: 'red' }}>Email address is not correct!</Typography>
            )}

            <TextField
              id='standard-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              variant='standard'
              defaultValue={password}
              {...register('password', {
                required: true,
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              })}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <Typography style={{ color: 'red' }}>Password is not correct!</Typography>
            )}
            <Typography>Forget Password</Typography>

            <Button
              onClick={(event) => {handleLogin(); onSubmit(event)}}
              sx={LogInButtonUI}
              variant='contained'
            >
              LOG IN
            </Button>

            <Typography>
              Don't have an account ? <Link to='/SignUpPage'> Sign up </Link>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: '100%' }}>
          <MoonLoginImage />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
