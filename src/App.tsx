import { Box, Tab, Tabs, Typography } from '@mui/material';
import { SyntheticEvent, useRef, useState } from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';



function App() {
  const about: any = useRef<HTMLInputElement>(null);
  const project: any = useRef<HTMLInputElement>(null);
  const contact: any = useRef<HTMLInputElement>(null);

  console.log("contact", contact);


  const [tabIndex, setTabIndex] = useState('about');


  const scrollToSection = (event: SyntheticEvent<Element, Event>, newTabIndex: string) => {
    setTabIndex(newTabIndex);
    console.log({ event });
    console.log("newTabIndex", newTabIndex);

    if (newTabIndex === 'about') {
      window.scrollTo({
        top: about.current.offsetTop,
        behavior: "smooth",
      });
    } else if (newTabIndex === 'project') {
      window.scrollTo({
        top: project.current.offsetTop,
        behavior: "smooth",
      });
    }
    else {
      window.scrollTo({
        top: contact.current.offsetTop,
        behavior: "smooth",
      });
    }
  }
  console.log("tabIndex", tabIndex);
  return (
    <Box>
      <ScrollToTop />
      <Tabs value={tabIndex} onChange={scrollToSection} centered>
        <Tab value='about' label="About me" />
        <Tab value='project' label="Projects" />
        <Tab value='contact' label="Contact Me" />
      </Tabs>
      <Box sx={{ padding: 2 }}>

        <Box height='500px' ref={about} id='about'>
          <Typography>The first tab</Typography>
        </Box>
        <Box height='500px' ref={project} id='projects'>
          <Typography>The second tab</Typography>
        </Box>
        <Box height='500px' ref={contact} id='contact'>
          <Typography>The third tab</Typography>
        </Box>

      </Box>
    </Box >
  );
}

export default App;
