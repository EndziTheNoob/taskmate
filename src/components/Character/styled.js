import styled, { keyframes } from 'styled-components';

const walk = keyframes`
  from {
    translate: -100% 0;
  }
  to {
    translate: 0;
  }
`;

export const TaskmateArrival = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 1;
  animation: ${walk} 3s linear;
`;

export const TaskmateTalking = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 1;
`;

export const TaskmateLeaving = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 1;
  scale: -1 1;
  animation: ${walk} 3s reverse linear forwards;
`;
