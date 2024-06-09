import './App.css';
import {ChakraProvider, Button, Flex, Box } from '@chakra-ui/react'
import CardContainer from './components/Card'
import React, {useState} from 'react';
import TypeWriter from './components/TypeWriter';
import SocialMedias from './components/SocialMedias';
import About from './components/About';

function App() {
  const [contentStr, setContentStr] = useState('')
  const [content, setContent] = useState(<TypeWriter />)

  function handleNav(e) {
    let target = e.target.innerText 
    setContentStr(target) 
    console.log(target)
    if(target === 'Home'){
      setContent(<TypeWriter />)
    } 
    if(target === 'Projects'){
      setContent(<CardContainer />)
    }
    if(target === 'About'){
      setContent(<About />)
    }
  }

  function handleStyle(str) {
    switch(str){
      case 'Projects': 
        console.log(str)
        return styles.projectHeading
      case 'About':
        console.log(str)
        return styles.aboutHeading
      default:
        return styles.homeHeading
    }
  }

  return (
    <ChakraProvider>
      <div>
        <div style={styles.navBtnContainer} >
          <Button style={styles.navBtn} variant='link' onClick={(e) => handleNav(e)}>Home</Button>
          <Button style={styles.navBtn} variant='link' onClick={(e) => handleNav(e)}>Projects</Button>
          <Button style={styles.navBtn} variant='link' onClick={(e) => handleNav(e)}>About</Button>
        </div>
        <Flex style={handleStyle(contentStr)} direction={"column"}>
          <Box>
          {content}
          </Box>
            <SocialMedias />
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;


const styles = {
  homeHeading: {
    justifyContent: "center",
    alignItems: "center", 
    width: "100vw",
    height: "100vh",
  },
  aboutHeading: {
    justifyContent: "center",
    alignItems: "center",
  },
  projectHeading: {
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    color: "blue",
  },
  navBtn:{
    padding: '5px',
    margin: '10px',
  },
  navBtnContainer :{
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: '10px',
  },
}
