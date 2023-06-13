import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --max-width: 1100px;
  --border-radius: 12px;
  --font-mono: 'Krona One';
  --font-todolist: 'Inter', sans-serif;

  --background-color: #F1F9FF;
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
  background-color: var(--background-color);
  
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
