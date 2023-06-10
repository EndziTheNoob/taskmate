import styled from 'styled-components';

const Palette = {
  buttonColor: '#F4EDF9',
  buttonWhite: 'white',
};

export const ButtonStyle = styled.div`
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  background-color: ${Palette.buttonWhite};
  padding: 0.8rem 2rem;
  border: black solid 0.2rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 12px;
  width: 9rem;
  margin: 2rem;
  text-align: center;
  font-family: var(--font-mono);
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${Palette.buttonColor};
    transform: translateY(5px);
  }

  a {
    font-size: 1rem;
    padding: 0.8rem;
  }
`;
