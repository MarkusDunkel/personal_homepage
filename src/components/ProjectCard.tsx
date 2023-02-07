import { Box, Card, Container, Grid, Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { SiGithub } from 'react-icons/si';
import IconHolder from './IconHolder';
import TechLabel from './TechLabel';
import profilePicture from '../pictures/profilePicture.jpg';
import c from '../content/projectCards.json';
import { useMobileView } from './ContentHolderNew';


interface ProjectCardIsMobileProps {
    children: ReactNode;
}

const ProjectCardIsMobile = ({ children }: ProjectCardIsMobileProps) => {
    return (<Box sx={{
        width: '100%', border: '0px solid brown', bgcolor: 'orange'
    }}>
        {
            useMobileView() ?
                < Box sx={{ position: 'relative', width: 'calc(100%-20px)', m: 0, px: '20px', mb: 1, bgcolor: 'white', border: '1px solid blue' }}> {children}</Box > :
                <Card sx={{ position: 'relative', width: 300, p: 2, mb: 1, border: '1px solid blue' }}>{children}</Card>
        }
    </Box >);
}


export interface ProjectCardProps {
    projectId: number
}

const ProjectCard = ({ projectId }: ProjectCardProps) => {

    const theme = useTheme();

    const content = c.projects[projectId];

    return (
        <a href={content.projectLink}>
            <ProjectCardIsMobile>
                {/* <Box bottom='20px' right='20px' sx={{ position: 'absolute', height: 40 }}>
                    <IconHolder size='40' link={content.repositoryLink} >
                        <SiGithub />
                    </IconHolder>
                </Box> */}
                <Grid alignItems="center"
                    container direction='column' rowSpacing={5}>
                    <Grid item>
                        <Typography variant='caption2'>
                            {content.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={profilePicture} alt="profilePicture" style={{ maxWidth: '300px', }} />
                    </Grid>
                    <Grid item sx={{ textAlign: 'left' }}>
                        <Typography variant='body' >
                            {content.description}
                        </Typography>
                    </Grid>

                    <Grid item sx={{ textAlign: 'left' }}>
                        <Typography variant='body' >
                            <Grid container direction='row' spacing={2}>
                                {content.techStack.map(({ title }) => {
                                    console.log(title);
                                    return (
                                        <Grid item>
                                            <TechLabel>{title}</TechLabel>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Typography>
                    </Grid>
                </Grid>
            </ProjectCardIsMobile>
        </a >
    )
}


export default ProjectCard