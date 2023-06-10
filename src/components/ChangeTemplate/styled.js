import styled from 'styled-components';

const Palette = {
  purple_light: '#b6acbd',
  pink_light: '#FFC8DD',
  pink_lighter: '#FFF0F6',
  blue_light: '#A8D8FF',
  blue_ligter: '#D1E9FD',
  dark_shadow: '#F4EDF9',
};

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

export const Circle1 = styled.div`
  background-color: ${Palette.purple_light};
  border-radius: 50%;
  width: 75px;
  height: 75px;
  border: black solid 0.1rem;
  gap: 1rem;
  margin: 0.5rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  cursor: pointer;
  &:hover,
  &:active {
    background-color: ${Palette.dark_shadow};
    transform: translateY(5px);
  }
`;

export const Circle2 = styled.div`
  background-color: ${Palette.pink_light};
  border-radius: 50%;
  width: 75px;
  height: 75px;
  border: black solid 0.1rem;
  margin: 0.5rem;
  cursor: pointer;
  box-shadow: -3px 4px rgb(129, 129, 129);
  &:hover,
  &:active {
    background-color: ${Palette.pink_lighter};
    transform: translateY(5px);
  }
`;

export const Circle3 = styled.div`
  background-color: ${Palette.blue_light};
  border-radius: 50%;
  width: 75px;
  height: 75px;
  border: black solid 0.1rem;
  margin: 0.5rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  cursor: pointer;
  &:hover,
  &:active {
    background-color: ${Palette.blue_ligter};
    transform: translateY(5px);
  }
`;
