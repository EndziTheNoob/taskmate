import styled from 'styled-components';
import { Palette } from './palette';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Label = styled.label`
  font-size: 1rem;
  margin: 1rem;
  font-family: var(--font-mono);
`;

export const InputStyle = styled.input`
  text-decoration: none;
  color: ${Palette.black};
  font-size: 1rem;
  background-color: ${Palette.white};
  padding: 0.5rem 2rem;
  border: black solid 0.2rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 12px;
  width: 20rem;
  height: 4rem;
  font-family: var(--font-mono);
  margin: 1rem;
`;

export const ButtonStyle = styled.button`
  text-decoration: none;
  color: ${Palette.black};
  font-size: 0.8rem;
  background-color: ${Palette.purple_light};
  padding: 0.8rem 2rem;
  border: black solid 0.2rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 12px;
  width: 11rem;
  height: 3rem;
  margin: 1rem;
  text-align: center;
  font-family: var(--font-mono);
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${Palette.purple_light};
    transform: translateY(5px);
  }
`;
