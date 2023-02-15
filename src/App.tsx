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
import NavBar, { vh } from './components/NavBar';
import SiteSection from './components/SiteSection';
import ProjectCard from './components/ProjectCard';
import ScrollToTop from './components/ScrollToTop';
import SpaceBetweenSections from './components/SpaceBetweenSections';
import background from './pictures/background.png';
import profPic from './pictures/profPic.png';
import TabActivationByScroll from './components/TabActivationByScroll';

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
  return (useMediaQuery('(max-width:400px)'));
};

function App() {

  useEffect(() => {
    cacheBackground();
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    function handleResize() {
      console.log('Oh its a resize!')
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

    }

    window.addEventListener('resize', handleResize)
  }, [])

  const cacheBackground = async () => {
    let bgPromise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = background;
      img.onload = () => { resolve() };
      img.onerror = () => { reject() };
    })

    await bgPromise;

    setTimeout(() => { setIsLoading(false); }, 0);
  };


  const isMobile = useMobileView();
  const about: any = useRef<HTMLInputElement>(null);
  const project: any = useRef<HTMLInputElement>(null);
  const contact: any = useRef<HTMLInputElement>(null);

  const theme = useTheme();

  const [tabIndex, setTabIndex] = useState<string | Boolean>(false);


  return (
    <>
      {isLoading ?
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', border: '0px solid orange' }} >
          <CircularProgress />
        </Box>
        :
        <Box sx={{ position: 'relative', border: '0px solid red' }}>
          <Box sx={{ position: "fixed", zIndex: '-1', bgcolor: theme.palette.neutrals.background }}>
            <img src={background} alt="background" style={{ height: 'max(100vh , 60vw)', opacity: .8, filter: 'blur(0px)' }} />
          </Box>

          < ScrollToTop />
          <NavBar about={about} project={project} contact={contact}
            setTabIndex={setTabIndex}
            tabIndex={tabIndex} />

          <SpaceBetweenSections>
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
                    <Typography className='lineUp' sx={{ animationDelay: '.3s', fontSize: 'calc(14px + 1vw)' }}>Frontend - React.js - Typescript - Git - Docker - Python - SQL</Typography>
                    <Typography className='lineUp' sx={{ animationDelay: '.6s', fontSize: 'calc(14px + 1vw)', mt: '4vh' }}>Climate Physics</Typography>
                    <Typography className='lineUp' sx={{ animationDelay: '.9s', fontSize: 'calc(14px + 1vw)', mt: '4vh' }}>Meteorology</Typography>
                    <Box className='lineUp' sx={{ animationDelay: '1.2s', display: 'flex', gap: '8%', border: '0px solid orange', mt: '4vh' }}>
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
          </SpaceBetweenSections>

          <SpaceBetweenSections><></></SpaceBetweenSections>

          <SiteSection ref={about}>
            <Box sx={{ display: 'flex', border: '0px solid red', justifyContent: 'center', gap: '2vw', width: .9, flexWrap: 'wrap' }}>
              <Box sx={{ border: '0px solid red' }}><img src={profPic} alt="profPic" style={{ maxWidth: '700px', }} /></Box>

              <Box id='about' sx={{ display: 'flex', textAlign: 'left', border: '0px solid red', p: .5, width: '100%', maxWidth: 700, bgcolor: 'rgba(0, 0, 0, 0.2)', alignContent: 'center' }}>
                <Typography variant='body' sx={{ my: 'auto', color: 'white' }}>{aboutMeText}</Typography>
              </Box>

            </Box>
          </SiteSection>

          <SpaceBetweenSections><></></SpaceBetweenSections>

          <SiteSection ref={project}>
            <Box sx={{
              display: 'flex', flexWrap: 'wrap', flexDirection: 'row-reverse',
              justifyContent: 'center', padding: 0, margin: 0, rowGap: '30px', columnGap: '20px'
            }}>
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

          <SpaceBetweenSections><></></SpaceBetweenSections>

          <SiteSection ref={contact}>
            <Box sx={{ border: '0px solid green' }}>
              <Box textAlign='center' mt={0}>
                <IconHolder size='40' link='https://github.com/MarkusDunkel' >
                  <FiSend />
                </IconHolder>
                <Typography variant='body' sx={{ my: 'auto', color: 'white' }}>mrks.dunkel@gmail.com</Typography>
              </Box>
              <Box textAlign='center' mt={15}>
                <IconHolder size='40' link='https://github.com/MarkusDunkel' >
                  <FiPhone />
                </IconHolder>
                <Typography variant='body' sx={{ my: 'auto', color: 'white' }}>+43 676 4807812</Typography>
              </Box>
            </Box>
          </SiteSection>

          <SpaceBetweenSections><></></SpaceBetweenSections>

          < TabActivationByScroll sections={[about, project, contact]} setTabIndex={setTabIndex} />
        </Box>

      }</>
  );
};
export default App;
