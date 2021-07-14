import React from "react";
import {Flex,useMediaQuery,Box, Text,VStack, Heading,Image,HStack, BoxProps, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure, Button} from '@chakra-ui/react'
import { motion } from "framer-motion";

interface PortfolioProps {}



export const Portfolio: React.FC<PortfolioProps> = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:872px");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const MotionBox = motion<BoxProps>(Box);

  return <Flex w='100%' >
  <VStack spacing={14} w='100%'>
    <Box alignSelf='center'><Heading fontSize='5xl' fontWeight={700}>Projects</Heading></Box>

    <MotionBox onClick={onOpen} transitionDuration={"0.3s"}
          whileHover={{ opacity: 1, boxShadow:  '12px 12px 2px 1px rgba(56, 161, 105, .2)', cursor:'pointer'}}bg='blue.400' h='10vh' w={isNotSmallerScreen ?'50%' :'60%'} rounded='xl'  bgPosition="100%"
  bgRepeat="no-repeat" opacity={0.8} bgImage={isNotSmallerScreen ? 'https://picsum.photos/seed/picsum/200/200' : ""} >
   
      <Text color='white' p={4} fontSize='2xl' fontWeight={700} >Mekanluft</Text>

      <Modal isOpen={isOpen} onClose={onClose} size='full'>
        <ModalOverlay />
        <ModalContent p={8} maxW="80rem" maxH="2rem">
          <ModalHeader fontStyle=''>Mekanluft</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
          <Image alignContent='start' src='https://picsum.photos/seed/picsum/500/500'/>
          <Box>llool</Box>
          </HStack>
            <VStack>
              
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fuga exercitationem ipsum nihil ab perspiciatis alias perferendis quos repellat, possimus praesentium veniam aliquid officia qui minus quae. Facere, accusamus nihil.</Text>
            </VStack>
          
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MotionBox>
    <MotionBox bg='blue.400' h='10vh' w={isNotSmallerScreen ?'50%' :'60%'} rounded='xl'  bgPosition="100%"
  bgRepeat="no-repeat" opacity={0.8} bgImage={isNotSmallerScreen ? 'https://picsum.photos/seed/picsum/200/200' : ""} >
   
      <Text color='white' p={4} fontSize='2xl' fontWeight={700} >Mekanluft</Text>
      
    </MotionBox>
    
 

  </VStack>
  </Flex>
  
};

export {};
