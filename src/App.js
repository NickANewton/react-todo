import './App.css';
import React, {useState} from 'react';
import { ChakraProvider, Heading, Container, Flex, Input, Button, FormControl, Box, Text, Icon } from '@chakra-ui/react';
import { appTheme } from './styles/Theme'
import { BsFillCircleFill, BsCheckCircle } from 'react-icons/bs'


function App() {
    const [input, setInput] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [id, setId] = useState(1);

    const handleChange = (event) => {
        setInput(event.target.value)    
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const task = {
            id: id,
            task: input
        }

        setTaskList(oldList => [task, ...oldList])
        setInput('');
        setId(id + 1);
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
                <Flex mt="2rem" mb='2.75rem'>
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
        <ul>
        {
          taskList.map((task) => {
            return(
            <li key={task.id}>
                <Flex
                  bgColor='#8CC0DE'
                  boxShadow='lg'
                  p='0.85rem'
                  mb='1rem'
                  borderRadius='1.5rem'
                  alignItems='center'>
                    <Icon as={BsFillCircleFill} color='#fff' display='' />
                    <Icon as={BsCheckCircle} color='#fff' display='none'/>
                    <Text ml='0.75rem' color='#fff'>{task.task}</Text>
                </Flex>
            </li>
            )
          })
        }
        </ul>
      </Container>
    </ChakraProvider>
  );
}

export default App;
