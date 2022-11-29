import './App.css';
import {ChakraProvider, Button, Flex } from '@chakra-ui/react'
import CardContainer from './components/Card'
import React, {useState} from 'react';
import TypeWriter from './components/TypeWriter';
import SocialMedias from './components/SocialMedias';
import About from './components/About';

function App() {
  const [contentStr, setContentStr] = useState('')
  const [content, setContent] = useState(<TypeWriter />)

  function handleNav(e) {
    // console.log("here")
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

  return (
    <ChakraProvider>
      <div>
        <div style={styles.navBtnContainer} >
          <Button style={styles.navBtn} variant='link' onClick={(e) => handleNav(e)}>Home</Button>
          <Button style={styles.navBtn} variant='link' onClick={(e) => handleNav(e)}>Projects</Button>
          <Button style={styles.navBtn} variant='link' onClick={(e) => handleNav(e)}>About</Button>
        </div>
        <Flex style={contentStr === 'Projects' ? styles.headingProjects : styles.heading} >
          {content}
        </Flex>
       <SocialMedias />
      </div>
    </ChakraProvider>
  );
}

export default App;


const styles = {
  heading: {
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  headingProjects: {
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
