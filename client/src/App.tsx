import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from './theme';
import { Auth, Clients, Dashboard, Home, Plans } from './pages';

const App: FC = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/clients/*" element={<Clients />} />
          <Route path="/plans/*" element={<Plans />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
