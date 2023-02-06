import { Box, Card, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export interface TechLabelProps {
    children: ReactNode;
}

const TechLabel = ({ children }: TechLabelProps) => {

    const theme = useTheme();
    return (<Card variant='outlined' sx={{ padding: 0.5 }} >
        {children}
    </Card >)
}


export default TechLabel