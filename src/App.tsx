import {
  Box, Card, Grid, ThemeProvider,
  Typography, useMediaQuery, useTheme
} from '@mui/material';
import { useRef, useState } from 'react';
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiSend, FiPhone } from "react-icons/fi";
import './App.css';
import { aboutMeText } from './components/content';
import ContentHolder from './components/ContentHolder';
import ContentHolderNew from './components/ContentHolderNew';
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

export const useMobileView = () => {
  const matches = useMediaQuery('(max-width:400px)');
  return (matches);
};

function App() {

  const isMobile = useMobileView();
  const about: any = useRef<HTMLInputElement>(null);
  const project: any = useRef<HTMLInputElement>(null);
  const contact: any = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  const [tabIndex, setTabIndex] = useState('about');


  return (
    <ThemeProvider theme={defaultTheme}>

      <Box>
        <ScrollToTop />
        <NavBar about={about} project={project} contact={contact}
          setTabIndex={setTabIndex}
          tabIndex={tabIndex} />

        <SiteSection>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box sx={{ borderTop: 1, height: '0' }}></Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box sx={{ position: 'relative', borderRight: 1, height: '100vh' }}></Box>
              <Box sx={{ position: 'absolute', maxWidth: '300px', border: '0px solid orange', top: '40vh', right: '52%' }}>
                <Box sx={{ textAlign: 'right' }}>Markus Dunkel, MSc</Box>
              </Box>
              <Box sx={{ position: 'absolute', maxWidth: '300px', border: '0px solid orange', top: '45vh', left: '52%' }}>
                <Box sx={{ textAlign: 'left' }}>Frontend - React.js - Typescript - Git - Docker - Python - SQL</Box>
              </Box>
              <Box sx={{ position: 'absolute', maxWidth: '300px', border: '0px solid orange', top: '65vh', left: '52%' }}>
                <Box sx={{ textAlign: 'left' }}>Climate Physics</Box>
              </Box>
              <Box sx={{ position: 'absolute', maxWidth: '300px', border: '0px solid orange', top: '80vh', left: '60%' }}>
                <Box sx={{ textAlign: 'left' }}>Meteorology</Box>
              </Box>
              <Box sx={{ position: 'absolute', maxWidth: '300px', border: '0px solid orange', top: '75vh', right: '52%' }}>
                <IconHolder size='40' link='https://linkedin.com/in/mdunkel/' >
                  <SiLinkedin />
                </IconHolder>
              </Box>
              <Box sx={{ position: 'absolute', maxWidth: '300px', border: '0px solid orange', top: '85vh', right: '52%' }}>
                <IconHolder size='40' link='https://github.com/MarkusDunkel' >
                  <SiGithub />
                </IconHolder>
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box sx={{ border: '0px solid orange', height: '100vh' }}></Box>
            </Grid>
          </Grid>
        </SiteSection>

        <SiteSection>
          <Grid container spacing={0}>
            <Grid item xs={12} md={10}>
              <Box sx={{ border: '0px solid orange' }}><img src={profilePicture} alt="profilePicture" style={{ width: '80%', maxWidth: '700px', }} /></Box>
            </Grid>
            <Grid item xs={0} md={4}>
              <Box sx={{ border: '0px solid orange' }}>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box ref={about} id='about' sx={{ textAlign: 'left', border: '0px solid orange', p: 2 }}>
                <Typography variant='body'>{aboutMeText}</Typography>
              </Box>
            </Grid>
            <Grid item xs={0} md={3}>
              <Box sx={{ border: '0px solid orange' }}>
              </Box>
            </Grid>
          </Grid>
        </SiteSection>

        <SiteSection>
          <Grid container spacing={0}>
            <Grid item xs={6} md={6}>
              <Box sx={{ borderRight: 1, height: '60vh' }}></Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box sx={{ border: '0px solid orange', height: '60vh' }}></Box>
            </Grid>
          </Grid>
        </SiteSection>

        <Box ref={project} id='projects'>
          <SiteSection>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row-reverse', justifyContent: 'center', padding: 0, margin: 0, rowGap: '30px', columnGap: '20px' }}>
              <ContentHolderNew isMobile={isMobile}>
                <ProjectCard projectId={0} />
              </ContentHolderNew>
              <ContentHolderNew isMobile={isMobile}>
                <ProjectCard projectId={1} />
              </ContentHolderNew>
              <ContentHolderNew isMobile={isMobile}>
                <ProjectCard projectId={2} />
              </ContentHolderNew>
            </Box>
          </SiteSection>
        </Box>

        <SiteSection>
          <Grid container spacing={0}>
            <Grid item xs={6} md={6}>
              <Box sx={{ borderRight: 1, height: '60vh' }}></Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box sx={{ border: '0px solid orange', height: '60vh' }}></Box>
            </Grid>
          </Grid>
        </SiteSection>

        <Box height='100vh' ref={contact} id='contact'>
          <Box textAlign='center' mt={20}>
            <IconHolder size='40' link='https://github.com/MarkusDunkel' >
              <FiSend />
            </IconHolder>
            mrks.dunkel@gmail.com
          </Box>
          <Box textAlign='center' mt={15}>
            <IconHolder size='40' link='https://github.com/MarkusDunkel' >
              <FiPhone />
            </IconHolder>
            +43 676 4807812
          </Box>
        </Box>
      </Box>

    </ThemeProvider >
  );
}

export default App;
