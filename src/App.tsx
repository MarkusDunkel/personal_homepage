import {
  Box, Card, Grid, ThemeProvider,
  Typography, useTheme
} from '@mui/material';
import { useRef, useState } from 'react';
import { SiGithub, SiLinkedin } from "react-icons/si";
import './App.css';
import { aboutMeText } from './components/content';
import ContentHolder from './components/ContentHolder';
import IconHolder from './components/IconHolder';
import LinkSection from './components/LinkSection';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import ScrollToTop from './components/ScrollToTop';
import SiteSection from './components/SiteSection';
import TechLabel from './components/TechLabel';
import { defaultTheme } from './components/theme';
import profilePicture from './pictures/profilePicture.jpg';


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


function App() {
  const about: any = useRef<HTMLInputElement>(null);
  const project: any = useRef<HTMLInputElement>(null);
  const contact: any = useRef<HTMLInputElement>(null);
  const theme = useTheme();
  console.log(theme.palette.primary.light);
  const [tabIndex, setTabIndex] = useState('about');


  return (
    <ThemeProvider theme={defaultTheme}>

      <Box>
        <ScrollToTop />

        <NavBar about={about} project={project} contact={contact}
          setTabIndex={setTabIndex}
          tabIndex={tabIndex} />
        <Box sx={{ width: '100%' }}>
          <SiteSection>
            <ContentHolder>
              <Grid alignItems="center"
                container direction='column' rowSpacing={5}>

                <Grid item>
                  <img src={profilePicture} alt="profilePicture" style={{ width: '80%', maxWidth: '700px', }} />
                </Grid>
                <Grid item>
                  <Box ref={about} id='about'
                    sx={{ textAlign: 'left' }}>

                    <Typography variant='body'>{aboutMeText}</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <LinkSection>
                    <IconHolder size='40' link='https://linkedin.com/in/mdunkel/' >
                      <SiLinkedin />
                    </IconHolder>
                    <IconHolder size='40' link='https://github.com/MarkusDunkel' >
                      <SiGithub />
                    </IconHolder>
                  </LinkSection>
                </Grid>

              </Grid>
            </ContentHolder>
          </SiteSection>
          <Box minHeight='1000px' ref={project} id='projects'>
            <SiteSection>
              <ProjectCard link="https://orf.at" repositoryLink="https://github.com/MarkusDunkel/personal_homepage" />
              <a href="https://orf.at">
                <Card sx={{ position: 'relative', maxWidth: 500, padding: 2 }}>

                  <Box bottom='20px' right='20px' sx={{ position: 'absolute' }}>
                    <IconHolder size='40' link='https://github.com/MarkusDunkel/personal_homepage' >
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
            </SiteSection>
          </Box>
          <Box height='500px' ref={contact} id='contact'>
            <Typography>The third tab</Typography>
          </Box>

        </Box>
      </Box >
    </ThemeProvider >
  );
}

export default App;
