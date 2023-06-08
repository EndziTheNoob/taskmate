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
  left: 10rem;
  z-index: 1;
`;

export const StyledLink = styled.a`
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
}`;
