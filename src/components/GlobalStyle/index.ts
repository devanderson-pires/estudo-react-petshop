import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background-color: #d6eaff;
    color: #4d4d4d;
    font-family: 'Montserrat', sans-serif;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
  }
`;

export default GlobalStyle;
