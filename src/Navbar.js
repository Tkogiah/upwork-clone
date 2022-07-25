import { NavBox, Search, StyledInputBase, NavItems, NavToolbar } from "./StyledComponents";
import { Typography } from "@mui/material";



export default function Navbar() {
  return (
    <NavBox>
        <NavToolbar>
            <Search>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <NavItems>
                <Typography sx={{
                    paddingLeft: '10%',
                }}>
                    Find a Job
                </Typography>
                <Typography sx={{
                    paddingLeft: '10%',
                }}>
                    Login
                </Typography>
            </NavItems>
            
        </NavToolbar>
    </NavBox>
  );
}
  