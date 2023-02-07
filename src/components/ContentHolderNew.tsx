import { Box } from '@mui/material';
import { ReactNode } from 'react';

export interface ContentHolderNewProps {
    isMobile: boolean;
    children: ReactNode;
}

const ContentHolderNew = ({ children, isMobile }: ContentHolderNewProps) => {
    return (<>
        {
            isMobile ?
                <Box sx={{ width: '100%', border: '0px solid red' }}>{children}</Box> :
                <Box sx={{ width: 400, border: '0px solid red' }}>{children}</Box>
        }
    </>);
}

export default ContentHolderNew;