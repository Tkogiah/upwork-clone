import { useParams } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Navbar from "./Navbar";
import { ColumnBox, LayoutBox, RowBox, AsideTypography, PrimaryButton,  } from "./StyledComponents";

export default function JobDetail( {allJobs}) {
  const params = useParams()

  let JOB_PARAMS = []
  for(let job of allJobs) {

    if(params.id == job.id) {
      JOB_PARAMS.push(job)
      console.log('we got it partner')
    }
  }
  
  //console.log(JOB_PARAMS)

  return (
    <ColumnBox>
      <Navbar />
      <LayoutBox>
        {JOB_PARAMS.map(job => (
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
                {job.title}
              </AsideTypography>
              <ColumnBox sx={{
              fontSize: '15px',
              padding: '35px 0px',
              borderBottom: '2px solid lightgrey'
              }}>
                <AsideTypography> 
                  {job.category}
                </AsideTypography>
                <AsideTypography> 
                  {job.postedTime}
                </AsideTypography>
                <RowBox>
                  <LocationOnIcon sx={{
                  color: '#39B54A',
                  fontSize: '20px',
                  paddingRight: '5px'
                  }}/>
                  <AsideTypography> 
                  {job.remote ? 'remote, ': ''}{job.location}
                  </AsideTypography>
                </RowBox>
              </ColumnBox>
              <ColumnBox sx={{
              fontSize: '15px',
              padding: '35px 0px',
              borderBottom: '2px solid lightgrey'
              }}>
                <AsideTypography>
                {job.description}
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
                          {job.location}
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
        ))}
        </LayoutBox>
    </ColumnBox>
  );
}