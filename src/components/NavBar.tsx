import { alpha, Box, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { MouseEventHandler, SyntheticEvent, useRef, useState } from "react";

export const getTabProps = (
    label: string,
    value: string,
) => {
    return {
        label: (
            <Typography className='tab-label' variant='label'>
                {label}
            </Typography>
        ),
        value: value
    };
};

export interface OnClickProps {
    event: React.MouseEvent<HTMLButtonElement>;
    value: string;
}


interface SiteSectionProps {
    about: any;
    project: any;
    contact: any;
    setTabIndex: (newTabIndex: string) => void;
    tabIndex?: string;
}
const NavBar = ({ about, project, contact, setTabIndex, tabIndex }: SiteSectionProps) => {

    const navBarHeight = 48;

    const theme = useTheme();

    const backgroundColor = alpha(theme.palette.neutrals.lightestGrey, 1)

    const scrollToSection = (
        newTabIndex: string
    ) => {
        console.log(newTabIndex);

        setTabIndex(newTabIndex);
        if (newTabIndex === 'about') {
            window.scrollTo({
                top: about.current.offsetTop,
                behavior: "smooth",
            });
        } else if (newTabIndex === 'project') {
            console.log("project.current.offsetTop", project.current.offsetTop);
            window.scrollTo({
                top: project.current.offsetTop,
                behavior: "smooth",
            });
        }
        else if (newTabIndex === 'contact') {
            window.scrollTo({
                top: contact.current.offsetTop,
                behavior: "smooth",
            });
        }
    }

    return (
        <Box sx={{ height: navBarHeight }}>


            <Tabs value={tabIndex}
                centered textColor='primary'
                TabIndicatorProps={{ style: { background: theme.palette.primary.main, height: 5 } }}
                sx={{
                    "& button:hover": { color: theme.palette.primary.main },
                    "& button:focus": { color: theme.palette.primary.main },
                    "& button:active": { color: theme.palette.primary.main },
                    "& button:Mui-selected": { color: theme.palette.primary.main },
                    "& button:Mui-active": { color: theme.palette.primary.main },
                    "& button:Mui-hover": { color: theme.palette.primary.main },
                    position: "fixed", left: '50%', transform: 'translate(-50%, 0)',
                    bgcolor: backgroundColor, width: '100%', height: navBarHeight, zIndex: 1000,
                    boxShadow: 3
                }}>
                <Tab onClick={() => scrollToSection('about')}
                    {...getTabProps(
                        'About Me', 'about'
                    )} />
                <Tab onClick={() => scrollToSection('project')}
                    {...getTabProps(
                        'Projects', 'project'
                    )} />
                <Tab onClick={() => scrollToSection('contact')}
                    {...getTabProps(
                        'Contact Me', 'contact'
                    )} />



            </Tabs>
        </Box >
    );
}

export default NavBar

// function color(white: any): string {
//     throw new Error("Function not implemented.");
// }
