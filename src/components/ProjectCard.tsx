import { Box, Card, Container, Grid, Typography, useTheme } from '@mui/material';
import { SiGithub } from 'react-icons/si';
import c from '../content/projectCards.json';
import profilePicture from '../pictures/profilePicture.jpg';
import IconHolder from './IconHolder';
import TechLabel from './TechLabel';

export interface ProjectCardProps {
    projectId: number
}

const ProjectCard = ({ projectId }: ProjectCardProps) => {

    const theme = useTheme();

    const content = c.projects[projectId];

    return (
        <>

            <a href={content.projectLink}>
                <Card sx={{ position: 'relative', height: .93, p: 2, border: '0px solid brown' }}>
                    <Grid alignItems="center"
                        container direction='column' rowSpacing={5}>
                        <Grid item>
                            <Typography variant='caption2'>
                                {content.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={profilePicture} alt="profilePicture" style={{ width: '75%' }} />
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
            </a >
            <Container sx={{ position: 'relative' }}>
                <Box bottom='20px' right='20px' sx={{ position: 'absolute', height: 40, zIndex: 2 }}>
                    <IconHolder size='40' link={content.repositoryLink} >
                        <SiGithub />
                    </IconHolder>
                </Box>
            </Container>
        </>
    )
}


export default ProjectCard