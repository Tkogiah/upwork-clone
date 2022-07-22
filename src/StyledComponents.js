import Button from "@mui/material/Button";
import {Input, Box} from "@mui/material";
import { styled } from "@mui/material/styles";

const PRIMARY_GREEN = "#39B54A";
const SECONDARY_NAVY = "#2B5468";
const ROW_DISPLAY = '';
const COLUMN_DISPLAY = '';

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
  marginTop: '25vh' 
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
  flexDirection: 'row' 
}));

export const BodyBox = styled(Box)(() => ({
  backgroundColor: '#f0f2f4',
  width: '100vw',
  minHeight: '80vh',
  maxHeight: 'auto',
  margin: 'none',
  display: 'flex',
  flexDirection: 'column' 
}));
