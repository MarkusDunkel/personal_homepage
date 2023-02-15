import { Box, Card, useTheme } from '@mui/material';
import React from 'react';
import { ReactNode } from 'react';
import { navBarHeight, vh } from './NavBar';

export interface SiteSectionProps {
    children: ReactNode;
}

const SiteSection = React.forwardRef(({ children }: SiteSectionProps, ref: any) => {

    const siteSectionMinHeight = vh(100) - navBarHeight;
    console.log('siteSectionMinHeight', siteSectionMinHeight);

    return (<Box ref={ref} sx={{
        width: 1, minHeight: siteSectionMinHeight, textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center', pb: 0, m: 0, border: '0px solid blue'
    }} >
        {/* <Box sx={{ height: 'calc(100vh - navBarHeight)' }}> */}

        {children}
        {/* </Box> */}
    </Box>)
})

export default SiteSection