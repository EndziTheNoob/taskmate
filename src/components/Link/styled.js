import styled from 'styled-components';
import { Palette } from '../../styles/Palette';

export const ButtonStyle = styled.div`
  text-decoration: none;
  color: ${Palette.black};
  font-size: 0.8rem;
  background-color: ${Palette.white};
  padding: 0.5rem 2rem;
  border: black solid 0.2rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 12px;
  width: 10rem;
  font-family: var(--font-mono);
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:active {
    background-color: ${Palette.purple_light};
    transform: translateY(5px);
  }

  a {
    font-size: 1rem;
    font-family: 'Krona One';
    @media (max-width: 390px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 390px) {
    width: 8rem;
  }
`;

export const ButtonStyleSetting = styled.div`
  text-decoration: none;
  color: ${Palette.black};
  font-size: 0.8rem;
  background-color: ${Palette.white};
  padding: 0.5rem 2rem;
  border: black solid 0.2rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 12px;
  width: 10rem;
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
    font-family: 'Krona One';
  }

  @media (max-width: 390px) {
    width: 6rem;
    padding: 0.2rem 1rem;
    z-index: 1;
  }
`;
