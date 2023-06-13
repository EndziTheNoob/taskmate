import styled from 'styled-components';

export const Container = styled.div`
  max-width: 40rem;
  font-family: var(--font-mono);
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

export const Colors = styled.div`
  display: flex;
  padding: 1rem;
`;

export const Circle = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: 75px;
  height: 75px;
  border: black solid ${(props) => (props.selected ? '0.2rem' : '0.1rem')};
  gap: 1rem;
  margin: 0.5rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  cursor: pointer;

  &:hover,
  &:active {
    filter: brightness(95%);
    transform: translateY(5px);
  }
`;
