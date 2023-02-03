import { useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { IconContext } from 'react-icons';

export interface IconHolderProps {

    link: string;
    children: ReactNode;
}

const IconHolder = ({ link, children }: IconHolderProps) => {
    const theme = useTheme();
    return (
        <IconContext.Provider value={{
            color: theme.palette.action.selected, size: '40',
            className: "global-class-name"
        }}>
            <a href={link}>
                {children}
            </a>

        </IconContext.Provider>
    )
}


export default IconHolder