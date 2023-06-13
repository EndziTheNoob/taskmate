import styled from 'styled-components';
import { Palette } from './Palette';

export const Clouds = styled.img`
  height: 100%;
  opacity: 60%;
  object-fit: cover;
`;

export const CloudsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const QuoteStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  background-color: ${Palette.white};
  border-radius: 10px;
  padding: 20px;
  color: ${Palette.black};
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid black;
  box-shadow: -3px 4px rgb(129, 129, 129);
  font-family: var(--font-mono);
  text-align: center;
  min-width: 20rem;
`;
