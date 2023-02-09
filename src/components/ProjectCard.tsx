import { Avatar, Box, Card, Container, Grid, Typography, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
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
                <Card sx={{ position: 'relative', height: .93, p: 2, border: '0px solid brown', bgcolor: 'rgba(255, 255, 255, .7)' }}>
                    <Stack spacing={2}>
                        {/* <Grid alignItems="center" container direction='column' rowSpacing={5}> */}
                        {/* <Grid item> */}
                        <Typography variant='caption2'>
                            {content.title}
                        </Typography>
                        {/* </Grid> */}
                        {/* <Grid item> */}
                        {/* </Grid> */}
                        {/* <Grid item sx={{ textAlign: 'left' }}> */}
                        <Card variant='outlined' sx={{ textAlign: 'left', padding: 0, minHeight: 270, bgcolor: 'rgba(255, 255, 255, .2)' }}>
                            <Stack spacing={1}>
                                <Box sx={{ border: '0px solid orange', height: 160, overflow: 'hidden', display: 'block' }}>
                                    <img src={profilePicture} alt="profilePicture" style={{
                                        width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'
                                    }} />
                                </Box>
                                <Typography variant='label' sx={{ textAlign: 'left', border: '0px solid orange', px: .5 }}>
                                    {content.description}
                                </Typography>

                            </Stack>
                        </Card>
                        {/* </Grid> */}

                        {/* <Grid item sx={{ textAlign: 'left' }}> */}
                        <Typography variant='body' sx={{ textAlign: 'left' }} >
                            <Grid container direction='row' spacing={2}>
                                {content.techStack.map(({ title }) => {
                                    return (
                                        <Grid item>
                                            <TechLabel>{title}</TechLabel>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Typography>
                        {/* </Grid> */}
                        {/* </Grid> */}
                    </Stack>
                </Card>
            </a >
            <Container sx={{ position: 'relative' }}>
                <Box bottom={22} right='20px' sx={{ position: 'absolute', height: 40, zIndex: 2 }}>
                    <IconHolder size='45' link={content.repositoryLink} >
                        <Avatar sx={{ bgcolor: 'rgba(0, 0, 50, .2)', width: '54px', height: '54px' }}>
                            <SiGithub />
                        </Avatar>
                    </IconHolder>
                </Box>
            </Container>
        </>
    )
}


export default ProjectCard