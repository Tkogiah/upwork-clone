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
                <Typography>
                    Find a Job
                </Typography>
                <Typography >
                    Login
                </Typography>
            </NavItems>
            
        </NavToolbar>
    </NavBox>
  );
}
  