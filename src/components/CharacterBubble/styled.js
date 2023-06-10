import styled, { keyframes } from 'styled-components';

const Palette = {
  bubbleBlack: '#000000',
  bubbleWhite: '#ffffff',
};

const zoomIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const BubbleContainer = styled.div`
  position: absolute;
  bottom: 22rem;
  left: 2rem;
  max-width: 300px;
  animation-name: ${zoomIn};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
`;

export const BubbleContent = styled.div`
  position: relative;
  display: inline-block;
  padding: 1rem;
  border: 2px solid ${Palette.bubbleBlacks};
  background-color: ${Palette.bubbleWhite};
  border-radius: 22px;
  box-shadow: -3px 4px rgb(129, 129, 129);
  color: ${Palette.bubbleBlacks};
  font-size: 0.8rem;
  white-space: pre-line;
  min-width: 40%;
  font-family: var(--font-mono);
  margin-left: 2rem;
  text-align: center;
  z-index: 1;
`;
