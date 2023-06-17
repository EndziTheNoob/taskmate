import { createGlobalStyle } from 'styled-components';
import { Palette } from './Palette';

export const GlobalStyles = createGlobalStyle`
:root {
  --font-mono: 'Krona One';
  --font-todolist: 'Inter', sans-serif;
 
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  height: 100%;
}

body {
  background-color: ${Palette.blue_light};
  
  &>div:first-child {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}

a {
  color: inherit;
  text-decoration: none;
}
`;
