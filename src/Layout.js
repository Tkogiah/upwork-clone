import { Categories } from './Categories';
import { SearchLayout } from './SearchLayout';
import { RowBox, LayoutBox, ColumnBox, AsideTypography } from "./StyledComponents"
import { useState } from 'react';

import Navbar from "./Navbar";
import JobBoard from "./JobBoard";


export default function Layout({ allJobs }) {
    const[currentCategory, setCurrentCategory] = useState(allJobs)

    const JOB_CATEGORIES = []
    const FILTERED_JOBS = []

    for(let job of allJobs) {
        if(!JOB_CATEGORIES.includes(job.category)) {
            JOB_CATEGORIES.push(job.category)
        }
    }
    for(let job of allJobs) {
        if (job.category === currentCategory) {
            FILTERED_JOBS.push(job)
        }
    }
    console.log(FILTERED_JOBS)
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
                    <AsideTypography
                    onClick={() => setCurrentCategory(allJobs)}
                    sx={
                    currentCategory === allJobs 
                    ? {color: "#39B54A", fontSize: '20px'}
                    : {fontSize: '20px'} 
                    }
                    > 
                        Categories
                    </AsideTypography>
                    <Categories 
                    JOB_CATEGORIES={ JOB_CATEGORIES }
                    setCurrentCategory={ setCurrentCategory}
                    currentCategory={currentCategory}
                    />
                </ColumnBox>

                {/* RIGHT SIDE CONTAINER */}
                <ColumnBox sx={{
                width: '85%',
                height: 'auto'
                }}>
                    <SearchLayout     />
                    {currentCategory === allJobs
                        ?<JobBoard filteredJobs={ allJobs }/>
                        :<JobBoard filteredJobs={ FILTERED_JOBS }/>
                    }
                </ColumnBox>
            </RowBox>
        </LayoutBox>
    </ColumnBox>
  );
}
  
    