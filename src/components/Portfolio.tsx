import React from "react";
import {Flex,useMediaQuery,Box, Text,VStack, Heading, BoxProps, } from '@chakra-ui/react'
import { motion } from "framer-motion";

interface PortfolioProps {}

export const MotionBox = motion<BoxProps>(Box);

export const Portfolio: React.FC<PortfolioProps> = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:872px");

  return <Flex w='100%' >
  <VStack spacing={14} w='100%'>
    <Box alignSelf='center'><Heading fontSize='5xl' fontWeight={700}>Projects</Heading></Box>
    
    <Box bg='blue.400' h='10vh' w={isNotSmallerScreen ?'50%' :'60%'} rounded='xl'  bgPosition="100%"
  bgRepeat="no-repeat" opacity={0.8} bgImage={isNotSmallerScreen ? 'https://picsum.photos/seed/picsum/200/200' : ""} >
   
      <Text color='white' p={4} fontSize='2xl' fontWeight={700} >Mekanluft</Text>
      
    </Box>
    <Box bg='blue.400' h='10vh' w='50%' rounded='xl'   >
      <Text color='white' p={4} fontSize='2xl' fontWeight={700}>Mekanluft</Text>
    </Box>
    
  </VStack>
  </Flex>
  
};

export {};
