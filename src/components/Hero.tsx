import React from "react";
import {
  Stack,
  useMediaQuery,
  Flex,
  Box,
  Text,
  useColorMode,
  Button,
  ButtonGroup,
  Image,
  BoxProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface HeroProps {}

export const MotionBox = motion<BoxProps>(Box);

export const Hero: React.FC<HeroProps> = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:872px");

  return (
    <Stack>
      <Flex
        backgroundSize={"cover"}
        direction={isNotSmallerScreen ? "row" : "column"}
        w={"100%"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text
            fontSize={isNotSmallerScreen ? "7xl" : "6xl"}
            mb={2}
            fontWeight="bold"
          >
            Max Erling
          </Text>
          <Text
            fontSize={isNotSmallerScreen ? "3xl" : "2xl"}
            textStyle="mono"
            fontWeight={100}
          >
            Software Engineer
          </Text>
          <Text
            fontSize={isNotSmallerScreen ? "3xl" : "2xl"}
            textStyle="mono"
            fontWeight={100}
          >
            Software Developer
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"} mt={4}>
            The Man, The Myth, The Legend
          </Text>
          <ButtonGroup size="lg" mt={8} spacing="8" fontWeight={700}>
            <Button colorScheme="green" >
              Projects
            </Button>
            <Button colorScheme="pink">
              Contact Me
            </Button>
          </ButtonGroup>
        </Box>
        <MotionBox
          transitionDuration={"0.5s"}
          whileHover={{ scale: 1.1,}
          }
          pt={isNotSmallerScreen ? 40 : 0}
        >
          <Image
            ml={isNotSmallerScreen ? 12 : 0}
            alignSelf="right"
            mt={isNotSmallerScreen ? 0 : 12}
            src="https://i.pinimg.com/originals/51/95/eb/5195ebb8c5f9772deda82aa2937134d3.jpg"
            boxSize={isNotSmallerScreen ? '550px' : '0px'}
            borderRadius="md"
          />
        </MotionBox>
      </Flex>
    </Stack>
  );
};

export {};
