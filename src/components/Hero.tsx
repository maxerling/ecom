import React from "react";
import { Stack, useMediaQuery,Flex, Box,Text, useColorMode, Button,ButtonGroup, Image} from '@chakra-ui/react'
interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  const {colorMode} = useColorMode();
  const isDark = colorMode === 'dark';

  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px') 
  return (


    
    <Stack >
    <Flex backgroundSize={'cover'} direction={isNotSmallerScreen ? "row" : "column"} w={'100%'}
        spacing="200px" p={isNotSmallerScreen ? "32" : "0" }
        alignSelf="flex-start" >
        
          <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
            <Text fontSize='7xl' mb={2} fontWeight='bold'>Max Erling</Text>
            <Text fontSize='3xl' textStyle='mono' fontWeight={100}>Software Engineer</Text>
            <Text fontSize='3xl'  textStyle='mono' fontWeight={100}>Software Developer</Text>
            <Text color={isDark ? "gray.200" : "gray.500"} mt={4}>Man, Myth, The Legend</Text>
            <ButtonGroup spacing="8" >
              <Button mt={8} size='lg' colorScheme='green' fontWeight={700} >Projects</Button>
              <Button mt={8} size='lg'colorScheme='pink' fontWeight={700}>Contact Me</Button>
              
            </ButtonGroup>
            
          </Box>
          <Box pt={isNotSmallerScreen ? 40 : 0}>
          <Image ml={isNotSmallerScreen ? 12 : 0}alignSelf='right' mt={isNotSmallerScreen ? 0 : 12} src='https://i.pinimg.com/originals/51/95/eb/5195ebb8c5f9772deda82aa2937134d3.jpg' boxSize='400px' opacity={1} color='grey' _hover={{
    boxShadow: '12px 5px 0px 10px',
  }}/></Box>
          
    </Flex>
  </Stack>



    
  );

};

export {};
