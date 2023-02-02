import { Box, colors, createTheme, Tab, Tabs, ThemeProvider, Typography } from '@mui/material';
import type { PaletteOptions } from '@mui/material';
import { SyntheticEvent, useRef, useState } from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import SiteSection from './components/SiteSection';
import { defaultTheme } from './components/theme';
import { aboutMeText } from './components/content';
import profilePicture from './pictures/profilePicture.jpg'
import ContentHolder from './components/ContentHolder';
import NavBar from './components/NavBar';


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


  const [tabIndex, setTabIndex] = useState('about');


  return (
    <ThemeProvider theme={defaultTheme}>

      <Box>
        <ScrollToTop />

        <NavBar about={about} project={project} contact={contact} setTabIndex={setTabIndex} tabIndex={tabIndex} />
        <Box sx={{ width: '100%' }}>
          <SiteSection>
            <ContentHolder>
              <img src={profilePicture} alt="fireSpot" style={{ width: '700px', }} />
              <Box height='500px' ref={about} id='about' sx={{ border: '2px solid green' }}>
                <Typography variant='body'>{aboutMeText}</Typography>
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
