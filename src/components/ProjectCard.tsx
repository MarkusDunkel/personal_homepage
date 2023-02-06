import { Box, Card, Grid, Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { SiGithub } from 'react-icons/si';
import IconHolder from './IconHolder';
import TechLabel from './TechLabel';
import profilePicture from '../pictures/profilePicture.jpg';

export interface ProjectCardProps {
    link: string
    repositoryLink: string
}

const ProjectCard = ({ link, repositoryLink }: ProjectCardProps) => {

    const theme = useTheme();
    return (
        <a href={link}>

            <Card sx={{ position: 'relative', maxWidth: 500, padding: 2 }}>

                <Box bottom='20px' right='20px' sx={{ position: 'absolute' }}>
                    <IconHolder size='40' link={repositoryLink} >
                        <SiGithub />
                    </IconHolder>
                </Box>
                <Grid alignItems="center"
                    container direction='column' rowSpacing={5}>
                    <Grid item>
                        <Typography variant='caption2'>
                            Personal Webpage
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={profilePicture} alt="profilePicture" style={{ maxWidth: '300px', }} />
                    </Grid>
                    <Grid item sx={{ textAlign: 'left' }}>
                        <Typography variant='body' >This some some project description. This some some project description. This some some project description. This some some project description.</Typography>
                    </Grid>

                    <Grid item sx={{ textAlign: 'left' }}>
                        <Typography variant='body' >
                            <Grid container direction='row' spacing={2}>
                                <Grid item>
                                    <TechLabel>React.js</TechLabel>
                                </Grid>
                                <Grid item>
                                    <TechLabel>TypeScript</TechLabel>
                                </Grid>

                            </Grid>
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </a>
    )
}


export default ProjectCard