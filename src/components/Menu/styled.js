import styled, { keyframes } from 'styled-components';

const Palette = {
  purple_light: '#b6acbd',
  gray_dark: '#666666',
};

const unfoldAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
export const MenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  background-color: white;
  padding: 0.5rem 2rem;
  border: black solid 0.2rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 12px;
  width: 8rem;
  height: 10rem;
  cursor: pointer;
  font-family: var(--font-mono);
  margin-top: 1rem;
  justify-content: space-evenly;
  animation: ${unfoldAnimation} 0.3s ease-in-out;
`;

export const HamburgerContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  cursor: pointer;
`;
