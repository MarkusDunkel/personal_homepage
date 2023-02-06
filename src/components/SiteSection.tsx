import { Box, Card, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export interface SiteSectionProps {
    children: ReactNode;
}

const SiteSection = ({ children }: SiteSectionProps) => {

    const theme = useTheme();
    return (<Box sx={{
        padding: 0, textAlign: 'center', display: 'flex', justifyContent: 'center', pb: 4
    }} style={{ background: theme.palette.gradients.bluePurple }}>
        {children}
    </Box>)
}


export default SiteSection