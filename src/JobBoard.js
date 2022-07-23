import { Box } from "@mui/system";
import { BodyBox, NavBox, Search, StyledInputBase, NavItems } from "./StyledComponents";
import { Toolbar, Typography } from "@mui/material";


export default function JobBoard() {
  return (
    <Box>
      <NavBox>
        <Toolbar>
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
              <Typography>
                Login
              </Typography>
            </NavItems>
          </Toolbar>
      </NavBox>
      <BodyBox>

      </BodyBox>
    </Box>
  );
}
  