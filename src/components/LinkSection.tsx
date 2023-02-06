import { Box, Card, Grid, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export interface LinkSectionProps {
    children: ReactNode;
}

const LinkSection = ({ children }: LinkSectionProps) => {

    const theme = useTheme();
    return (
        <Grid container direction='row' justifyContent='center' spacing='70' >

            {children}

        </Grid >
    )
}


export default LinkSection