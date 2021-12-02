import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background-color: ${props => props.theme.colors.body};
    color: ${props => props.theme.colors.textColor};
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
