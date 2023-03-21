import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import {colors} from "../variables";
import {Divider} from "@mui/material";

export const LoginScreenStyle = styled(Box)({
    backgroundColor: colors.lightRed,
    width: '100%',
    height: '100%',
    position: 'absolute',
});
export const DisplayScreen = styled(Box)({
    width: '70%',
    height: '90%',
    top: '5%',
    margin: 'auto auto',
    position: 'relative',
    background: 'white',
    display: 'grid',
    gridTemplateColumns: '40% 60%',
    gridAutoRows: '100%',
});

export const SubmitDisplay = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    gap: '20px',
});
export const StyleDivider = styled(Divider)({
    border: 'none',
    borderTop: '1px solid #333',
    alignItems: 'center',
    width: '60%',
})






