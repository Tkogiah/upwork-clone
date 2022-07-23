import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "./Navbar";
import { BodyBox, RowBox, ColumnBox, Search, StyledInputBase, SearchButton, AsideTypography, MainTypography } from "./StyledComponents";
import SearchIcon from '@mui/icons-material/Search';



export default function JobBoard() {
  return (
    <Box>
      <Navbar />
      <BodyBox sx={{
        justifyContent: 'flex-start',
        paddingTop: '65px'
      }}>
        <RowBox sx={{
          width: '100vw'
        }}>
          {/* Left side */}
          <ColumnBox sx={{ 
            textAlign: 'right',
            marginRight: '10px',
            paddingRight: '20px',
            marginLeft: '200px' 
          }}>
              <AsideTypography variant="h5" sx={{
                fontSize: '24px',
                height: '40px',
                marginBottom: '50px',
                display: 'flex',
                alignItems: 'center',
              }}>
                Find Work
              </AsideTypography>
            
            <AsideTypography variant='h6' sx={{
              fontSize: '20px',
            }}>
              Categories
            </AsideTypography>
            <AsideTypography>Front End Dev</AsideTypography>
            <AsideTypography>Design</AsideTypography>
            <AsideTypography>E-Commerce</AsideTypography>
          </ColumnBox>

          {/* right side */}
          <ColumnBox sx={{ 
            textAlign: 'left',
            marginLeft: '10px' 
          }}>
            <RowBox>              
              <Search sx={{
                borderColor: 'white', 
                backgroundColor: 'white', 
                width: '780px',
                marginBottom: '65px'
              }}>
                <StyledInputBase />
              </Search>
              <SearchButton>
                <SearchIcon />
              </SearchButton>
            </RowBox>
            <ColumnBox BGC='white'sx={{
              
            }}>
              <MainTypography sx={{
                paddingTop: '25px',
                fontSize: '20px'
              }}>
                Title
              </MainTypography>
              <MainTypography>AMOUNT</MainTypography>
              <MainTypography>TIME</MainTypography>
              <MainTypography>LOCATION</MainTypography>
              <MainTypography> kjashdfkjashdjkhas </MainTypography>
            </ColumnBox>
              
          </ColumnBox>
        </RowBox>

      </BodyBox>
    </Box>
  );
}
  