import './App.css';
import React, {useEffect, useState} from 'react';
import { ChakraProvider, Heading, Container, Flex, Input, Button, FormControl, Text, Icon } from '@chakra-ui/react';
import { appTheme } from './styles/Theme'
import { BsFillCircleFill, BsCheckCircle, BsTrash } from 'react-icons/bs'
import jsonData from '../src/data/data.json'


function App() {
    const [input, setInput] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [id, setId] = useState(4);
    const [filterText, setFilterText] = useState('All');
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
      if (localStorage.getItem('task-list') === null) {
        setTaskList(jsonData)
      } else {
        let tasksLocal = JSON.parse(localStorage.getItem('task-list'))
        setTaskList(tasksLocal)
      }
    }, [])

    useEffect(() => {
      localStorage.setItem('task-list', JSON.stringify(taskList))
    }, [taskList])

    useEffect(() => {
      handleFilteredTasks();
    }, [taskList, filterText])

    const handleChange = (event) => {
        setInput(event.target.value)    
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const task = {
            id: id,
            task: input,
            isChecked: false
        }

        setTaskList(oldList => [task, ...oldList])
        setInput('');
        setId(id + 1);
    }

    const handleClick = (id) => {
      let completed = taskList.map(task => {
        if (task.id === id) {
          task.isChecked = !task.isChecked
        }
        return task
      })
      setTaskList(completed);
    }

      const handleDelete = (id) => {
        const removeDeleted = taskList.filter(task => task.id !== id);
        setTaskList(removeDeleted);
      }

      const handleFilterText = (event) => {
        if (event.target.nodeName === 'P')
        setFilterText(event.target.textContent)
      }

      const handleFilteredTasks = () => {
        if (filterText === 'Active') {
          setFilteredTasks(taskList.filter(task => task.isChecked === false))
        } else if (filterText === 'Completed') {
          setFilteredTasks(taskList.filter(task => task.isChecked === true))
        } else if (filterText === 'All') {
          setFilteredTasks(taskList);
        }
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
        <Flex 
          justifyContent='space-around' 
          fontFamily={appTheme.fonts.family.laBelle} 
          fontSize='1.5rem'
          mb='1rem'
          onClick={handleFilterText}>
          <Text color={filterText === 'All' ? '#000' : '#A0AEC0'}>All</Text>
          <Text color={filterText === 'Active' ? '#000' : '#A0AEC0'}>Active</Text>
          <Text color={filterText === 'Completed' ? '#000' : '#A0AEC0'}>Completed</Text>
        </Flex>
        <ul>
        { filteredTasks.length > 0 ?
          filteredTasks.map((task) => {
            const uncheckedIcon = task.isChecked ? 'none' : ''
            const checkedIcon = task.isChecked ? '' : 'none'
            const strikeThrough = task.isChecked ? 'line-through' : 'none'

            return(
            <li key={task.id} id={task.id}>
                <Flex
                  bgColor='#8CC0DE'
                  boxShadow='lg'
                  p='0.85rem'
                  mb='1rem'
                  borderRadius='1.5rem'
                  justifyContent='space-between'>
                    <Flex alignItems='center' onClick={() => handleClick(task.id)}>
                      <Icon as={BsFillCircleFill} color='#fff' display={uncheckedIcon} />
                      <Icon as={BsCheckCircle} color='#fff' display={checkedIcon} />
                      <Text ml='0.75rem' color='#fff' textDecoration={strikeThrough}>{task.task}</Text>
                    </Flex>
                    <Flex alignItems='center'>
                      <Icon as={BsTrash} onClick={() => handleDelete(task.id)}  />
                    </Flex>
                </Flex>
            </li>
            )
          })
          : <li>
              <Flex justifyContent='center'>
                <Text>{filterText === 'All' ? 'No tasks listed, please add a task.' : `You have no ${filterText} tasks.`}</Text>
              </Flex>
            </li>
        }
        </ul>
      </Container>
    </ChakraProvider>
  );
}

export default App;

