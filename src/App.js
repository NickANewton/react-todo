import './App.css';
import { ChakraProvider, Box, Heading, Flex, Input, Button, Container } from '@chakra-ui/react';
import { appTheme } from './styles/Theme'

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <Container>
      <Box minHeight="100vh">
        <Heading 
          textAlign='center' 
          fontFamily={appTheme.fonts.family.laBelle} 
          fontSize={appTheme.fonts.size.heading}
          mt="2.5rem">  
          Today's Tasks
        </Heading>
        <Flex mt="2rem">
          <Input bgColor="#FFFFFF" mr="0.75rem" />
          <Button bgColor="#B1D19B" color="#FFFFFF">ADD</Button>
        </Flex>
      </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
