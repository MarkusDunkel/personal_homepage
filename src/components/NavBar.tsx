import { Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useRef, useState } from "react";

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

interface SiteSectionProps {
    about: any;
    project: any;
    contact: any;
    setTabIndex: (newTabIndex: string) => void;
    tabIndex: string;
}
const NavBar = ({ about, project, contact, setTabIndex, tabIndex }: SiteSectionProps) => {



    const scrollToSection = (event: SyntheticEvent<Element, Event>, newTabIndex: string) => {
        setTabIndex(newTabIndex);
        if (newTabIndex === 'about') {
            window.scrollTo({
                top: about.current.offsetTop,
                behavior: "smooth",
            });
        } else if (newTabIndex === 'project') {
            window.scrollTo({
                top: project.current.offsetTop,
                behavior: "smooth",
            });
        }
        else {
            window.scrollTo({
                top: contact.current.offsetTop,
                behavior: "smooth",
            });
        }
    }

    return (
        <Tabs value={tabIndex} onChange={scrollToSection} centered sx={{ position: "fixed", left: '50%', transform: 'translate(-50%, 0)', }}>
            <Tab {...getTabProps(
                'About Me', 'about'
            )} />
            <Tab {...getTabProps(
                'Projects', 'project'
            )} />
            <Tab {...getTabProps(
                'Contact Me', 'contact'
            )} />



        </Tabs>
    );
}

export default NavBar