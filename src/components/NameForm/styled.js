import styled from 'styled-components';

export const InputStyle = styled.input`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  background-color: white;
  padding: 0.5rem 2rem;
  border: black solid 0.2rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 12px;
  width: 20rem;
  height: 4rem;
  font-family: var(--font-mono);
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
`;
