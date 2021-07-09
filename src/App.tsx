import React from "react";
import { Header, Footer, Container } from "./components";
import { VStack, Flex, Heading } from '@chakra-ui/react';
function App() {
  return (
    <>
    <VStack p={5}>
      <Flex w='100%'>
      <Heading ml='8' size='md' fontweight='semibold' color='cyan.400'>Ecom</Heading>
      </Flex>
      </VStack>
    </>
  );
}

export default App;
