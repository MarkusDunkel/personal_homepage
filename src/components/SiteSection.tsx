import { Box, Card, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export interface SiteSectionProps {
    children: ReactNode;
}

const SiteSection = ({ children }: SiteSectionProps) => {

    const theme = useTheme();
    return (<Box sx={{
        width: 1, padding: 0, textAlign: 'center', display: 'flex', justifyContent: 'center', pb: 4, m: 0
    }} >
        {children}
    </Box>)
}
// style={{ background: theme.palette.gradients.bluePurple }}

export default SiteSection