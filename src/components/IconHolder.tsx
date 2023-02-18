import { Box, Grid, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { IconContext } from 'react-icons';

export interface IconHolderProps {

    link?: string;
    size: string;
    children: ReactNode;
}

const IconHolder = ({ link, size, children }: IconHolderProps) => {
    const theme = useTheme();
    return (
        <IconContext.Provider value={{
            color: theme.palette.action.selected,
            style: {
                fontSize: size
            },
            className: "global-class-name"
        }}>
            {/* <Box> */}
            <a href={link}>
                {children}
            </a>
            {/* </Box> */}

        </IconContext.Provider >
    )
}


export default IconHolder