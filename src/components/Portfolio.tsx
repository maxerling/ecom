import React from "react";
import {Flex,useMediaQuery,Box, Text,VStack, Heading,Image,HStack, BoxProps, Circle , Tag, TagLabel, Modal,
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

  const projects = [
    {
      id: 1,
      projectName: 'Mekanluft',
      projectImg: 'https://picsum.photos/seed/picsum/400/400',
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
      projectDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fuga exercitationem ipsum nihil ab perspiciatis alias perferendis quos repellat, possimus praesentium veniam aliquid officia qui minus quae. Facere, accusamus nihil.',
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
    
  ]
  

  const projectList = projects.map((p) => { return <MotionBox  key={p.id} onClick={onOpen} transitionDuration={"0.3s"}
              whileHover={{ opacity: 1, boxShadow:  '12px 12px 2px 1px rgba(56, 161, 105, .2)', cursor:'pointer'}}bg='blue.400' h='10vh' w={isNotSmallerScreen ? '50%' :'60%'} rounded='xl'  bgPosition="100%"
      bgRepeat="no-repeat" opacity={0.8} bgImage={isNotSmallerScreen ? p.projectImg : ""} >
      
          <Text color='white' p={4} fontSize='2xl' fontWeight={700} >{p.projectName}</Text>
    
          <Modal isOpen={isOpen} onClose={onClose} size='lg'>
            <ModalOverlay />
            <ModalContent p={8} maxW="80rem" maxH="80rem">
              <ModalHeader fontStyle=''>{p.projectName}</ModalHeader>
              <ModalCloseButton />
              <ModalBody >
                <HStack >
                  <Image src={p.projectImg} w={isNotSmallerScreen ? 400 : 200}/>
                  <Text textAlign='left' p={8}>{p.projectDesc}</Text>
                    
                </HStack>
              
              </ModalBody>
              
              <ModalFooter p={8} >
                {p.projectTag.map((t) => {
                  return <Tag p={2} mr={2} colorScheme={t.tagColor} borderRadius="full">
                  <Circle size="8px" bg={t.tagColor} mr={1}/>
                  <TagLabel>{t.tagName}</TagLabel>
                </Tag>
                })}
                
              </ModalFooter>
            </ModalContent>
          </Modal>
        </MotionBox>
    
  }
  
  );


  return (<Flex w='100%' >
  <VStack spacing={14} w='100%'>
    <Box alignSelf='center'><Heading fontSize='4xl' fontWeight={700}>Projects</Heading></Box>
    {projectList}
 

  </VStack>
  </Flex>)
  
};

export {};
