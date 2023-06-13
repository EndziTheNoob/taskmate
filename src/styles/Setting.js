import styled from 'styled-components';
import { Palette } from './Palette';

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TaskmateSetting = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 20rem;
  z-index: 1;
`;

export const ButtonStyled = styled.button`
  text-decoration: none;
  color: ${Palette.black};
  font-size: 0.8rem;
  background-color: ${Palette.white};
  padding: 0.5rem 2rem;
  border: black solid 0.2rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 12px;
  width: 11rem;
  margin: 3rem;
  text-align: center;
  font-family: var(--font-mono);
  cursor: pointer;
  font-size: 1rem;

  &:hover,
  &:active {
    background-color: ${Palette.purple_light};
    transform: translateY(5px);
  }
`;
