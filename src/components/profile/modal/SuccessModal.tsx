import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { ContextValue, UserContext } from '../../../assets/context/userContext';
import { useContext } from 'react';
const SuccessModal = () => {
  const { open, setOpen } = useContext(UserContext) as ContextValue;
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          backgroundColor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <CheckCircleOutlineIcon sx={{ color: '#a3d784', width: '80px', height: '80px' }} />
          <Typography id='modal-modal-title' variant='h5' component='h2' sx={{ color: 'green' }}>
            Success !
          </Typography>
          <Typography>your request was successfully submitted</Typography>
        </Box>
      </Box>
    </Modal>
  );
};
export default SuccessModal;
