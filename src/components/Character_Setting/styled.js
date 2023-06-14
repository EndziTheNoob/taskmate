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

  @media (max-width: 768px) {
    /* Adjust the positioning for smaller screens */
    transform: none;
    bottom: 2rem;
    left: 10%;
  }
`;

export const TaskmateDrop = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 20%;
  z-index: 1;

  @media (max-width: 768px) {
    /* Adjust the positioning for smaller screens */
    transform: none;
    bottom: 2rem;
    left: 10%;
  }
`;

export const TaskmateTalking = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 20%;
  z-index: 1;
  scale: -1 1;

  @media (max-width: 768px) {
    /* Adjust the positioning for smaller screens */
    transform: none;
    bottom: 2rem;
    left: 10%;
  }
`;
