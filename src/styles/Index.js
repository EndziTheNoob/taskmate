import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
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
  @media (max-width: 375px) {
    font-size: 3rem;
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
`;

export const TaskmateHomepage = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 1;
  @media (max-width: 375px) {
    width: 200px;
    height: 200px;
  }
`;
