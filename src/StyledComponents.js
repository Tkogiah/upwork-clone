import Button from "@mui/material/Button";
import {Box} from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from '@mui/material/InputBase';
import { Input } from "@mui/material";

const PRIMARY_GREEN = "#39B54A";
const SECONDARY_NAVY = "#2B5468";

export const MainBox = styled(Box)(() => ({
  backgroundColor: '#fefeff',
  width: '400px',
  height: 'auto',
  pt: '3vh',
  pb: '5vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center', 
}));

export const PrimaryInput = styled(Input)(() => ({
  textDecoration: 'none',
  width: '300px',
  margin: '1vh 0',
  border: `1px solid ${PRIMARY_GREEN}`,
  borderRadius: '8px',
  paddingLeft: '10px'
}));

export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  width: '300px',
  fontSize: '10px',
  paddingTop: '1vh',
  borderRadius: '30px'
}));

export const NavBox = styled(Box)(() => ({
  backgroundColor: SECONDARY_NAVY,
  width: '100vw',
  height: '70px',
  margin: 'none',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}));

export const BodyBox = styled(Box)(() => ({
  backgroundColor: '#f0f2f4',
  width: '100vw',
  height: '99vh',
  margin: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center' 
}));

export const Search = styled('div')(() => ({
  border: `1px solid ${SECONDARY_NAVY}`,
  width: '30vw',
  backgroundColor: '#f0f2f4',
  '&:hover': {
    border: `2px solid ${PRIMARY_GREEN}`,
  },
  textAlign: 'start',
  marginLeft: '100px'
}));

export const StyledInputBase = styled(InputBase)(() => ({
  color: 'black',
  paddingLeft: '15px'
}));

export const NavItems = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  color: 'white',
  width: '20vw'

}))
