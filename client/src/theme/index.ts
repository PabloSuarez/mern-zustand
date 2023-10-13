import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { CSSReset } from '@chakra-ui/css-reset';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      '*': {
        boxSizing: 'border-box',
      },
    },
  },
});

export { theme, CSSReset };
