import React from "react";
import {Flex,useMediaQuery,Box, Text,VStack, Heading,Image,HStack, BoxProps, Circle , Tag, TagLabel, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure} from '@chakra-ui/react';
import mekanluft_pre from '../imgs/mekanluft.png'
import { motion } from "framer-motion";
import { t } from "@chakra-ui/styled-system/dist/types/utils";

interface PortfolioProps {}





export const Portfolio: React.FC<PortfolioProps> = () => {
  


  const [isNotSmallerScreen] = useMediaQuery("(min-width:872px");

  const MotionBox = motion<BoxProps>(Box);


  const projects = [
    {
      id: 1,
      projectName: 'Mekanluft',
      projectImg: mekanluft_pre,
      projectDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fuga exercitationem ipsum nihil ab perspiciatis alias perferendis quos repellat, possimus praesentium veniam aliquid officia qui minus quae. Facere, accusamus nihil.',
      projectTag: [
        {tagName: 'React',
        tagColor: 'blue'
      },
      {tagName: 'TypeScript',
        tagColor: 'teal'
      }
      ,
      ]
    },
    {
      id: 2,
      projectName: 'Egg',
      projectImg: 'https://picsum.photos/seed/picsum/400/400',
      projectDesc: '.',
      projectTag: [
        {tagName: 'eGG',
        tagColor: 'blue'
      },
      {tagName: 'TypeScript',
        tagColor: 'teal'
      }
      ,
      ]
    }
    ,
    {
      id: 3,
      projectName: 'tres',
      projectImg: 'https://picsum.photos/seed/picsum/400/400',
      projectDesc: '.',
      projectTag: [
        {tagName: '',
        tagColor: 'blue'
      },
      {tagName: 'TypeScript',
        tagColor: 'teal'
      }
      ,
      ]
    }
    
  ]
  
  const CustomModal = ({ modalId, modalImg, modalHeader, modalDesc, p} : any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
    <MotionBox  key={modalId} onClick={onOpen} transitionDuration={"0.3s"} whileHover={{ opacity: 1, boxShadow:  '12px 12px 2px 1px rgba(56, 161, 105, .2)', cursor:'pointer'}}bg='blue.400' h='10vh' w={isNotSmallerScreen ? '50%' :'60%'} rounded='xl'  bgPosition="100%" bgRepeat="no-repeat" opacity={0.8} >
      <Text color='white' p={4} fontSize='2xl' fontWeight={700} >{modalHeader}</Text>
      <Modal  key={modalId} isOpen={isOpen} onClose={onClose} size='lg'>
        <ModalOverlay />
        <ModalContent p={8} maxW="80rem" maxH="80rem">
          <ModalHeader fontStyle=''>{modalHeader}</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <HStack >
              <Image src={modalImg} w={isNotSmallerScreen ? 400 : 200}/>
              <Text textAlign='left' p={8}>{modalDesc}</Text>
              </HStack>
              </ModalBody>
              <ModalFooter p={8} >
                {p.map((t : any) => {
                return <Tag p={2} mr={2} colorScheme={t.tagColor} borderRadius="full">
                  <Circle size="8px" bg={t.tagColor} mr={1}/>
                  <TagLabel>{t.tagName}</TagLabel>
                  </Tag>})}
                  </ModalFooter>
                  </ModalContent>
                  </Modal>      
                  </MotionBox>)
  };
  



  return (<Flex w='100%' >
  <VStack spacing={14} w='100%'>
    <Box alignSelf='center'><Heading fontSize='4xl' fontWeight={700}>Projects</Heading></Box>
    { projects.map((p) => { 

      return <CustomModal modalId={p.id} modalImg={p.projectImg} modalHeader={p.projectName} modalDesc={p.projectDesc} p={p.projectTag}/> 


    }) }

  </VStack>
  </Flex>)
  

  }
export {};
