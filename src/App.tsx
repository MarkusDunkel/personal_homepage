import {
  Box, ThemeProvider,
  Typography, useTheme
} from '@mui/material';
import { useRef, useState } from 'react';
import { SiGithub, SiLinkedin } from "react-icons/si";
import './App.css';
import { aboutMeText } from './components/content';
import ContentHolder from './components/ContentHolder';
import IconHolder from './components/IconHolder';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import SiteSection from './components/SiteSection';
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

        <NavBar about={about} project={project} contact={contact} setTabIndex={setTabIndex}
          tabIndex={tabIndex} />
        <Box sx={{ width: '100%' }}>
          <SiteSection>
            <ContentHolder>
              <img src={profilePicture} alt="profilePicture" style={{ width: '700px', }} />
              <Box height='500px' ref={about} id='about' sx={{ border: '2px solid green' }}>
                <Typography variant='body'>{aboutMeText}</Typography>
                <IconHolder link='https://linkedin.com/in/mdunkel/' >
                  <SiLinkedin />
                </IconHolder>
                <IconHolder link='https://github.com/MarkusDunkel' >
                  <SiGithub />
                </IconHolder>
              </Box>
            </ContentHolder>
          </SiteSection>
          <Box height='500px' ref={project} id='projects'>
            <Typography>The second tab</Typography>
          </Box>
          <Box height='500px' ref={contact} id='contact'>
            <Typography>The third tab</Typography>
          </Box>

        </Box>
      </Box >
    </ThemeProvider>
  );
}

export default App;
