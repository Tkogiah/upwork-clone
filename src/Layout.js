import { Box } from "@mui/system";
import { RowBox, LayoutBox, ColumnBox, AsideTypography, Search, SearchButton, StyledInputBase} from "./StyledComponents"
import SearchIcon from '@mui/icons-material/Search'

import Navbar from "./Navbar";
import JobBoard from "./JobBoard";

export default function Layout({setAllJobs}) {
  return (
    <Box>
      <Navbar />
      <LayoutBox>
            <RowBox sx={{
            width: '100%',
            height: '100%',
            boxSizing: 'border-box'
            }}>
                {/* LEFT SIDE CONTAINER */}
                <ColumnBox sx={{
                boxSizing: 'border-box',
                width: '15%',
                height: '100%', 
                fontSize: '15px'
                }}>
                    <AsideTypography variant='h5' sx={{
                    fontSize: '24px',
                    marginBottom: '65px'
                    }}>
                        Find Work
                    </AsideTypography>
                    <AsideTypography sx={{
                    fontSize: '20px'
                    }}>
                        Categories
                    </AsideTypography>
                    <AsideTypography>
                        Front End Dev
                    </AsideTypography>
                    <AsideTypography>
                        Design
                    </AsideTypography>
                    <AsideTypography>
                        E-commerce
                    </AsideTypography>
                </ColumnBox>

                {/* RIGHT SIDE CONTAINER */}
                <ColumnBox sx={{
                width: '85%',
                height: '100%'
                }}>
                    <RowBox sx={{ 
                    width: '100%', 
                    marginBottom: '65px'
                    }}>
                        <Search sx={{
                        border: `3px solid #f0f2f4`,
                        width: '100%',
                        backgroundColor: 'white'
                        }}>
                            <StyledInputBase placeholder="Search…" />
                        </Search>
                        <SearchButton>
                            <SearchIcon />
                        </SearchButton>
                    </RowBox>
                    <JobBoard setAllJobs={setAllJobs}/>
                </ColumnBox>
            </RowBox>
        </LayoutBox>
    </Box>
  );
}
  