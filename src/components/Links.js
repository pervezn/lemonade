import React from 'react';
import { Text, Link,  } from '@chakra-ui/react'
import { FaGithub, } from "react-icons/fa";
import { BsBoxArrowInUpRight, BsJournalBookmarkFill } from "react-icons/bs";

const Links = ({project}) => {

    return (
        <>
            <Link href={project.githubLink} 
                    fontSize={{ base: '12px', md: '14px', lg: '16px' }} 
                    style={styles.link}
            >
                <FaGithub style={styles.icons} />
                <Text>Github</Text>
            </Link>
            <Link href={project.websiteLink} 
                    fontSize={{ base: '12px', md: '14px', lg: '16px' }} 
                    style={styles.link}
            >
                <BsBoxArrowInUpRight style={styles.icons}/>
                <Text>Demo</Text>
            </Link>
            <Link href={project.blogLink} 
                    fontSize={{ base: '12px', md: '14px', lg: '16px' }} 
                    style={styles.link}
            >
                <BsJournalBookmarkFill style={styles.icons}/>
                <Text>Blog</Text>
            </Link>
        </>
    )
}

export default Links

const styles = {
    icons: {
      marginRight: '3px'
    },
    link: {
      display: "flex",  
      alignItems: 'center', 
      color: "#1C77C3"
    }
  }