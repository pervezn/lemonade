import React, {useState} from 'react';
import { Box, Heading, Text, Link, Flex,  } from '@chakra-ui/react'
import data from "./data"


const Pill = (props) => {
    const { children, color } = props

    return (
        <Box style={styles.pill}>
            <Text style={{...styles.pillText, backgroundColor: color}}>
                {children}
            </Text>
        </Box>
    )
}

export default Pill

const styles = {
    pill: {
        marginBottom: '10px',
        marginRight: '5px',
    },
    pillText: {
        color: '#fff',
        display: 'inline-block',
        fontSize: '.75em',
        fontWeight: '600',
        lineHeight: '1',
        padding: '0.25rem 0.6rem',
        textAlign: 'center',
        verticalAlign: 'baseline',
        whiteSpace: 'nowrap',
        borderRadius: '0.375rem',
    }
}
//variants: tech stack, framework, environment (fly.io, github actions)

