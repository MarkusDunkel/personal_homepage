import { Box, Card, useTheme } from '@mui/material';
import React from 'react';
import { ReactNode } from 'react';

export interface SiteSectionProps {
    children: ReactNode;
}

const SiteSection = React.forwardRef(({ children }: SiteSectionProps, ref: any) => {

    return (<Box ref={ref} sx={{
        width: 1, minHeight: '100vh', textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center', pb: 0, m: 0, border: '0px solid blue'
    }} >
        {children}
    </Box>)
})

export default SiteSection