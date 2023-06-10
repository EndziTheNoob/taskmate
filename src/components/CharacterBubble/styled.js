import styled from 'styled-components';

const Palette = {
  bubbleBlack: '#000000',
  bubbleWhite: '#ffffff',
};

export const BubbleContainer = styled.div`
  position: absolute;
  bottom: 22rem;
  left: 8rem;
  max-width: 400px;
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
