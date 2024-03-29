import { Avatar, Box, Card, Container, Grid, Typography, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import { SiGithub } from 'react-icons/si';
import c from '../content/projectCards.json';
import titleImg1 from '../pictures/titleImg1.png';
import titleImg2 from '../pictures/titleImg2.png';
import titleImg3 from '../pictures/titleImg3.png';
import IconHolder from './IconHolder';
import { palette } from './palette';
import TechLabel from './TechLabel';



export interface ProjectCardProps {
    projectId: number
}

const ProjectCard = ({ projectId }: ProjectCardProps) => {

    const theme = useTheme();

    const content: any = c.projects.find(x => x.id === projectId)

    let titleImage: any = titleImg1;

    if (content.id === 0) { titleImage = titleImg2 }
    else if (content.id === 1) { titleImage = titleImg1 }
    else if (content.id === 2) { titleImage = titleImg3 }

    return (
        <>

            <a href={content.projectLink}>
                <Card sx={{ position: 'relative', height: .93, p: 2, bgcolor: 'rgba(255, 255, 255, .7)' }}>
                    <Stack spacing={2}>
                        <Typography variant='caption2'>
                            {content.title}
                        </Typography>
                        <Card variant='outlined' sx={{ textAlign: 'left', padding: 0, bgcolor: theme.palette.neutrals.lightestGrey }}>
                            <Stack spacing={0}>
                                <Box sx={{ height: 160, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                                    <img src={titleImage} alt="titleImage" style={{
                                        width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: 0,
                                        overflowY: 'auto'
                                    }} />
                                </Box>
                                <Box sx={{ height: 96, overflow: 'auto', display: 'flex', px: .5, alignItems: 'center', textAlign: 'justify' }}>
                                    <Typography variant='label2' sx={{ textAlign: 'justify', border: '0px solid orange' }}>
                                        {content.description}
                                    </Typography>
                                </Box>

                            </Stack>
                        </Card>
                        <Typography variant='body' sx={{ textAlign: 'left' }} >
                            <Grid container direction='row' spacing={2}>
                                {content.techStack.map(({ title }: any) => {
                                    return (
                                        <Grid item>
                                            <TechLabel>{title}</TechLabel>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Typography>
                    </Stack>
                </Card>
            </a >
            <Container sx={{ position: 'relative' }}>
                <Box bottom={18} right='20px' sx={{ position: 'absolute', height: 40, zIndex: 2 }}>
                    <IconHolder size='calc(45px)' link={content.repositoryLink} >
                        <SiGithub />
                    </IconHolder>
                </Box>
            </Container>
        </>
    )
}

export default ProjectCard