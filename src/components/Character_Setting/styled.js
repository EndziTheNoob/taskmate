import styled, { keyframes } from 'styled-components';

const fly = keyframes`
  from {
    translate: 0 -180%;
  }
  to {
    translate: 0;
  }
`;

export const TaskmateFly = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 20%;
  z-index: 1;
  animation: ${fly} 1s linear;
`;

export const TaskmateDrop = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 20%;
  z-index: 1;
`;

export const TaskmateTalking = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 20%;
  z-index: 1;
  scale: -1 1;
`;
