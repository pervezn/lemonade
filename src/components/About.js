import {Circle, Box, Link, Flex, Text, Image } from '@chakra-ui/react'
import React, {useState} from 'react';
import image from '../images/nida.jpg'

const About = () => {
    return (
        <Box>
            <Box boxSize="xs" style={styles.img} mt={{sm: '100px', base: '50px'}}>
                <Image src={image} alt='Nida Pervez' borderRadius='full'  />
            </Box>
            <Box style={styles.description} width={[300, 400, 500, 700]} fontSize={{ sm: '8px', md: '10px', base: '12px' }}>
                <Text style={styles.paragraph}>Hi there, I’m Nida Pervez. I mostly code. But, when I am not coding, you can find me playing my guitar or staring at clouds.  </Text>
                <Text style={styles.paragraph}>As a wandering freshman at Northwestern University, I somehow chanced upon an introductory computer science class. Coming from a family with primarily medical background, coding was a completely alien concept to me. Despite it’s foreign-ness, something about it drew me in, until before I knew it I started my first job as a Software Engineer. Now, at my second job as a full stack engineer at Upside, this alien universe seems a little more familiar. </Text>
                <Text style={styles.paragraph}>Learning is addictive. Perhaps that is what drew me into this alien world of coding to begin with. There is always a new skill or concept within reach. For me, it’s thrilling to have something new to dive deeper into, whether that’s picking up a new song on the guitar, or learning a new skill altogether, such as surfing or snowboarding, learning something new can provide a different perspective on older skills/tasks. You can keep track of all the new things I’m learning here: <Link>medium blogpost thing</Link>.</Text>
                <Text style={styles.paragraph}>Besides actively learning, there are many times where I find bliss in observing. One of my favorite past times is taking a walk down the Chicago river walk or staring at the clouds by Lake Michigan. In my free time, I also like to paint, play soccer, listen to music, and travel. I love the challenge in trying to recreate landscapes by just using colors, I love analyzing run and open space to score a goal, I love picking out specific instruments in songs, and finding similarities and differences in other cities/countries.</Text>
                <Text style={styles.paragraph}>But mostly, I love to make beautiful memories with friends and family :)</Text>
            </Box>
          
        </Box>
    )
}

export default About

const styles = {
    description: {
        // width: '700px',
        marginTop: '50px',
        fontSize: '12px',
        color: '#51547B'
    },
    paragraph: {
        marginTop: '10px'
    },
    img: {
        alignItems: 'center',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '50%',
        // marginTop: '100px'
    }
}