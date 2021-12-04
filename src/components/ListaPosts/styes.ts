import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostSection = styled.section`
  display: grid;
  grid-gap: 2.25rem;

  @media(min-width: 540px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const PostLink = styled(Link)`
  background-color: ${props => props.theme.colors.boxes};
  border-radius: 10px;
  border-top: 1rem solid;
  box-shadow: unset;
  box-sizing: border-box;
  display: block;
  max-width: 25rem;
  padding: 1rem 2rem 2rem;
  width: 100%;
`;

export const PostTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const PostMeta = styled.p`
  line-height: 1.3rem;
`;
