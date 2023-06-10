import styled from 'styled-components';

const Palette = {
  purple_light: '#b6acbd',
  pink_light: '#FFC8DD',
  blue_light: '#A8D8FF',
};

export const Container = styled.div`
  max-width: 40rem;
  font-family: var(--font-mono);
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 2rem;
  top: 2rem;
`;

export const Colors = styled.div`
  display: flex;
  padding: 1rem;
`;

export const Circle1 = styled.div`
  background-color: ${Palette.purple_light};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: black solid 0.1rem;
  gap: 1rem;
  margin: 0.5rem;
`;

export const Circle2 = styled.div`
  background-color: ${Palette.pink_light};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: black solid 0.1rem;
  margin: 0.5rem;
`;

export const Circle3 = styled.div`
  background-color: ${Palette.blue_light};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: black solid 0.1rem;
  margin: 0.5rem;
`;
