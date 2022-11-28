import React, {useState} from 'react';
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'


const Card = () => {
    const [hoverStyle, setHoverStyle] = useState(false)

    return (
      <Box style={hoverStyle ? {...styles.cardWrapper, ...styles.hoverStyle} : styles.cardWrapper} 
            width={[300, 400, 500]} 
            margin={{sm: 'auto', base: 'auto', lg: 'auto', xl: 5}}
            flexShrink={0}
            onMouseEnter={() => setHoverStyle(true)}
            onMouseLeave={() => setHoverStyle(false)}
      >
        <Heading fontSize={{ base: '16px', md: '24px', lg: '30px' }}>Test</Heading>
        <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} style={{paddingBottom: "10px"}}>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        <hr />
        <div style={{paddingTop: "20px"}}>
          <Button fontSize={{ base: '12px', md: '14px', lg: '16px' }} 
                  style={{display: "block"}} variant='ghost'
          >Github</Button>
          <Button fontSize={{ base: '12px', md: '14px', lg: '16px' }}
           style={{display: "block"}} variant='ghost'
          >Instagram</Button>
        </div>
      </Box>
    )
}

const CardContainer = () => {
    return (
        <Flex width={[400, 850, 1100]} style={styles.cardContainer} direction={['column', 'column', 'row']}>
            <Card />
            <Card />
            <Card />
            <Card />
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
  }
}