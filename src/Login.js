import { PrimaryButton } from "./StyledComponents";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Typography } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function Login() {
  return (
    <>
      <Box sx={{ 
        '& > :not(style)': { m: 1 },
        backgroundColor: '#fefeff',
        width: '30vw',
        height: '30vh',
        padding: '3vh 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' 
        }}
        component="form"
      >
        <Typography variant="h5" sx={{
          paddingBottom: '1vh'
        }}>
          Log in
        </Typography>
        < >
          <FormControl variant="standard">
            <Input
              defaultValue="Username or email"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
            }
          />
          </FormControl>
          <TextField
            defaultValue="Password"
            id="input"
            InputProps={{}}
            variant="standard"
          />
        </>
        
      <PrimaryButton variant="contained">
        Continue with email
      </PrimaryButton>
    </Box>
      
    </>
  );
}
