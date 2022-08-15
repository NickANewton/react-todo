import React, { useState } from "react";
import { Flex, Input, Button, FormControl } from '@chakra-ui/react';

export default function TodoForm() {
    const [task, setTask] = useState('');

    const handleChange = (event) => {
        setTask(event.target.value)
    }
    return(
        <form>
            <FormControl>
                <Flex mt="2rem">
                    <Input 
                        type="text"
                        bgColor="#FFFFFF" 
                        mr="0.75rem"
                        placeholder="What needs to be done?"
                        value={task}
                        onChange={handleChange} />
                    <Button bgColor="#B1D19B" color="#FFFFFF">ADD</Button>
                </Flex>
            </FormControl>
        </form>
    )
}