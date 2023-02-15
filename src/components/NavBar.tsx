import { alpha, Box, Tab, Tabs, Typography, useTheme } from "@mui/material";

export function vh(percent: number) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}

export const navBarHeight = 48;

export const getTabProps = (
    label: string,
    value: string,
) => {
    return {
        label: (
            <Typography variant='label'>
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
    setTabIndex: (newTabIndex: string | Boolean) => void;
    tabIndex?: string | Boolean;
}
const NavBar = ({ about, project, contact, setTabIndex, tabIndex }: SiteSectionProps) => {

    const theme = useTheme();

    const backgroundColor = alpha(theme.palette.neutrals.lightestGrey, 1)

    const scrollToSection = (
        newTabIndex: string
    ) => {
        // console.log(newTabIndex);

        // setTabIndex(newTabIndex);
        if (newTabIndex === 'about') {
            window.scrollTo({
                top: about.current.offsetTop - navBarHeight,
                behavior: "smooth",
            });
        } else if (newTabIndex === 'project') {
            window.scrollTo({
                top: project.current.offsetTop - navBarHeight,
                behavior: "smooth",
            });
        }
        else if (newTabIndex === 'contact') {
            window.scrollTo({
                top: contact.current.offsetTop - navBarHeight,
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
                    // "& button:hover": { color: theme.palette.primary.light },
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
