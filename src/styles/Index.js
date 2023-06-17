import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem;
    padding-top: 4rem;
  }

  @media only screen and (max-width: 375px),
    only screen and (-webkit-min-device-width: 375px) and (-webkit-max-device-width: 812px) {
    padding: 1rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  font-family: var(--font-mono);
  @media (max-width: 375px),
    (-webkit-min-device-width: 375px) and (-webkit-max-device-width: 812px) {
    font-size: 1rem;
  }

  & > p {
    position: relative;
    padding: 0.3rem;
    text-align: center;
  }
`;

export const Logo = styled.img`
  position: relative;
  max-width: 100%;
  height: auto;
  margin-bottom: 2rem;

  @media (max-width: 375px),
    (-webkit-min-device-width: 375px) and (-webkit-max-device-width: 812px) {
    margin-bottom: 1rem;
  }
`;

export const TaskmateHomepage = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 1;
  @media (max-width: 375px),
    (-webkit-min-device-width: 375px) and (-webkit-max-device-width: 812px) {
    width: 200px;
    height: 200px;
    bottom: 1rem;
    left: 1rem;
  }
`;

export const ButtonsContainerLog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
