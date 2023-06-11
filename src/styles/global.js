import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap');

:root {
  --max-width: 1100px;
  --border-radius: 12px;
  --font-mono: 'Krona One';
  --font-todolist: 'Inter', sans-serif;

  --background-color: #F1F9FF;
  --color-purple: #b6acbd;
  --color-lightblue: #F1F9FF;
  --color-lightpurple: #F4EDF9;
  --color-gray: #F3F3F3;
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
}

body {
  background-color: var(--background-color);
}

a {
  color: inherit;
  text-decoration: none;
}
`;
