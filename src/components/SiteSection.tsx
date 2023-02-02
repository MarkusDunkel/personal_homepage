import { Box, Card } from '@mui/material';
import { ReactNode } from 'react';

export interface SiteSectionProps {
    children: ReactNode;
}

const SiteSection = ({ children }: SiteSectionProps) => {
    return (<Card variant="elevation" sx={{
        border: 'solid 1px black', bgcolor: 'secondary.main', padding: 0, textAlign: 'center', display: 'flex', justifyContent: 'center'
    }}>
        {children}
    </Card >)
}


export default SiteSection