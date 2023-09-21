import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {FaLinkedin,FaCode,FaGithub} from 'react-icons/fa';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
         <VStack alignItems={['center', 'flex-start']} width="full">
           <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@Aditi Saxena"
            color={'yellow.400'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a href="https://www.linkedin.com/in/aditisaxena29" target={"blank"}>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/aditisaxena29" target={"blank"}>
                    <FaGithub />
                </a>
                <a href="https://leetcode.com/aditisaxena29" target={"blank"}>
                    <FaCode />
                </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
