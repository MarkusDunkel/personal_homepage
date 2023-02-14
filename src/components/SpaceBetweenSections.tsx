import { Box, Card, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export interface SpaceBetweenSectionsProps {
    children: ReactNode;
}

const SpaceBetweenSections = ({ children }: SpaceBetweenSectionsProps) => {

    const theme = useTheme();
    return (<Box sx={{
        width: 1, height: '100vh', display: 'flex', justifyContent: 'center', border: '5px solid brown'
    }} >
        {children}
    </Box>)
}
// style={{ background: theme.palette.gradients.bluePurple }}

export default SpaceBetweenSections