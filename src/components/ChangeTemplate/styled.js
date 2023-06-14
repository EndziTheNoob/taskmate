import styled from 'styled-components';

export const Container = styled.div`
  max-width: 40rem;
  font-family: var(--font-mono);
  display: flex;
  flex-direction: column;
  margin-top: -7rem;
  text-align: center;
`;

export const Colors = styled.div`
  display: flex;
  padding: 1rem;
`;

export const Circle = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: black solid
    ${(props) =>
      // @ts-ignore
      props.selected ? '0.2rem' : '0.1rem'};
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
