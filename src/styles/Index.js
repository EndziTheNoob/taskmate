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

  & > p {
    position: relative;
    padding: 0.3rem;
    text-align: center;
  }
`;

export const Logo = styled.img`
  position: relative;
`;

export const ButtonBasic = styled.button`
text-decoration: none;
color: black;
font-size: 0.8rem;
background-color: white;
padding: 0.5rem 2rem;
border: black solid 0.2rem;
box-shadow: -3px 4px rgb(129, 129, 129);
border-radius: 12px;
width: 10rem;
cursor: pointer;
font-family: var(--font-mono);
}

&:hover {
background-color: #F4EDF9;
transform: translateY(5px);
}

&:active {
background-color: #F4EDF9;
transform: translateY(5px);
}
`;

export const TaskmateHomepage = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 1;
`;
