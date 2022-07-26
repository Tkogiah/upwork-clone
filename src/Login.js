import { PrimaryButton, PrimaryInput, MainBox, LoginContainer } from "./StyledComponents";
import { InputAdornment } from "@mui/material";
import { FormControl } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Typography } from "@mui/material";


export default function Login({setLoggedIn}) {
  return (
    <LoginContainer>
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
      
    </LoginContainer>
  );
}
