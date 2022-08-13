import './App.css';
import { ChakraProvider, Box, Heading} from '@chakra-ui/react';
import { appTheme } from './styles/Theme'

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <Box bgColor={appTheme.colors.body} minHeight="100vh">
        <Heading textAlign='center' fontFamily='La Belle Aurore, cursive'>Today's Tasks</Heading>
      </Box>
    </ChakraProvider>
  );
}

export default App;
