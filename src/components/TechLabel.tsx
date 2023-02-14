import { Box, Card, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export interface TechLabelProps {
    children: ReactNode;
}

const TechLabel = ({ children }: TechLabelProps) => {
    const theme = useTheme();

    return (<Card variant='elevation' sx={{ padding: 0.5, bgcolor: theme.palette.neutrals.lightestBlue }} >
        {children}
    </Card >)
}


export default TechLabel