import styled from 'styled-components';
import { Palette } from '../../styles/palette';

export const ButtonStyle = styled.div`
  text-decoration: none;
  color: ${Palette.black};
  font-size: 0.8rem;
  background-color: ${Palette.white};
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

  a {
    font-size: 1rem;
    padding: 0.8rem;
  }
`;
