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

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");

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
          <Text fontSize="7xl" mb={2} fontWeight="bold">
            Max Erling
          </Text>
          <Text fontSize="3xl" textStyle="mono" fontWeight={100}>
            Software Engineer
          </Text>
          <Text fontSize="3xl" textStyle="mono" fontWeight={100}>
            Software Developer
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"} mt={4}>
            Man, Myth, The Legend
          </Text>
          <ButtonGroup spacing="8">
            <Button mt={8} size="lg" colorScheme="green" fontWeight={700}>
              Projects
            </Button>
            <Button mt={8} size="lg" colorScheme="pink" fontWeight={700}>
              Contact Me
            </Button>
          </ButtonGroup>
        </Box>
        <MotionBox
          transitionDuration={"0.5s"}
          whileHover={{ scale: 1.1 }}
          pt={isNotSmallerScreen ? 40 : 0}
        >
          <Image
            ml={isNotSmallerScreen ? 12 : 0}
            alignSelf="right"
            mt={isNotSmallerScreen ? 0 : 12}
            src="https://i.pinimg.com/originals/51/95/eb/5195ebb8c5f9772deda82aa2937134d3.jpg"
            boxSize="400px"
            borderRadius="md"
          />
        </MotionBox>
      </Flex>
    </Stack>
  );
};

export {};
