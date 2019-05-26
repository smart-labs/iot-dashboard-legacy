import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body {
  background: #17171e;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smothing: antialiased !important;
  font-family:sans-serif
}
`;

export default GlobalStyle;
