import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface LinkProps {
  categoria: string;
}

export const ListCategoria = styled.ul`
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;

export const LinkCategoria = styled(Link)<LinkProps>`
  background-color: ${props => props.categoria === 'bem-estar' ? props.theme.colors.postBorderTopColor1 : props.theme.colors.postBorderTopColor2};
  border-radius: 3rem;
  color: #fff;
  font-weight: 500;
  padding: 1rem;
`;
