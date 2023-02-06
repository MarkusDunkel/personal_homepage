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
              <ProjectCard projectId={0} />
              <ProjectCard projectId={1} />
              <ProjectCard projectId={2} />
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
