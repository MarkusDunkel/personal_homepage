import { Box, Card } from '@mui/material';
import { ReactNode } from 'react';

export interface ContentHolderProps {
    children: ReactNode;
}

const ContentHolder = ({ children }: ContentHolderProps) => {
    return (<Box maxWidth='700px'>
        {children}
    </Box >)
}


export default ContentHolder