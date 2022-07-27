import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Navbar from "./Navbar";
import { ColumnBox, LayoutBox, RowBox, AsideTypography, PrimaryButton,  } from "./StyledComponents";

export default function JobDetail({allJobs}) {
  return (
    <ColumnBox>
      <Navbar />
      <LayoutBox>
            <RowBox sx={{
            width: '100%',
            boxSizing: 'border-box'
            }}>
                {/* LEFT SIDE CONTAINER */}
                <ColumnBox sx={{
                boxSizing: 'border-box',
                width: '65%',
                height: '100%', 
                fontSize: '15px',
                marginRight: '5%'
                }}>
                    <AsideTypography variant='h5' sx={{
                    fontSize: '30px',
                    color: '#666666',
                    paddingBottom: '35px',
                    borderBottom: '2px solid lightgrey'
                    }}>
                        Front End Software Developer
                    </AsideTypography>
                    <ColumnBox sx={{
                    fontSize: '15px',
                    padding: '35px 0px',
                    borderBottom: '2px solid lightgrey'
                    }}>
                      <AsideTypography> 
                          Front End Dev
                      </AsideTypography>
                      <AsideTypography> 
                          Front End Dev
                      </AsideTypography>
                      <AsideTypography> 
                          Front End Dev
                      </AsideTypography>
                    </ColumnBox>
                    <ColumnBox sx={{
                    fontSize: '15px',
                    padding: '35px 0px',
                    borderBottom: '2px solid lightgrey'
                    }}>
                      <AsideTypography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </AsideTypography> 
                    </ColumnBox>
                    
                    
                </ColumnBox>

                {/* RIGHT SIDE CONTAINER */}
                <ColumnBox sx={{
                width: '35%',
                height: 'auto'
                }}>
                  <ColumnBox BGC='white' sx={{
                  marginBottom: '3px',
                  padding: '25px',
                  alignItems: 'center'
                  }}>
                    <PrimaryButton sx={{
                     color: 'white',
                     fontSize: '15px',
                     border: "1px solid #39B54A",
                     marginBottom: '25px',
                     textTransform: 'none',
                     '&:hover': {
                      color: '#39B54A',
                    },
                    }} >
                      Submit a Proposal
                    </PrimaryButton>
                    <PrimaryButton sx={{
                     color: "#39B54A",
                     backgroundColor: 'white',
                     border: "1px solid #39B54A",
                     fontSize: '15px',
                     marginBottom: '25px',
                     textTransform: 'none'
                    }} >
                      <FavoriteBorderIcon sx={{paddingRight: '5px'}}/>
                      Save Job
                    </PrimaryButton>
                  </ColumnBox>
                  <ColumnBox BGC='white' sx={{
                  marginBottom: '3px',
                  padding: '40px',
                  alignItems: 'left',
                  justifyContent: 'space-evenly'
                  }}>
                    <AsideTypography sx={{fontWeight: 'bold'}}> 
                        About the client
                    </AsideTypography>
                    <RowBox sx={{margin: '15px 0px'}}>
                      <CheckCircleOutlineIcon sx={{
                      color: '#39B54A',
                      fontSize: '20px',
                      paddingRight: '5px'
                      }}/>
                      <AsideTypography > 
                        Payment Verified
                      </AsideTypography>
                    </RowBox>
                    <RowBox>
                      <LocationOnIcon sx={{
                      color: '#39B54A',
                      fontSize: '20px',
                      paddingRight: '5px'
                      }}/>
                      <AsideTypography sx={{paddingBottom: '0px'}}> 
                          United States
                      </AsideTypography>
                    </RowBox>
                  </ColumnBox>
                  <ColumnBox BGC='white' sx={{
                  marginBottom: '3px',
                  padding: '40px',
                  alignItems: 'left',
                  justifyContent: 'space-between'
                  }}>
                    <AsideTypography sx={{
                    paddingBottom: '10px'
                    }}> 
                        Job Link
                    </AsideTypography>
                    <AsideTypography sx={{
                    boxSizing: 'border-box',
                    backgroundColor: 'lightgray',
                    color: 'darkgray',
                    padding: '5px 15px'
                    }}> 
                        https://www.thisjob.com
                    </AsideTypography>
                    <AsideTypography  sx={{
                    paddingTop: '10px',
                    paddingBottom: '0px',
                    color: '#39B54A'
                    }}> 
                        Copy Link
                    </AsideTypography>
                  </ColumnBox>
                </ColumnBox>
            </RowBox>
        </LayoutBox>
    </ColumnBox>
  );
}