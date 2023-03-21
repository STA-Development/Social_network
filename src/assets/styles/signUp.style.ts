
import { styled } from '@mui/system';
import Box from "@mui/material/Box";
import {colors , display} from "../variables";
import { Divider} from '@mui/material';

export const SignUpScreenStyle = styled(Box)({
    backgroundColor: colors.lightBlue,
    width: '100%',
    height: '100%',
    position: 'absolute',
});
export const InputFields = styled(Box)({
    width: '70%',
    height: '90%',
    top: '5%',
    margin: 'auto auto',
    position: 'relative',
    background: colors.white,
    display: display.grid,
    gridTemplateColumns: '40% 60%',
    gridAutoRows: '100%',
})
export const DisplayScreen = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap:'10px',
})
export const StyleDivider = styled(Divider)({
    border: 'none',
    borderTop: '1px solid #333',
    alignItems: 'center',
    width: '60%',
})






