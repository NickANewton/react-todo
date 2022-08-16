import './App.css';
import React, {useState} from 'react';
import { ChakraProvider, Heading, Container, Flex, Input, Button, FormControl } from '@chakra-ui/react';
import { appTheme } from './styles/Theme'


function App() {
    const [input, setInput] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [id, setId] = useState(0);

    const handleChange = (event) => {
        setInput(event.target.value)    
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const task = {
            id: setId(id + 1),
            task: input
        }

        setTaskList(oldList => [task, ...oldList])
        setInput('');
        console.log(taskList);
    }
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
        <form onSubmit={handleSubmit}>
            <FormControl>
                <Flex mt="2rem">
                    <Input 
                        type="text"
                        bgColor="#FFFFFF" 
                        mr="0.75rem"
                        placeholder="What needs to be done?"
                        value={input}
                        onChange={handleChange} />
                    <Button bgColor="#B1D19B" color="#FFFFFF">ADD</Button>
                </Flex>
            </FormControl>
        </form>
      </Container>
    </ChakraProvider>
  );
}

export default App;
