import styled, { createGlobalStyle } from 'styled-components';

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
    font-weight: unset;
    margin: 0;
  }

  .container {
    padding: 0 1rem;

    @media(min-width: 992px) {
      padding: 0 calc((100vw - 900px) / 2);
    }
  }

  .flex {
    display: flex;
  }

  .flex--centro {
    align-items: center;
    justify-content: center;
  }
`;

export const PageTitle = styled.h1`
  align-items: center;
  background-color: ${props => props.theme.colors.boxes};
  border-radius: 10px;
  box-shadow: ${props => '0 5px 10px ' + props.theme.colors.shadowColor};
  display: flex;
  font-family: 'Pacifico', cursive;
  font-size: 1.75rem;
  height: 4.75rem;
  margin: 1.25rem 0 2rem;
  padding-left: 2rem;
`;

export default GlobalStyle;
