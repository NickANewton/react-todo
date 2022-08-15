import './App.css';
import React from 'react';
import { ChakraProvider, Heading, Container} from '@chakra-ui/react';
import { appTheme } from './styles/Theme'
import TodoForm from './components/TodoForm';

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <Container>
        <Heading 
          textAlign='center' 
          fontFamily={appTheme.fonts.family.laBelle} 
          fontSize={appTheme.fonts.size.heading}
          mt="2.5rem">  
          Today's Tasks
        </Heading>
       <TodoForm />
      </Container>
    </ChakraProvider>
  );
}

export default App;
