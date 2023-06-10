import styled from 'styled-components';

export const Palette = {
  purple_light: '#F4EDF9',
  gray_dark: '#666666',
  buttonColor: '#F4EDF9',
  buttonWhite: 'white',
};

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TaskmateSetting = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 20rem;
  z-index: 1;
`;

export const BubbleSetting = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  bottom: -4rem;
  left: -4rem;
`;

export const BubbleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonStyled = styled.button`
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  background-color: ${Palette.buttonWhite};
  padding: 0.5rem 2rem;
  border: black solid 0.2rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 12px;
  width: 10rem;
  margin: 2rem;
  text-align: center;
  font-family: var(--font-mono);
  cursor: pointer;
  font-size: 1rem;

  &:hover,
  &:active {
    background-color: ${Palette.buttonColor};
    transform: translateY(5px);
  }
`;
