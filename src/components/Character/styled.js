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
  width: 300px;
  height: 300px;
  @media (max-width: 768px) {
    /* Adjust the positioning for smaller screens */
    transform: none;
    width: 260px;
    height: 260px;
  }
`;

export const TaskmateTalking = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 1;
  width: 300px;
  height: 300px;
  @media (max-width: 768px) {
    /* Adjust the positioning for smaller screens */
    transform: none;
    width: 260px;
    height: 260px;
  }
`;

export const TaskmateLeaving = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 1;
  scale: -1 1;
  animation: ${walk} 3s reverse linear forwards;
  width: 300px;
  height: 300px;
  @media (max-width: 768px) {
    /* Adjust the positioning for smaller screens */
    transform: none;
    width: 260px;
    height: 260px;
  }
`;
