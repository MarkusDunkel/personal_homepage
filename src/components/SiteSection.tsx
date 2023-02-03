import { Box, Card, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export interface SiteSectionProps {
    children: ReactNode;
}

const SiteSection = ({ children }: SiteSectionProps) => {

    const theme = useTheme();
    return (<Card variant="elevation" sx={{
        padding: 0, textAlign: 'center', display: 'flex', justifyContent: 'center'
    }} style={{ background: theme.palette.gradients.bluePurple }}>
        {children}
    </Card >)
}


export default SiteSection