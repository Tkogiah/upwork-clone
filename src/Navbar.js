import { NavBox, Search, StyledInputBase, NavItems, NavToolbar } from "./StyledComponents";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


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
                <Link style={{
                color: 'white', 
                textDecoration: 'none', 
                width: '100px',
                display: "flex",
                 }} 
                to={'/jobs'}>
                    <Typography sx={{
                        paddingLeft: '0px'
                    }}>
                        Find a Job
                    </Typography>
                </Link>
                <Link style={{
                color: 'white', 
                textDecoration: 'none', 
                width: '100px',
                display: "flex",
                justifyContent: 'flex-end'
                 }} 
                to={'/'}>
                    <Typography sx={{
                    paddingLeft: '10%',
                    }}>
                        Login
                    </Typography>
                </Link>   
            </NavItems>
            
        </NavToolbar>
    </NavBox>
  );
}
  