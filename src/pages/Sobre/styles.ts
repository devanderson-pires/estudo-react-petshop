import styled from 'styled-components';

export const Card = styled.article`
  background-color: ${props => props.theme.colors.boxes};
  border-radius: 10px;
  box-shadow: 0 5px 10px ${props => props.theme.colors.shadowColor};
  box-sizing: border-box;
  margin-bottom: 1rem;
  max-width: 45rem;
  padding: 1.75rem;
  width: 100%;
`;
