import { Box } from "@mui/system";
import React from "react";
import { AsideTypography } from "./StyledComponents";

export function Categories({JOB_CATEGORIES, setCurrentCategory, currentCategory}) {
    
    return (
    <>    
        { JOB_CATEGORIES.map(category => (
            <Box key={category}>
                <AsideTypography
                sx={currentCategory === category ? {color: "#39B54A"}: {}}
                onClick={() => setCurrentCategory(category)}>    
                    {category}
                </AsideTypography>    
            </Box>
        ))}
    </>)
}
  