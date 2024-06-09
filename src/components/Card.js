import React, {useState} from 'react';
import { Box, Heading, Text, Flex} from '@chakra-ui/react'
import Links from './Links';
import data from "./data"
import Pill from "./Pill"


const Card = ({project}) => {
    const [hoverStyle, setHoverStyle] = useState(false)
    
    const colors = {
        'framework': "#6B9080",
        'tech': "#9D695A",
        'misc': "#2B2D42",
        'environment': "#B5B8BA"
    }
    const pillMap = {
      "React": 'tech', 
      "Chakra UI": 'framework',
      'Github Actions': 'environment',
      'Github Pages': 'environment',
      'Fly.io': 'environment',
      'Vercel': 'environment',
      'Spotify API': 'environment',
      'NextJS': 'tech',
      'Tailwind CSS': 'framework',
      'Shadcn/ui': 'framework',
      'Vercel AI SDK': 'misc'

    }
    

    return (
      <Box style={hoverStyle ? {...styles.cardWrapper, ...styles.hoverStyle} : styles.cardWrapper} 
            width={[300, 400, 500]} 
            margin={{sm: 'auto', base: 'auto', lg: 'auto', xl: 5}}
            flexShrink={0}
            onMouseEnter={() => setHoverStyle(true)}
            onMouseLeave={() => setHoverStyle(false)}
      >
        <Heading fontSize={{ base: '16px', md: '20px', lg: '24px' }}>{project.projectName}</Heading>
        <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} style={{paddingBottom: "10px", paddingTop: "10px", color: "#767C7F"}}>{project.description}</Text>
        <hr />
        <div style={{paddingTop: "20px"}}>
          <Flex shrink={1} wrap="wrap">
            {project.pills.map((pillText, key) => {
              return (
                <Pill key={key} color={colors[pillMap[pillText]]}>{pillText}</Pill>
              )})}
          </Flex>
           <Links project={project}/>
        </div>
      </Box>
    )
}

const CardContainer = () => {
    return (
        <Flex width={[400, 850, 1100]} style={styles.cardContainer} direction={['column', 'column', 'row']}>
            { 
              data.map((project, key) => { return (
                <Card key={key} 
                      project={project}
                />)
              })}
        </Flex>
    )

}

export default CardContainer

const styles = {
  cardWrapper: {
    height: "auto",
    borderRadius: "30px",
    padding: '30px 30px 90px 30px',
    backgroundColor: "#f3f1fd",
    marginTop: "40px",
    
  },
  cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '100px',
  },
  hoverStyle: {
    boxShadow: '1px 2px 9px #bbbbbf',
  },
  icons: {
    marginRight: '3px'
  }
}