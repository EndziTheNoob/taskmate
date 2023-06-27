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
  width: 360px;
  height: 360px;

  @media (max-width: 768px) {
    /* Adjust the positioning for smaller screens */
    transform: none;
    width: 260px;
    height: 260px;
  }
`;

export const TaskmateDrop = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 20%;
  z-index: 1;
  width: 360px;
  height: 360px;

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
  left: 20%;
  z-index: 1;
  scale: -1 1;
  width: 300px;
  height: 300px;

  @media (max-width: 768px) {
    /* Adjust the positioning for smaller screens */
    transform: none;
    bottom: 2rem;
    width: 220px;
    height: 220px;
  }
`;
