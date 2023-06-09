import styled from 'styled-components';

export const Palette = {
  purple_light: '#F4EDF9',
  gray_dark: '#666666',
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
