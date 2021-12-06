import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  font-size: .875rem;
`;

export const Input = styled.input`
  border: 1px solid ${props => props.theme.colors.body};
  border-radius: 7px;
  font-weight: 300;
  margin-top: .5rem;
  padding: .5rem;
`;

export const Textarea = styled.textarea`
  border: 1px solid ${props => props.theme.colors.body};
  border-radius: 7px;
  font-weight: 300;
  margin-top: .5rem;
  min-height: 3.25rem;
  padding: .5rem;
  resize: vertical;
`;

export const Button = styled.button`
  align-self: center;
  background-color: ${props => props.theme.colors.textColor};
  border: none;
  border-radius: 7px;
  color: ${props => props.theme.colors.boxes};
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
  max-width: 20rem;
  padding: 1.125rem;
  width: 100%;
`;
