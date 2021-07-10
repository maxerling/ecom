import React from "react";
import {
  VStack,
  Flex,
  Heading,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon, FaSun, FaInstagram, FaGithub } from "react-icons/fa";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
      <VStack p={5}>
        <Flex w="100%">
          <Heading ml="8" size="md" fontweight="semibold" color="cyan.400">
            Ecom
          </Heading>
        </Flex>
        <IconButton
          aria-label="social"
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
        ></IconButton>
      </VStack>
    </>
  );
}

export default App;
