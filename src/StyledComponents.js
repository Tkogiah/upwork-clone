import Button from "@mui/material/Button";
import {Input, Box} from "@mui/material";
import { styled } from "@mui/material/styles";

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
  alignItems: 'center' 
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