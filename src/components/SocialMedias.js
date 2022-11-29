import { Flex } from '@chakra-ui/react'
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";

const SocialMedias = () => {

    return (
        <Flex style={{padding: '75px', justifyContent: 'center' }}>
            <hr/>
            <a href="https://www.linkedin.com/in/nida-pervez/"><FaLinkedin style={styles.icons}/></a>
            <a href="https://github.com/pervezn"><FaGithub style={styles.icons} /></a>
            <a href="https://www.instagram.com/lemonade.rasta/"><FaInstagram  style={styles.icons}/></a>
            <hr/>
        </Flex>
    )
}

export default SocialMedias


const styles = {
    icons: {
      fontSize: '30px',
      color: "#1C77C3",
      margin: '20px'
    }
  }