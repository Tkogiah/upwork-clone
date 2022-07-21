import { PrimaryButton, PrimaryInput, MainBox } from "./StyledComponents";
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Typography } from "@mui/material";


export default function Login({setLoggedIn}) {
  return (
    <>
      <MainBox sx={{ '& > :not(style)': { m: 1 } }} component="form">
        <Typography variant="h5" sx={{ p: '20px 0 10px 0', color: '#666666'}}>
          Log in
        </Typography>
        <FormControl variant="standard"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '375px',
            height: 'auto',
            pb: '40px',
          }}>
          <PrimaryInput
            placeholder="Username or Email"
            id="email"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
          }
          />
          <PrimaryInput
            label="Password"
            placeholder="password"
            type="password"
            id="password"
            sx={{
              marginBottom: '3vh', 
            }}
          />
          <PrimaryButton
            variant="contained"
            onClick={() => setLoggedIn(true)}
            >
              Continue with email
          </PrimaryButton>
        </FormControl>
    </MainBox>
      
    </>
  );
}
