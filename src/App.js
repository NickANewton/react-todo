import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { appTheme } from './styles/Theme'

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <Box bgColor={appTheme.colors.body} minHeight="100vh">
      </Box>
    </ChakraProvider>
  );
}

export default App;
