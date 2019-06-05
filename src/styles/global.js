import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smothing: antialiased !important;
    font-family: sans-serif
  }
`;

export default GlobalStyle;
