import styled from 'styled-components';

export const PostCard = styled.article`
  background-color: ${props => props.theme.colors.boxes};
  border-radius: 10px;
  box-shadow: ${props => '0 5px 10px ' + props.theme.colors.shadowColor};
  box-sizing: border-box;
  margin: 1.25rem 0 1rem;
  max-width: 45rem;
  padding: 1.75rem;
  width: 100%;
`;

export const PostCardTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

export const PostCardText = styled.p`
  line-height: 1.2rem;
`;
