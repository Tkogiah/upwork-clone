import Button from "@mui/material/Button";
import {Box, Toolbar, Typography} from "@mui/material";
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

export const SearchButton = styled('div')(() => ({
  background: PRIMARY_GREEN,
  borderRadius:'0px',
  color: 'white',
  margin: '0px',
  padding: '0px',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const NavBox = styled(Box)(() => ({
  backgroundColor: SECONDARY_NAVY,
  width: '100vw',
  height: '70px',
  margin: 'none',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'sticky',
  top: '0px'
}));

export const NavToolbar = styled(Toolbar)(() => ({
  width: '78vw',
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
  alignItems: 'center',
  boxSizing: 'border-box' 
}));

export const LayoutBox = styled(Box)(() => ({
  backgroundColor: '#f0f2f4',
  width: '100vw',
  height: '99vh',
  margin: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '65px 11vw 0px 11vw',
}));

export const Search = styled('div')(() => ({
  border: `3px solid ${SECONDARY_NAVY}`,
  width: '30vw',
  backgroundColor: '#f0f2f4',
  '&:hover': {
    border: `3px solid ${PRIMARY_GREEN}`,
  },
  textAlign: 'start'
}));

export const StyledInputBase = styled(InputBase)(() => ({
  color: 'black',
  paddingLeft: '15px',
  width: '100%'
}));

export const NavItems = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'end',
  alignItems: 'center',
  color: 'white',
  width: '30vw'
}))

export const ColumnBox = styled(Box)(({BGC}) => ({
  display: 'flex',
  flexDirection: 'column',
  background: BGC
}))
export const RowBox = styled(Box)(({BGC}) => ({
  display: 'flex',
  flexDirection: 'row',
  background: BGC
}))

export const AsideTypography = styled(Typography)(() => ({
  color: '#666666',
  textAlign: 'left',
  paddingBottom: '10px',
  fontSize: '15px'
}))
export const MainTypography = styled(Typography)(() => ({
  color: '#666666',
  textAlign: 'left',
  paddingBottom: '15px',
  fontSize: '15px'
}))
