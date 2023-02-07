import { Box, Card, Container, CssBaseline, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';

export const useMobileView = () => {
    const matches = useMediaQuery('(max-width:500px)');
    return (matches);
};

export interface ContentHolderNewProps {
    children: ReactNode;
}


const ContentHolderNew = ({ children }: ContentHolderNewProps) => {

    console.log('useMobileView()', useMobileView());

    return (<div>
        {
            useMobileView() ?
                <Box sx={{
                    border: '1px solid red'
                }}>{children}</Box> :
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row-reverse', justifyContent: 'center', padding: 0, margin: 'auto', border: '3px solid green' }}>{children}</Box>
        }
    </div >);

}


export default ContentHolderNew;