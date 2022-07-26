import { ColumnBox, MainTypography } from "./StyledComponents"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";

export default function JobBoard({ filteredJobs }) {
  return (
    <>
    { filteredJobs.map(job => {
      return (
        <ColumnBox 
        key={ job.id }
        BGC='white' 
        sx={{
        width: '100%', 
        height: 'auto',
        boxSizing: 'border-box',
        marginBottom: '3px'
        }}>
          <ColumnBox sx={{
            boxSizing: 'border-box',
            padding: '3% 3%'
          }}>
            <Link style={{color: '#666666', textDecoration: 'none'}} to={`/job/${job.id}`}>
              <MainTypography
              sx={{
              fontSize: '20px',
              paddingBottom: '25px'
              }}>
                
                {job.title}
              </MainTypography>
            </Link>  
            <MainTypography>
              Hourly: ${job.hourlyUSD}
            </MainTypography>
            <MainTypography>
              {job.postedTime}
            </MainTypography>
            <MainTypography>
              <LocationOnIcon sx={{
                color: '#39B54A', 
                fontSize: '15px'
              }}/>
              {job.remote ? 'remote, ' : ''}
              {job.location}
            </MainTypography>
            <MainTypography sx={{
              paddingTop: '10px', 
              fontSize: '13px'
            }}>
              this is the paragraph section in it we test the limits of the type of content that can be contained within this specific typography. We want to ensure that the page will grow in height to account for the specific length of this paragraph. We also would like to ensure that the right side padding of the container box that wraps the typography in this section is properly working so that we don't find out after the JSON file is pulled from that it isn't properly displayed.
            </MainTypography>
          </ColumnBox>
        </ColumnBox>
      )
    }) }
      
    </>
  );
}
  