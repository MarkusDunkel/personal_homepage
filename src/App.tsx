import {
  Box, CircularProgress, Grid, ThemeProvider,
  Typography, useMediaQuery, useTheme
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { FiPhone, FiSend } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import './App.css';
import { aboutMeText } from './components/content';
import ContentHolderNew from './components/ContentHolderNew';
import IconHolder from './components/IconHolder';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import ScrollToTop from './components/ScrollToTop';
import SiteSection from './components/SiteSection';
import { defaultTheme } from './components/theme';
//import profilePicture from './pictures/profilePicture.jpg';
import profPic from './pictures/profPic.png';
// import background from './pictures/background.jpg';
import React from 'react';
import background from './pictures/background.png';
//import Background from './components/LazyBackground';
// import { setTimeout } from "timers/promises";

// const Background = React.lazy(() => import('./components/LazyBackground'));

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

  useEffect(() => {
    cacheBackground();
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  const cacheBackground = async () => {
    let bgPromise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = background;
      img.onload = () => { resolve() };
      img.onerror = () => { reject() };
    })

    await bgPromise;

    setTimeout(() => { setIsLoading(false); }, 1000);
    // setIsLoading(false);
  };


  const isMobile = useMobileView();
  const about: any = useRef<HTMLInputElement>(null);
  const project: any = useRef<HTMLInputElement>(null);
  const contact: any = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  const [tabIndex, setTabIndex] = useState('about');


  return (
    <div>
      {isLoading ?
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', border: '0px solid orange' }} >
          <CircularProgress />
        </Box>
        :
        < ThemeProvider theme={defaultTheme} >
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: "fixed", zIndex: '-1', bgcolor: 'blue' }}>
              <img src={background} alt="background" style={{ height: 'max(100vh , 60vw)', opacity: .8, filter: 'blur(0px)' }} />
            </Box>
            {/* <React.Suspense>
          <Background />
        </React.Suspense> */}
            < ScrollToTop />
            <NavBar about={about} project={project} contact={contact}
              setTabIndex={setTabIndex}
              tabIndex={tabIndex} />

            <SiteSection>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Box sx={{ height: '0' }}></Box>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Box sx={{
                    position: 'relative',
                    zIndex: '10',
                    height: '100vh'
                  }}></Box>
                  <Box sx={{ position: 'absolute', maxWidth: '44%', border: '0px solid orange', top: '30vh', right: '52%' }}>
                    <Box sx={{ textAlign: 'right', color: 'white', border: '0px solid orange' }}><Typography className='lineUp' sx={{ fontSize: 'calc(14px + 1.5vw)' }}>Markus Dunkel, MSc</Typography></Box>
                  </Box>
                  <Box sx={{ position: 'absolute', maxWidth: '44%', border: '0px solid orange', top: '35vh', left: '52%', color: 'white' }}>
                    <Box sx={{ textAlign: 'left' }}>
                      <Typography className='lineUp' sx={{ animationDelay: '.7s', fontSize: 'calc(14px + 1vw)' }}>Frontend - React.js - Typescript - Git - Docker - Python - SQL</Typography>
                      <Typography className='lineUp' sx={{ animationDelay: '1.4s', fontSize: 'calc(14px + 1vw)', mt: '4vh' }}>Climate Physics</Typography>
                      <Typography className='lineUp' sx={{ animationDelay: '2.1s', fontSize: 'calc(14px + 1vw)', mt: '4vh' }}>Meteorology</Typography>
                      <Box className='lineUp' sx={{ animationDelay: '2.8s', display: 'flex', gap: '8%', border: '0px solid orange', mt: '4vh' }}>
                        <IconHolder size='calc(40px + 2vw)' link='https://linkedin.com/in/mdunkel/' >
                          <SiLinkedin />
                        </IconHolder>
                        <IconHolder size='calc(40px + 2vw)' link='https://github.com/MarkusDunkel' >
                          <SiGithub />
                        </IconHolder>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Box sx={{ border: '0px solid orange', height: '100vh' }}></Box>
                </Grid>
              </Grid>
            </SiteSection>

            <SiteSection>
              <Grid container spacing={0}>
                <Grid item xs={6} md={6}>
                  <Box sx={{ borderRight: 0, height: '100vh' }}></Box>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Box sx={{ border: '0px solid orange', height: '100vh' }}></Box>
                </Grid>
              </Grid>
            </SiteSection>

            <SiteSection>
              <Box sx={{ display: 'flex', border: '0px solid orange', justifyContent: 'center', gap: '2vw', width: .9, flexWrap: 'wrap' }}>
                <Box sx={{ border: '0px solid red' }}><img src={profPic} alt="profPic" style={{ maxWidth: '700px', }} /></Box>

                <Box ref={about} id='about' sx={{ display: 'flex', textAlign: 'left', border: '0px solid red', p: .5, width: '100%', maxWidth: 700, bgcolor: 'rgba(0, 0, 0, 0.2)', alignContent: 'center' }}>
                  <Typography variant='body' sx={{ my: 'auto', color: 'white' }}>{aboutMeText}</Typography>
                </Box>

              </Box>
            </SiteSection>

            <SiteSection>
              <Grid container spacing={0}>
                <Grid item xs={6} md={6}>
                  <Box sx={{ borderRight: 0, height: '100vh' }}></Box>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Box sx={{ border: '0px solid orange', height: '100vh' }}></Box>
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
                  <Box sx={{ borderRight: 0, height: '100vh' }}></Box>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Box sx={{ border: '0px solid orange', height: '100vh' }}></Box>
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


      }</div >
  );
};

export default App;
