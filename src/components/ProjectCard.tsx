import { Box, Card, Grid, Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { SiGithub } from 'react-icons/si';
import IconHolder from './IconHolder';
import TechLabel from './TechLabel';
import profilePicture from '../pictures/profilePicture.jpg';
import c from '../content/projectCards.json';



export interface ProjectCardProps {
    projectId: number
}

const ProjectCard = ({ projectId }: ProjectCardProps) => {

    const theme = useTheme();

    const content = c.projects[projectId];

    return (
        <a href={content.projectLink}>

            <Card sx={{ position: 'relative', maxWidth: 500, padding: 2 }}>

                <Box bottom='20px' right='20px' sx={{ position: 'absolute' }}>
                    <IconHolder size='40' link={content.repositoryLink} >
                        <SiGithub />
                    </IconHolder>
                </Box>
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
            </Card>
        </a>
    )
}


export default ProjectCard